# Anylogic - Ejercicio 3

## Modelos de Simulación

---

### Problema de Simulación de Eventos Discretos

**Escenario: Simulación de un Call Center**

Diseñar un modelo de centro de llamadas con dos tipos de agentes con habilidades diferentes y dos tipos de llamadas entrantes.

- El modelo se centra en el enrutamiento de las llamadas.
- Las llamadas llegan a un ritmo determinado y se colocan en colas (una cola para cada tipo de llamada).
- Algunas llamadas abandonan la cola después de un cierto tiempo de espera.
- Hay dos grupos de agentes, cada uno formado para atender un tipo de llamada concreto. Sin embargo, los agentes también reciben formación cruzada para poder atender llamadas de distinto tipo, aunque con menos eficacia.
- La lógica de encaminamiento de llamadas es la siguiente: una llamada se encamina al agente "nativo", si hay uno disponible; de lo contrario, la llamada se encamina al agente "extranjero", de nuevo si este último está inactivo.
- Las métricas de salida en este modelo son las longitudes de las colas y los "niveles de servicio" para ambos tipos de llamada. Todos los parámetros pueden modificarse sobre la marcha, incluidas las opciones de encaminamiento.


