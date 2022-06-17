# ferm|n

ferm|in (pronunciado /fermín/) es un entorno de aplicaciones interactivas personalizables, diseñadas para ser mostradas en una pantalla remota. Podemos diferenciar tres partes básicas:

* *Dashboard de administrador*: Se despliega en el equipo desde el que se controlará la aplicación a mostrar en la pantalla remota y su configuración.

* *Aplicaciones cliente*: Es el conjunto de aplicaciones que se mostrarán en la pantalla remota. Cualquier usuario puede crear sus propias aplicaciones.

* *Servidor web*: Sirve tanto la parte de administración como las aplicaciones cliente. También se encarga de la comunicación entre ellas para desde el dashboard pueda cambiarse la aplicación a mostrar en la pantalla remota e interactuar con ella.

## Preparación

Primero tienes que elegir soporte donde mostrar las aplicaciones cliente.

Si quieres ayudarnos a reducir la basura electrónica, busca si tienes un dispositivo compatible con [postmarketOS](https://wiki.postmarketos.org/wiki/Devices). En este momento, postmarketOS es para entusiastas de Linux, así que será un poco más difícil y necesitarás un ordenador Linux para instalarlo. El dispositivo tiene que tener soporte, como mínimo, de `USB Networking`, `Flashing`, `Touchscreen`, `Display` y `WiFi`. Idealmente tendría `3D Acceleration` para mejorar el rendimiento gráfico y evitar artefactos visuales. En la fase de prototipado hemos utilizado una [Nexus 7 (2012)](https://wiki.postmarketos.org/wiki/Google_Nexus_7_2012_(asus-grouper)).

La otra opción es utilizar un _single-board computer_ (SBC) con antena wifi y pantalla táctil. En la fase de prototipado hemos utilizado una Raspberry Pi 1 B+ con la Raspberry Pi Touch Display y un adaptador WiFi por USB.

[Continuará]
