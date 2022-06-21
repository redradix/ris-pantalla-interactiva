# Configuración de Raspberry Pi con servidor embebido

En esta guía se describe cómo instalar en una Raspberry Pi con wifi y pantalla el servidor de ferm|n y un navegador web en modo kiosko que servirá como cliente de ferm|n.

La idea general es la siguiente: según arranque la raspi, automáticamente lanzará el servidor de ferm|n (node) y abrirá el cliente en un navegador (Chromium) en modo kiosko. Con la red configurada (wifi o ethernet), se puede acceder al _dashboard_ de administrador desde un ordenador en la misma red cuyo sistema operativo soporte mDNS, como la mayoría de distribuciones de Linux y macOS, y por SSH para cualquier otra tarea, p. ej. de mantenimiento.

## Material necesario

- Una Raspberry Pi. El rendimiento es sustancialmente mejor en el modelo 3 o superior. Si se elige un modelo que no cuenta con wifi, será necesario o bien un adaptador wifi por USB o bien un cable ethernet.
- Una fuente de alimentación [de las características adecuadas](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#power-supply).
- Una tarjeta micro SD de mínimo 4 GB. Cuanta mejor sea la velocidad de lectura de la tarjeta, mejor funcionará. También se necesitará una manera de leer la tarjeta desde el ordenador.

## Instalación de Raspberry Pi OS Lite en la raspi

1. Instala el software [Raspberry Pi Imager](https://www.raspberrypi.com/software/) que nos permitirá personalizar e instalar el sistema operativo de Raspberry Pi OS Lite con mayor facilidad.
2. Conecta la tarjeta micro SD al ordenador y arranca Raspberry Pi Imager en tu ordenador.
3. Para seleccionar el sistema operativo, pulsa en la opción `Raspberry Pi OS (other)` y luego selecciona `Raspberry Pi OS Lite`. Si tu modelo de Raspberry Pi soporta el sistema de 64 bits, selecciona ese para un mejor rendimiento. En otro caso, selecciona 32 bits.
4. Selecciona como almacenamiento la tarjeta SD.
5. Personaliza la instalación pulsando en el icono del engranaje.
   1. Selecciona `for this session only`.
   2. Activa `Set hostname` e indica `fermin.local`. Esta será la dirección mDNS que utilizarás para comunicarte con la raspi inalámbricamente.
   3. Activa `SSH` con `Use password authentication`. Indica como usuario `fermin` y escribe la contra contraseña que prefieras.
   4. Si conectas la raspi a la red mediante ethernet, continúa al siguiente paso. En otro caso, activa `Configure wireless LAN` e introduce los datos de la red a la que quieres que se conecte la raspi y la `Wireless LAN country` del país donde se encuentra (para España, `ES`).
   5. Configura `Set locale settings` a `ES`.
   6. Opcionalmente, desactiva el envío de telemetría.
   7. Pulsa `Save` para guardar lo anterior.
6. Pulsa el botón de `Write` y espera a que el sistema operativo se escriba en la tarjeta.

Cuando haya terminado, conecta a la raspi la tarjeta, la pantalla y la fuente de alimentación. Se encenderá una vez y redimensionará el espacio en la tarjeta, tras lo cual se volverá a apagar. Se volverá a encender para configurar todos nuestras preferencias, y se reiniciará de nuevo. Y finalmente, se encenderá por última vez e iniciará sesión automáticamente como el usuario `fermin`.

## Instalación de ferm|n

1. En un ordenador conectado a la misma red que la raspi, abre una terminal y prueba la conexión SSH de la siguiente manera:
   ```sh
   ssh fermin@fermin.local whoami
   ```
2. Tras aceptar la advertencia de la huella digital, aparecerá el nombre de usuario, `fermin`.
3. Clona este repositorio y dirígete a la carpeta `RPiOS/`:
   ```sh
   git clone https://github.com/redradix/ris-pantalla-interactiva.git ./fermin
   cd fermin/RPiOS/
   ```
4. Transfiere mediante SSH todos los archivos a la raspi de la siguiente manera:
   ```sh
   scp ./* fermin@fermin.local:~
   ```
5. Conecta a un terminal en la raspi por SSH:
   ```sh
   ssh fermin@fermin.local
   ```
6. Allí, ejecuta el instalador de ferm|n, que instalará los paquetes necesarios y configurará el arranque (puede tardar varios minutos, en función de la red y la tarjeta):
   ```sh
   ./install-fermin-kiosk.sh
   ```
7. Una vez haya terminado, reinicia de la siguiente manera
   ```sh
   sudo reboot now
   ```

Cuando arranque de nuevo, tras la secuencia inicial, se mostrará el visor de ferm|n y verás la bienvenida en la pantalla de la raspi. En ese momento, ya puedes conectar al panel de control desde cualquier dispositivo en la misma red. Para ello, abre en tu navegador preferido la dirección web http://fermin.local:3003/dashboard (es posible que tengas que aceptar que la conexión no está cifrada).
