#include <iostream>
#include <fstream>
#include <map>
#include "../include/simple.hpp"

#include "../lib/crow_all.h"
#include "../lib/json.hpp"

using namespace std;
using json = nlohmann::json;

void to_json(json &JSON, const Usuario &us)
{
	JSON = {{"nickname", us.nick}, {"password", us.password}, {"monedas", us.monedas}, {"edad", us.edad}};
}

void from_json(const json &JSON, Usuario &us)
{
	us.nick = JSON.at("nick").get<string>();
	us.password = JSON.at("password").get<string>();
	us.monedas = JSON.at("monedas").get<string>();
	us.edad = JSON.at("edad").get<string>();
}

void cargar_datos(ListaSimple &ls)
{
	ifstream json_read("usuarios.json");
	json dict_json = json::parse(json_read);
	json usuarios = dict_json.at("usuarios");

	for (auto &usuario : usuarios)
	{
		// Usuario us(nick, pass, monedas, edad);
		auto use = usuario.get<Usuario>();
		ls.insertarAlFrente(use);
	}
}

int main()
{
	ListaSimple ls;
	cargar_datos(ls);

	crow::SimpleApp app;
	CROW_ROUTE(app, "/")
	([]
	 {
        crow::json::wvalue x({{"status", "OK!"},{"otro",12}});
        return x; });

	CROW_ROUTE(app, "/usuarios")
	([&ls]()
	 { 
		std::vector<crow::json::wvalue> temp = ls.to_vector();
		crow::json::wvalue final = std::move(temp);
		return crow::response(std::move(final)); });

	CROW_ROUTE(app, "/login")
	([&ls](const crow::request &req)
	 {
        auto x = crow::json::load(req.body);
        if (!x)
            return crow::response(400);
		string nick=x["nick"].s();
		string pass=x["password"].s();

		Usuario *usuario=ls.buscar(nick);
		
		if(usuario==nullptr){
			crow::json::wvalue cuerpo({{"error", "usuario no encontrado"}});
			crow::response send(std::move(cuerpo));
			send.code=404;
			return send;
		}

		if(usuario->password==pass){
			crow::json::wvalue cuerpo(&usuario);
			crow::response send(std::move(cuerpo));
        	return send;
		}

        crow::json::wvalue response({{"error", "Contraseña incorrecta"}});
        return crow::response(std::move(response)); });

	CROW_ROUTE(app, "/guardar_usuario")
		.methods("POST"_method)([&ls](const crow::request &req)
								{
          auto x = crow::json::load(req.body);
			if (!x)
				return crow::response(400);
			string nick=x["nick"].s();
			string pass=x["password"].s();
			string monedas=x["monedas"].s();
			string edad=x["edad"].s();
		
			ls.insertarAlFrente(Usuario(nick,pass,monedas,edad));
			return crow::response(200); });

	CROW_ROUTE(app, "/eliminar_usuario")
		.methods("DELETE"_method)([&ls](const crow::request &req)
								  {
          auto x = crow::json::load(req.body);
			if (!x)
				return crow::response(400);
			string nick=x["nick"].s();
			string pass=x["password"].s();
	
			//TODO: El metodo de eliminacion no es el correcto y deben implementarse las validaciones correspondientes
			ls.eliminarAlFrente();
			return crow::response(200); });
	app.port(5000).multithreaded().run();
	return 0;
}