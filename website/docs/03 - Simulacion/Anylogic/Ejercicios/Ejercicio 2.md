# Anylogic - Ejercicio 2

## Modelos de Simulación

---

### Problema de Simulación de Eventos Discretos

**Escenario: Simulación de un Centro de Llamadas**

Imagina que estás administrando un centro de llamadas con dos tipos de operadores: generales y especializados. Las llamadas llegan al centro a intervalos aleatorios. Cada llamada puede ser de tipo general o especializada.

Las llamadas generales pueden ser atendidas por cualquier operador, pero las llamadas especializadas sólo pueden ser atendidas por un operador especializado. Si un operador especializado no está disponible, la llamada especializada se pone en espera hasta que uno esté disponible.

Tu objetivo es simular el funcionamiento del centro de llamadas durante un día típico para entender mejor cómo se utilizan los recursos y cómo se puede mejorar la eficiencia.

**Parámetros:**

- Tiempo de llegada de las llamadas: Distribución exponencial con una media de 5 minutos.
- Tiempo de servicio para llamadas generales: Distribución normal con una media de 10 minutos y una desviación estándar de 2 minutos.
- Tiempo de servicio para llamadas especializadas: Distribución normal con una media de 20 minutos y una desviación estándar de 5 minutos.
- Proporción de llamadas generales a especializadas: 70% de las llamadas son generales, 30% son especializadas.
- Número de operadores generales: 5
- Número de operadores especializados: 3

### Pasos para implementarlo en AnyLogic

1. **Crear un nuevo modelo de Simulación de Eventos Discretos (DES):** Inicia AnyLogic y crea un nuevo modelo DES.

2. **Definir los parámetros:** En la vista "Main", define los parámetros para el tiempo de llegada de las llamadas, el tiempo de servicio para las llamadas generales y especializadas, la proporción de llamadas generales a especializadas, y el número de operadores generales y especializados.

3. **Crear el proceso:** En la vista "Process Modeling Library", crea un nuevo proceso para representar el funcionamiento del centro de llamadas. Este proceso debería incluir un bloque "Source" para representar la llegada de las llamadas, dos bloques "Queue" para representar las colas de llamadas generales y especializadas, dos bloques "Delay" para representar el tiempo de servicio para las llamadas generales y especializadas, y un bloque "Sink" para representar las llamadas que se han atendido.

4. **Configurar los bloques:** Configura el bloque "Source" para generar entidades (llamadas) según el tiempo de llegada definido. Configura los bloques "Queue" y "Delay" para manejar las llamadas generales y especializadas de acuerdo a los parámetros definidos. Configura el bloque "Sink" para recoger las llamadas que se han atendido.

5. **Ejecutar la simulación:** Ejecuta la simulación y observa cómo las llamadas fluyen a través del centro de llamadas. Puedes utilizar las estadísticas proporcionadas por AnyLogic para analizar el rendimiento del centro de llamadas.
