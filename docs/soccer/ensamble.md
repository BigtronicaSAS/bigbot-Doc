
¡Bienvenido a la guía de ensamble del Bigbot Magic 4WD! En esta sección, encontrarás los pasos mecánicos para armar tu Bigbot. Si ya has armado tu Bigbot, puedes pasar directamente a la guía de [**Cómo Programar**](/magic-4WD/bot.md).

Esta versión básica viene equipada con **un sensor ultrasónico** y **tres sensores de línea**. El **control PS2 no está incluido**, pero puedes comprarlo en nuestra tienda virtual:
<div class="download-layout">
  <a class="btn" target="_blank" href="https://www.bigtronica.com/aeromodelismo-hobbies/radios/2101-control-play2-inalambrico-5053212021016.html">
Comprar Control Play2
</a>
</div>

## Lamina Inferior

¡Para empezar el ensamblaje, necesitamos colocar dos parejas de motores en el acrílico inferior! Asegúrate de que la posición de los motores coincida con la imagen proporcionada. **Cada motor viene con dos tuercas, dos tornillos y dos soportes** que se usarán para fijarlo a la lámina de acrílico.

![lamina inferior](/magic_4wd_2.jpg)

La Shield L298P está diseñada para dos motores, por lo que debemos conectar las parejas de motores en **paralelo**. 

A continuación, asignaremos nombres a las dos parejas de motores:

- **Lateral A** Conformado por la pareja de motores `1 y 2`
- **Lateral B** Conformado por la pareja de motores `3 y 4 `

![Motores en lamina inferior acrilico](/magic_4wd_3.jpg)


¡Observa que la conexión de cada motor está en paralelo! Afortunadamente, debido a la soldadura de las terminales de los motores, los cables rojos coinciden y los cables negros también; asegúrate de que los cables, independientemente de su color, estén en paralelo. Tomaremos los **motores 1 y 3** como el **frente de nuestro Bigbot** como lo indica la siguiente imagen. 


![Vista Armado Superior Magic 4WD](/magic_4wd_4.webp)

## Lamina Superior
En este punto, los motores ya están instalados en la lámina inferior junto con sus respectivas ruedas de goma. Ahora, vamos a por la lámina superior, donde estará ubicada toda la electrónica. En la siguiente imagen, encontrarás la disposición del Arduino, el sensor ultrasónico y el portapilas.

![Vista Armado Superior Magic 4WD](/magic_4wd_1.webp)

¡Perfecto! Simplemente toma los soportes de plástico y une la lámina superior con la lámina inferior. ¡Aquí concluimos el ensamblaje mecánico!  Ahora, estamos listos para pasar a la siguiente fase de nuestro proyecto.

![Vista de Armado Completo](/magic_4wd_0.webp)


## Shield L298P

La shield L298P permite controlar dos motores, un buzzer, un sensor ultrasónico, un servomotor e incluso la conexión Bluetooth. Es la opción más eficiente para agilizar la conexión.

Simplemente coloca la shield sobre el Arduino, asegurándote de que **las borneras azules de la shield estén alineadas con el conector de alimentación del Arduino.**

 ### Alimentación

 :::warning ¡Atención!
Asegúrate de contar con el voltaje adecuado y una corriente de trabajo óptima para un funcionamiento sin inconvenientes.
:::

Para un rendimiento óptimo del Bigbot, asegúrate de alimentarlo con más de 7V utilizando baterías de al menos 2Ah. Una alimentación adecuada es esencial para superar cualquier desafío. 

**Recomendaciones**

- Voltaje: 7-12V
- Corriente: 2200mAh

Conecta tu shield siguiendo la imagen: puentea con el jumper para alimentar también el Arduino; quítalo si solo quieres alimentar la shield.

![conexion Motores a la shield](/magic_4wd_5.webp)

### Jumper

El jumper controla el suministro de voltaje de las baterías a la shield y el Arduino. Recuerda quitar el jumper al cargar el **código en el Arduino con la shield L298P conectada**. Después de completar la carga y estar listo, vuelve a colocar el jumper. 
