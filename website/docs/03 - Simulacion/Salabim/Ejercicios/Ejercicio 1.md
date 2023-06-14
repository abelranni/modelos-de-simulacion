
# Simpy - Ejercicio 1

## Modelos de Simulación

---

```python
import simpy
import random

# Configuración
TASA_LLEGADA = 10
TASA_SERVICIO = 12
TIEMPO_SIMULACION = 8 * 60  # en minutos

def cliente(env, nombre, caja):
    print(f'{nombre} llega a la tienda en el minuto {env.now}')
    with caja.request() as req:
        yield req  # Espera hasta que la caja esté disponible
        print(f'{nombre} empieza a ser atendido en el minuto {env.now}')
        tiempo_servicio = random.expovariate(TASA_SERVICIO)
        yield env.timeout(tiempo_servicio)  # Tiempo que tarda en ser atendido
        print(f'{nombre} sale de la tienda en el minuto {env.now}')

def generador_clientes(env, tasa_llegada, caja):
    i = 0
    while True:
        yield env.timeout(random.expovariate(tasa_llegada))  # Tiempo hasta el próximo cliente
        i += 1
        env.process(cliente(env, f'Cliente {i}', caja))

# Crea el entorno de simulación
env = simpy.Environment()

# Crea la caja registradora
caja = simpy.Resource(env, capacity=1)

# Comienza el proceso de generación de clientes
env.process(generador_clientes(env, TASA_LLEGADA, caja))

# Ejecuta la simulación
env.run(until=TIEMPO_SIMULACION)
```

Este script simula un día de trabajo de 8 horas en una tienda con una sola caja registradora. Los clientes llegan de acuerdo con un proceso de Poisson y el tiempo que tarda en atender a un cliente es una variable aleatoria exponencial.

En el script, primero se definen dos funciones: `cliente` y `generador_clientes`. La función `cliente` representa el comportamiento de un cliente individual en la tienda, mientras que `generador_clientes` genera nuevos clientes con un tiempo entre llegadas que sigue una distribución exponencial.

Se crea un entorno de simulación y una caja registradora. Luego, se inicia el proceso de generación de clientes y se ejecuta la simulación durante un tiempo especificado (en este caso, 8 horas).
