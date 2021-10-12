# Dashboard de ventas
Este proyecto es una prueba tecnica donde se representan las ventas por usuario o equipo de ventas.

## Descargar
Para descargar el proyecto hay que abrir nuestra consola y ejecutar el siguiente comando:

`git clone https://github.com/aza-martinez/sales-frontend.git`

## Configurar
El proyeto contiene una carpeta llamada **src/config** la cual contiene un archivo **index.js** que contiene la configuración de todo el proyecto. La configuración que vamos a cambiar es la siguiente:

`const config = {
  API_BASE_URL: "https://sales-api-tucanton.herokuapp.com/",
};`

la variable **API_BASE_URL** se utiliza para realizar las consultas a la API, para ello ya se tiene una ruta establecida por defecto.

## Backend
La aplicación utiliza axios para realizar peticiones al Backend, el cual puede ser descargado desde el siguiente repositiorio:

[https://github.com/aza-martinez/sales-api](https://github.com/aza-martinez/sales-api)

## Ejecución
Para correr la aplicación debemos ejecutar los siguientes comandos:

Para instalar todas las dependencias
`npm  install`

Ejecutar el proyecto
`npm run start`