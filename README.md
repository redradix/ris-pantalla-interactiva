# ferm|n

ferm|n (pronunciado /fermín/) es un entorno de aplicaciones interactivas personalizables, diseñadas para ser mostradas en una pantalla remota. Podemos diferenciar tres partes básicas:

* *Dashboard de administrador*: Es la interfaz web desde la que se selecciona la aplicación a mostrar en la pantalla remota y se controla su configuración. Dependiendo de la aplicación, también se puede interactuar con ella.

* *Visor* o *cliente*: Es la interfaz web que se muestra en la pantalla remota. Cuando hay una aplicación seleccionada desde el _dashboard_, la mostrará y permitirá interactuar con ella.

* *Servidor web*: Sirve tanto la parte de administración como el visor y las aplicaciones en cada momento. También se encarga de la comunicación entre ellas para que desde el _dashboard_ pueda cambiarse la aplicación a mostrar en la pantalla remota e interactuar con ella. En función de tu preferencia, el servidor puede embeberse en la pantalla remota o arrancarse en tu equipo.

Cualquier usuario puede crear sus propias aplicaciones.

## Preparación

Primero tienes que elegir soporte donde mostrar las aplicaciones cliente.

Si quieres ayudarnos a reducir la basura electrónica, busca si tienes un dispositivo compatible con [postmarketOS](https://wiki.postmarketos.org/wiki/Devices). En este momento, postmarketOS es para entusiastas de Linux, así que será un poco más difícil y necesitarás un ordenador Linux para instalarlo. El dispositivo tiene que tener soporte, como mínimo, de `USB Networking`, `Flashing`, `Touchscreen`, `Display` y `WiFi`. Idealmente tendría `3D Acceleration` para mejorar el rendimiento gráfico y evitar artefactos visuales. En la fase de prototipado hemos utilizado una [Nexus 7 (2012)](https://wiki.postmarketos.org/wiki/Google_Nexus_7_2012_(asus-grouper)).
[Guía de instalación en desarrollo].

La otra opción es utilizar un _single-board computer_ (SBC) con antena wifi y pantalla táctil. En la fase de prototipado hemos utilizado una Raspberry Pi 3 B+ con la pantalla Raspberry Pi Touch Display.
[Sigue la guía para instalar ferm|n en una raspi](RPiOS.README.md).

## Licencia

Todas las partes de ferm|n son software libre, en su mayor parte mediante la licencia LGPL v3.

Este repositorio sigue la [especificación REUSE](https://reuse.software/), por lo que cada fichero tiene una cabecera de _copyright_ o se lista [en el fichero DEP-5](.reuse/dep5). El texto completo de cada licencia está disponible en [la carpeta `LICENSES`](LICENSES/).
