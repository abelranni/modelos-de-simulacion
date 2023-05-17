# Anylogic - Ejercicio 1

## Modelos de Simulación

---

### Problema de Simulación de Eventos Discretos

**Escenario: Simulación de una Cafetería**

Imagina que estás administrando una cafetería. La cafetería abre a las 8:00 a.m. y cierra a las 8:00 p.m. Los clientes llegan a la cafetería a intervalos aleatorios, y cada cliente pasa una cantidad de tiempo variable en la cafetería antes de irse.

Tu objetivo es simular el funcionamiento de la cafetería durante un día típico para entender mejor cómo se utilizan los recursos y cómo se puede mejorar la eficiencia.

**Parámetros:**

- Tiempo de llegada de los clientes: Distribución exponencial con una media de 10 minutos.
- Tiempo de servicio (cuánto tiempo pasa un cliente en la cafetería): Distribución normal con una media de 20 minutos y una desviación estándar de 5 minutos.

### Pasos para implementarlo en AnyLogic

1. **Crear un nuevo modelo de Simulación de Eventos Discretos (DES):** Inicia AnyLogic y crea un nuevo modelo DES.

2. **Definir los parámetros:** En la vista "Main", define los parámetros para el tiempo de llegada de los clientes y el tiempo de servicio.

3. **Crear el proceso:** En la vista "Process Modeling Library", crea un nuevo proceso para representar el funcionamiento de la cafetería. Este proceso debería incluir un bloque "Source" para representar la llegada de los clientes, un bloque "Delay" para representar el tiempo que los clientes pasan en la cafetería, y un bloque "Sink" para representar a los clientes que se van.

4. **Configurar los bloques:** Configura el bloque "Source" para generar entidades (clientes) según el tiempo de llegada definido. Configura el bloque "Delay" para retener a las entidades durante el tiempo de servicio definido.

5. **Ejecutar la simulación:** Ejecuta la simulación y observa cómo los clientes fluyen a través de la cafetería. Puedes utilizar las estadísticas proporcionadas por AnyLogic para analizar el rendimiento de la cafetería.
