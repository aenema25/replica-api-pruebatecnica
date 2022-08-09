# Replica api "Soleit" (prueba tecnica)

## Version en vivo

* [Heroku](https://replica-api-soleit.herokuapp.com/)

## Uso

### Endpoint "login"

Este endpoint es de tipo ```POST```, recibe los atributos "user" y "password" dentro del body de la petición y devuelve un objeto.

```javascript
// cuerpo solicitud
{
    user:usuario,
    password:contraseña
}

// respuesta solicitud
{ 
    "key": "String" 
}
```

### Endpoint "points"

Este endpoint es de tipo ```GET```, el cual devuelve una series de puntos (x,y) en forma de objeto.

```javascript
// respuesta esperada
{
    rectangle1: [...],
    triangle: [...],
    rectangle2: [...]
}
```

### Endpoint "welcome"

Este endpoint es de tipo ```GET```, el cual recibe un parametro dentro de la ```URL``` de la petición.

* Ejemplo peticion
```bash
http://localhost:3000/welcome/nombre
```
* Ejemplo respuesta
```javascript
{ 
    welcome: "Hello nombre!"] 
}
```

## Descripción

Replica de API para prueba tecnica de la empresa "Soleit"

## Desarrollador

* [Oscar Uribe](https://github.com/aenema25)

## Tecnologia usadas

* [Express JS](https://expressjs.com/en/starter/installing.html)
* [Node.js](https://nodejs.org/en/docs/)

## Replicar localmente

Para replicar esta API seguir los siguientes pasos:

1.- Clonar localmente el repositorio y luego navegar a la carpeta

```bash
git clone https://github.com/aenema25/replica-api-pruebatecnica.git
cd replica-api-pruebatecnica
```
2.- Ejecutar el siguiente comando para correr el servidor

```bash
npm start
```

El servidor se ejecutará localmente en el puerto por defecto ```3000``` 