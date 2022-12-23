# Burger Queen (API Client)

## 1. Resumen del proyecto

Un restaurante de hamburguesas, que está creciendo, necesita un sistema a través del cual puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente.
Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor). Nuestrx clientx nos ha solicitado desarrollar la interfaz que se integre con la API que otro equipo de desarrolladoras está trabajando simultáneamente.


La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus productos. La usuaria debe poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total.

Además la clienta nos ha dado un [link a la documentación](https://laboratoria.github.io/burger-queen-api/) que especifica el comportamiento esperado de la API HTTP que deberás consumir. 

Se puede acceder al proyecto siguiendo el enlace: 
[Burger Queen (ApiClient)](https://brivanessa.github.io/LIM018-burger-queen-api-client/)
Usuario (Chef): admin@delices.com
Contraseña (Chef): admin
Usuario (Waiter): employee@delices.com
Contraseña (Waiter): employee

## 2. Objetivo del proyecto

El objetivo principal es aprender a construir una interfaz web usando el framework React para mantener la interfaz y el estado sincronizados. Así que esta experiencia espera familiarizarte con el concepto de estado de pantalla, y como cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un producto a un pedido, la interfaz debe actualizar la lista del pedido y el total).

## 3. Diseño de la Interfaz de Usuario

[Prototipo en Figma](https://www.figma.com/proto/TgI7dg62DrPIJT2lqwdabW/Burger-Queen-(API-Client)?node-id=29%3A30&starting-point-node-id=29%3A30)

## 4. Historias de usuario

1. Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales. Yo como meserx quiero poder ingresar al sistema de pedidos.
    #### Criterios de aceptación
    - Acceder a una pantalla de login.
    - Ingresar email y contraseña.
    - Recibir mensajes de error comprensibles, dependiendo de cuál es el error con la información ingresada.
    - Ingresar al sistema de pedidos si las crendenciales son correctas.
    #### Definición de terminado
    - Debes haber recibido code review de al menos una compañera.
    - Haces test unitarios y, además, has testeado tu producto manualmente.
    - Hiciste tests de usabilidad e incorporaste el feedback del usuario.
    - Desplegaste tu aplicación y has etiquetado tu versión (git tag).

2. Mesero/a debe poder tomar pedido de cliente/a. Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.
    #### Criterios de aceptación
    - Anotar nombre de clientx.
    - Agregar productos al pedido.
    - Eliminar productos.
    - Ver resumen y el total de la compra.
    - Enviar pedido a cocina (guardar en alguna base de datos).
    - Se ve y funciona bien en una tablet
    #### Definición de terminado
    - Debes haber recibido code review de al menos una compañera.
    - Haces test unitarios y, además, has testeado tu producto manualmente.
    - Hiciste tests de usabilidad e incorporaste el feedback del usuario.
    - Desplegaste tu aplicación y has etiquetado tu versión (git tag).

3. Jefe de cocina debe ver los pedidos. Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un clientx.
    #### Criterios de aceptación
    - Ver los pedidos ordenados según se van haciendo.
    - Marcar los pedidos que se han preparado y están listos para servirse.
    - Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.

    #### Definición de terminado
    - Debes haber recibido code review de al menos una compañera.
    - Haces test unitarios y, además, has testeado tu producto manualmente.
    - Hiciste tests de usabilidad e incorporaste el feedback del usuario.
    - Desplegaste tu aplicación y has etiquetado tu versión (git tag).

4. Meserx debe ver pedidos listos para servir. Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a lxs clientxs que las hicieron.
    #### Criterios de aceptación
    - Ver listado de pedido listos para servir.
    - Marcar pedidos que han sido entregados.

    #### Definición de terminado
    - Debes haber recibido code review de al menos una compañera.
    - Haces test unitarios y, además, has testeado tu producto manualmente.
    - Hiciste tests de usabilidad e incorporaste el feedback del usuario.
    - Desplegaste tu aplicación y has etiquetado tu versión (git tag).
    - Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.   
