#include <iostream>
#include <map>
using namespace std;
class Usuario
{
public:
    string nick;
    string password;
    string monedas;
    string edad;
    Usuario() {}
    Usuario(string nick, string password, string monedas, string edad) : nick(nick), password(password), monedas(monedas), edad(edad) {}
    map<string, string> to_map()
    {
        return {{"nick", nick}, {"monedas", monedas}, {"edad", edad}};
    }
};