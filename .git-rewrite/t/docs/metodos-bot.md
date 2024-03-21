# Metodos @Bot

- **Métodos Privados** 🚩 Estos métodos implementan pines específicos para la Shield L298P, que puedes adquirir en nuestra tienda [Comprar Aqui](https://www.bigtronica.com/motores/drivers/622-shield-driver-motores-l298p-5053212006228.html) Es importante tener en cuenta que estos métodos no son compatibles con otros drivers para motores.

- **Métodos Públicos** ⚡ Estos métodos son universales y pueden ser utilizados tanto con la Shield L298P como con otros drivers de motores.

## Adelante 🚩

```c
/* Adelante: necesita el parametro de la velocidad*/
bot.adelante(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Atras 🚩

```c
/* Atras: necesita el parametro de la velocidad*/
bot.atras(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Derecha 🚩

```c
/* girar_derecha: necesita el parametro de la velocidad*/
bot.girar_derecha(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Izquierda 🚩

```c
/* girar_izquierda: necesita el parametro de la velocidad*/
bot.girar_izquierda(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Parar 🚩

```c
/* parar: no necesita el parametro de la velocidad*/
bot.parar()
```

## Evasor de Obstaculos 🚩

Este método incorpora una rutina para el evasor de obstáculos y requiere dos parámetros: MaximaDistancia y velocidad.

- **MaximaDistancia:** Este parámetro debe ser un número entero y representa la distancia máxima que deseamos que el sensor ultrasónico HC-SR04 detecte. Cuando detecta esta distancia, el robot se prepara para retroceder cuando la distancia detectada sea la mitad de **MaximaDistancia** y luego, de manera aleatoria, decide girar a la derecha o a la izquierda.

- **Velocidad:** Este parámetro debe ser un número entero en el rango de 0 a 255.

Aqui esta el codigo del metodo:

```c
void Bot::obstaculos(int MaximaDistancia, int velocidad){
  long randomNumber;
  int distance = detectar_obstaculo();
  if (distance > 0){
    if(distance < MaximaDistancia){
      if(distance > (MaximaDistancia/2)){
        atras(velocidad);
        delay(200);
        parar();
        delay(500);
      }else{
        // Generar un número aleatorio para decidir la dirección de giro
        randomNumber = random(1,3);
        if (randomNumber == 1){
          girar_izquierda(velocidad);
          delay(400);
          parar();
          delay(500);
        }else{
          girar_derecha(velocidad);
          delay(400);
          parar();
          delay(500);
        }

      }
    }else{
      adelante(velocidad);
    }
   }
 else{
  adelante(velocidad);
  }
}
```

En el codigo del arduino, debe instanciarse el bot y luego en el setup llamar a obstaculos

```c
bot.obstaculos(int MaximaDistancia, int velocidad);
```


# Detectar Obstaculos ⚡ 
Este metodo es publico puede usar este metodo, este metodo solo retorna el valor de distancia del sensor.  

```c
/* este metodo retorna la distancia del sensor */
bot.detectar_obstaculo();
```

# Seguidor de linea