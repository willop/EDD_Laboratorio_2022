import requests
import json

base_url = "http://localhost:5000"

if __name__ == '__main__':
    #o btener usuarios
    res = requests.get(f'{base_url}/usuarios') 
    data = res.json() #convertimos la respuesta en dict


    print(data)
    
    # # login
    login = {'nick': 'somevalue','password':'asdf'}
    x = requests.get(f'{base_url}/login', json = login)
    print(x.text)

    # registrar
    usuario = {'nick': 'nuevo','password':'asdf','monedas':'45','edad':'56'}
    x = requests.post(f'{base_url}/guardar_usuario', json = usuario)
    print(x.status_code)
    # #eliminar usuario
    requests.delete(f'{base_url}/eliminar_usuario', json = login)