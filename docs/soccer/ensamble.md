
¡Bienvenido a la guía de ensamble del Bigbot **Magic SOCCER**! En esta sección, encontrarás los pasos mecánicos para armar tu Bigbot. Si ya has armado tu Bigbot, puedes pasar directamente a la guía de [**Cómo Programar**](/soccer/bot.md). Esta versión básica viene equipada con el **control PS2**

## Chasis

Comenzamos ensamblando nuestro Bigbot SOCCER siguiendo la imagen de referencia. Este robot está diseñado para un montaje sencillo, con un chasis metálico y dos motores azules que se sujetan mediante tornillos y tuercas.

![Vista superior inferior motores soccer](/magic_soccer_0.webp)
 
A continuación, asignaremos nombres a los motores:

- **Lateral A** Conformado por el motor con terminales enumeradas `1 y 2`
- **Lateral B** Conformado por el motor con terminales enumeradas `3 y 4 `

![Laterales Bigbot Magic SOCCER](/magic_soccer_1.webp)

En la imagen siguiente, podrás observar que hay **cuatro soportes metálicos** colocados estratégicamente en el chasis para sostener la lámina de acrílico superior.

![Soportes metalicos en el chasis para la lamina superior](/magic_soccer_3.webp)

## Lamina Superior
En este punto, los motores ya están instalados en el chasis junto con sus respectivas ruedas de goma. Ahora, vamos por la lámina superior, donde estará ubicada toda la electrónica. En la siguiente imagen, encontrarás la disposición del Arduino y el portapilas.

![Vista Armado Superior Magic soccer](/magic_soccer_2.webp)

¡Perfecto! Simplemente une la lámina superior con el chasis. ¡Aquí concluimos el ensamblaje mecánico!  Ahora, estamos listos para pasar a la siguiente fase de nuestro proyecto.

![Vista de Armado Completo Magic soccer](/magic_soccer_4.webp)


## Shield L298P

En la siguiente imagen, descubre cómo realizar la conexión de los motores con sus terminales asignados a la shield L298P. Esta configuración es exclusiva para el Bigbot **SOCCER**. 🔍🔧✨

Simplemente coloca la shield sobre el Arduino, asegurándote de que **las borneras azules de la shield estén alineadas con el conector de alimentación del Arduino.**

![conexion Motores a la shield](/magic_soccer_5.webp)

En la siguiente imagen detalla los laterales del **BigBot Soccer**.

![conexion Motores a la shield](/magic_soccer_6.webp)


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