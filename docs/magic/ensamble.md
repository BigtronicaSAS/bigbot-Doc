
¡Bienvenido a la guía de ensamble del Bigbot **Magic 2WD**! En esta sección, encontrarás los pasos mecánicos para armar tu Bigbot. Si ya has armado tu Bigbot, puedes pasar directamente a la guía de [**Cómo Programar**](/magic/bot.md).

Esta versión básica viene equipada con **un sensor ultrasónico** y **tres sensores de línea**. El **control PS2 no está incluido**, pero puedes comprarlo en nuestra tienda virtual:
<div class="download-layout">
  <a class="btn" target="_blank" href="https://www.bigtronica.com/aeromodelismo-hobbies/radios/2101-control-play2-inalambrico-5053212021016.html">
Comprar Control Play2
</a>
</div>

## Lamina Inferior

¡Para empezar el ensamblaje, necesitamos colocar los motores en el acrílico inferior! Asegúrate de que la posición de los motores coincida con la imagen proporcionada. **Cada motor viene con dos tuercas, dos tornillos y dos soportes** que se usarán para fijarlo a la lámina de acrílico.

![lamina inferior Motores Magic](/magic_2wd_0.webp)
 
A continuación, asignaremos nombres a los motores:

- **Lateral A** Conformado por el motor con terminales enumeradas `1 y 2`
- **Lateral B** Conformado por el motor con terminales enumeradas `3 y 4 `

![Laterales Bigbot Magic](/magic_2wd_1.webp)

## Lamina Superior
En este punto, los motores ya están instalados en la lámina inferior junto con sus respectivas ruedas de goma. Ahora, vamos por la lámina superior, donde estará ubicada toda la electrónica. En la siguiente imagen, encontrarás la disposición del Arduino, el sensor ultrasónico y el portapilas.

![Vista Armado Superior Magic 4WD](/magic_2wd_2.webp)

¡Perfecto! Simplemente toma los soportes de plástico y une la lámina superior con la lámina inferior. ¡Aquí concluimos el ensamblaje mecánico!  Ahora, estamos listos para pasar a la siguiente fase de nuestro proyecto.

![Vista de Armado Completo Magic 2WD](/magic_2wd_3.webp)


## Shield L298P

En la siguiente imagen, descubre cómo realizar la conexión de los motores con sus terminales asignados a la shield L298P. Esta configuración es exclusiva para el Bigbot Magic. 🔍🔧✨

Simplemente coloca la shield sobre el Arduino, asegurándote de que **las borneras azules de la shield estén alineadas con el conector de alimentación del Arduino.**

![conexion Motores a la shield](/magic_2wd_4.webp)


## Alimentación Shield

:::warning ¡Atención!
Asegúrate de contar con el voltaje adecuado y una corriente de trabajo óptima para un funcionamiento sin inconvenientes.
:::

Para un rendimiento óptimo del Bigbot, asegúrate de alimentarlo con más de 7V utilizando baterías de al menos 2Ah. Una alimentación adecuada es esencial para superar cualquier desafío. 

**Recomendaciones**

- Voltaje: 7-12V
- Corriente: 2200mAh

Conecta tu shield siguiendo la imagen: puentea con el jumper para alimentar también el Arduino; quítalo si solo quieres alimentar la shield.

![conexion Motores a la shield](/magic_4wd_5.webp)

## Jumper

El jumper controla el suministro de voltaje de las baterías a la shield y el Arduino. Recuerda quitar el jumper al cargar el **código en el Arduino con la shield L298P conectada**. Después de completar la carga y estar listo, vuelve a colocar el jumper. 

![conexion Motores a la shield](/magic_2wd_5.webp)