---
marp: false
theme: default
size: 16:9
paginate: true
---

# Salabim Banco Fase I

## Modelos de Simulación

---
## Un modelo simple[](https://www.salabim.org/manual/Modelling.html#a-simple-model "Permalink to this heading")

Comencemos con un modelo muy simple, para demostrar la estructura básica, Interacción de procesos, definición de componentes y salida.

```python
# Car.py
import salabim as sim


class Car(sim.Component):
    def process(self):
        while True:
            yield self.hold(1)


env = sim.Environment(trace=True)
Car()
env.run(till=5)

```

En pasos básicos:

Siempre empezamos importando salabim

```python
import salabim as sim
```

Ahora podemos referirnos a todas las clases de salabim y funcionar con `sim.`

El cuerpo principal de cada modelo de salabim generalmente comienza con

```python
env = sim.Environment()
```

o, para estar más en línea con las prácticas comunes

```python
app = sim.App()
```

Para cada componente definimos una clase:

```python
class Car(sim.Component):

```

La clase hereda de `sim.Component`.

Aunque es posible definir otros procesos dentro de una clase, la forma estándar es definir una función generadora llamada `process` en la clase. Un generador es una función con al menos una declaración de rendimiento `yield`. Estos se utilizan en el contexto de salabim como Una señal para dar control al mecanismo de secuencia.

En este ejemplo,

```python
yield self.hold(1)

```

se da control al mecanismo de secuencia y _regresa_ después de 1 unidad de tiempo. El componente se coloca en un estado pasivo y se reactiva después de 1 unidad de tiempo. El componente se reactiva en el mismo estado en el que se pasivó.

---

En el cuerpo principal, Car() crea una instancia de un coche. Obtiene automáticamente el nombre car.0. Como hay una función generadora llamada `process` en Car, esta función se activará (por defecto en el momento actual, que es 0 aquí).

Con

```python
env.run(till=5)
```

Comenzamos la simulación y recuperamos el control después de 5 unidades de tiempo.

Cuando ejecutamos este programa, obtenemos el siguiente resultado

```bash
line#         time current component    action                               information
-----   ---------- -------------------- -----------------------------------  ------------------------------------------------
                                        line numbers refers to               Example - basic.py
   11                                   default environment initialize
   11                                   main create
   11        0.000 main                 current
   12                                   car.0 create
   12                                   car.0 activate                       scheduled for      0.000 @    6  process=process
   13                                   main run                             scheduled for      5.000 @   13+
    6        0.000 car.0                current
    8                                   car.0 hold                           scheduled for      1.000 @    8+
    8+       1.000 car.0                current
    8                                   car.0 hold                           scheduled for      2.000 @    8+
    8+       2.000 car.0                current
    8                                   car.0 hold                           scheduled for      3.000 @    8+
    8+       3.000 car.0                current
    8                                   car.0 hold                           scheduled for      4.000 @    8+
    8+       4.000 car.0                current
    8                                   car.0 hold                           scheduled for      5.000 @    8+
   13+       5.000 main                 current

```

## Un ejemplo de banco[](https://www.salabim.org/manual/Modelling.html#a-bank-example "Permalink to this heading")

Ahora pasemos a un modelo más realista. Aquí están llegando los clientes un banco, donde hay un empleado. Este empleado maneja el clientes en orden primero en entrar, primero en salir (FIFO). Vemos los siguientes componentes, cada uno con su proceso:

- El generador, que crea los clientes con un tiempo de llegada entre uniforme(5,15)

- Los clientes

- El empleado, que atiende a los clientes en un tiempo constante de 30 (sistema sobrecargado y no estacionario)

Y necesitamos una cola para que los clientes esperen el servicio.

El código del modelo es

```python
# Bank, 1 clerk.py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        self.enter(waitingline)
        if clerk.ispassive():
            clerk.activate()
        yield self.passivate()


class Clerk(sim.Component):
    def process(self):
        while True:
            while len(waitingline) == 0:
                yield self.passivate()
            self.customer = waitingline.pop()
            yield self.hold(30)
            self.customer.activate()


env = sim.Environment(trace=True)

CustomerGenerator()
clerk = Clerk()
waitingline = sim.Queue("waitingline")

env.run(till=50)
print()
waitingline.print_statistics()

```

Veamos algunos detalles

```python
yield self.hold(sim.Uniform(5, 15).sample())

```

hará el muestreo estadístico y esperará ese tiempo hasta que se cree el siguiente cliente.

Con:

```python
self.enter(waitingline)
```

El cliente se coloca a la cola de la fila de espera.

Luego, el cliente verifica si el empleado está inactivo y, de ser así, lo activa de inmediato.

```python
if clerk.ispassive():
    clerk.activate()
```

Una vez que el empleado está activo (nuevamente), saca al primer cliente de la línea de espera con

```python
self.customer = waitingline.pop()
```

y se mantiene en ese estado durante 30 unidades de tiempo con

```python
yield self.hold(30)
```

Después de esa retención, el cliente se activa y terminará

```python
self.customer.activate()
```

En la sección principal del programa, creamos CustomerGenerator, Clerk y una cola llamada waitingline. Una vez finalizada la simulación, las estadísticas de la cola se presentan con

```python
waitingline.print_statistics()
```

El resultado se ve como

```bash
line#        time current component    action                               information
------ ---------- -------------------- -----------------------------------  ------------------------------------------------
                                       line numbers refers to               Bank, 1 clerk.py
   30                                  default environment initialize
   30                                  main create
   30       0.000 main                 current
   32                                  customergenerator.0 create
   32                                  customergenerator.0 activate         scheduled for 0.000 @    6+ process=process
   33                                  clerk.0 create
   33                                  clerk.0 activate                     scheduled for 0.000 @   21+ process=process
   34                                  waitingline create
   36                                  main run +50.000                     scheduled for 50.000 @   36+
   6+      0.000 customergenerator.0  current
   8                                  customer.0 create
   8                                  customer.0 activate                  scheduled for 0.000 @   13+ process=process
   9                                  customergenerator.0 hold +14.631     scheduled for 14.631 @    9+
   21+      0.000 clerk.0              current
   24                                  clerk.0 passivate                    @   24+
   13+      0.000 customer.0           current
   14                                  customer.0                           enter waitingline
   16                                  clerk.0 activate                     scheduled for 0.000 @   24+
   17                                  customer.0 passivate                 @   17+
   24+      0.000 clerk.0              current
   25                                  customer.0                           leave waitingline
   26                                  clerk.0 hold +30.000                 scheduled for 30.000 @   26+
   9+     14.631 customergenerator.0  current
   8                                  customer.1 create
   8                                  customer.1 activate                  scheduled for 14.631 @   13+ process=process
   9                                  customergenerator.0 hold +7.357      scheduled for 21.989 @    9+
   13+     14.631 customer.1           current
   14                                  customer.1                           enter waitingline
   17                                  customer.1 passivate                 @   17+
   9+     21.989 customergenerator.0  current
   8                                  customer.2 create
   8                                  customer.2 activate                  scheduled for 21.989 @   13+ process=process
   9                                  customergenerator.0 hold +10.815     scheduled for 32.804 @    9+
   13+     21.989 customer.2           current
   14                                  customer.2                           enter waitingline
   17                                  customer.2 passivate                 @   17+
   26+     30.000 clerk.0              current
   27                                  customer.0 activate                  scheduled for 30.000 @   17+
   25                                  customer.1                           leave waitingline
   26                                  clerk.0 hold +30.000                 scheduled for 60.000 @   26+
   17+     30.000 customer.0           current
   17+                                 customer.0 ended
   9+     32.804 customergenerator.0  current
   8                                  customer.3 create
   8                                  customer.3 activate                  scheduled for 32.804 @   13+ process=process
   9                                  customergenerator.0 hold +7.267      scheduled for 40.071 @    9+
   13+     32.804 customer.3           current
   14                                  customer.3                           enter waitingline
   17                                  customer.3 passivate                 @   17+
   9+     40.071 customergenerator.0  current
   8                                  customer.4 create
   8                                  customer.4 activate                  scheduled for 40.071 @   13+ process=process
   9                                  customergenerator.0 hold +14.666     scheduled for 54.737 @    9+
   13+     40.071 customer.4           current
   14                                  customer.4                           enter waitingline
   17                                  customer.4 passivate                 @   17+
   36+     50.000 main                 current

Statistics of waitingline at        50
                                                                     all    excl.zero         zero
-------------------------------------------- -------------- ------------ ------------ ------------
Length of waitingline                        duration             50           35.369       14.631
                                             mean                  1.410        1.993
                                             std.deviation         1.107        0.754

                                             minimum               0            1
                                             median                2            2
                                             90% percentile        3            3
                                             95% percentile        3            3
                                             maximum               3            3

Length of stay in waitingline                entries               2            2            0
                                             mean                  7.684        7.684
                                             std.deviation         7.684        7.684

                                             minimum               0            0
                                             median                7.684        7.684
                                             90% percentile       13.832       13.832
                                             95% percentile       14.600       14.600
                                             maximum              15.369       15.369

```

### Agregando más empleados

Ahora, vamos a añadir más empleados. Aquí hemos optado por poner los tres empleados en una lista

```python
clerks = [Clerk() for _ in range(3)]

```

aunque en este caso también podríamos haberlos puesto en una cola salabim, como

```python
clerks = sim.Queue('clerks')
for _ in range(3):
    Clerk().enter(clerks)

```

o incluso

```python
clerks = sim.Queue('clerks', fill=[Clerk() for _ in range(3)])

```

Y, para reiniciar un empleado:

```python
for clerk in clerks:
    if clerk.ispassive():
       clerk.activate()
       break  # reactivate only one clerk

```

El código completo es quedaría así:

```python
# Bank, 3 clerks.py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        self.enter(waitingline)
        for clerk in clerks:
            if clerk.ispassive():
                clerk.activate()
                break  # activate at most one clerk
        yield self.passivate()


class Clerk(sim.Component):
    def process(self):
        while True:
            while len(waitingline) == 0:
                yield self.passivate()
            self.customer = waitingline.pop()
            yield self.hold(30)
            self.customer.activate()


env = sim.Environment(trace=False)
CustomerGenerator()
clerks = [Clerk() for _ in range(3)]

waitingline = sim.Queue("waitingline")

env.run(till=50000)
waitingline.print_histograms()

waitingline.print_info()

```

## El ejemplo de la oficina bancaria con tiendas[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-stores "Permalink to this heading")

El paquete salabim contiene un concepto muy útil para el modelado: los `stores`.

Un `store` es esencialmente una cola (opcionalmente con capacidad limitada) que puede retener componentes.

Y podemos solicitar componentes del store. Si hay un componente en el store, se devuelve. ero si no lo hay el componente solicitante pasa al estado de solicitud, hasta que haya lugar disponible en el store.

Lo mismo ocurre con los procesos que colocan componentes en el store: si está lleno, el componente que desea agregar algo al store entra en el estado de solicitud. Sin embargo, aquí tenemos una sala de espera ilimitada.

El código es:

```python
# Bank, 3 clerks (store).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer().enter(waiting_room)
            yield self.hold(sim.Uniform(5, 15))


class Clerk(sim.Component):
    def process(self):
        while True:
            customer = yield self.from_store(waiting_room)
            yield self.hold(30)


class Customer(sim.Component):
    ...


env = sim.Environment(trace=False)
CustomerGenerator()
for _ in range(3):
    Clerk()
waiting_room = sim.Store("waiting_room")


env.run(till=50000)

waiting_room.print_statistics()
waiting_room.print_info()

```

## El ejemplo de la oficina bancaria con recursos[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-resources "Permalink to this heading")

El paquete salabim contiene otro concepto útil para el modelado: recursos. Los recursos tienen una capacidad limitada y pueden ser reclamados por los componentes y liberados más tarde.

En el modelo del banco con la misma funcionalidad que el ejemplo anterior, los empleados se definen como un recurso con capacidad 3.

El código del modelo es:

```python
# Bank, 3 clerks (resources).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        yield self.request(clerks)
        yield self.hold(30)
        self.release()  # not really required


env = sim.Environment(trace=False)
CustomerGenerator()
clerks = sim.Resource("clerks", capacity=3)

env.run(till=50000)

clerks.print_statistics()
clerks.print_info()

```

Veamos algunos detalles.

```python
clerks = sim.Resource('clerks', capacity=3)

```

Esto define un recurso con una capacidad de 3.

Y luego, un cliente, solo intenta reclamar una unidad (= empleado) del recurso con

```python
yield self.request(clerks)

```

Aquí, usamos el valor predeterminado de 1 unidad. Si el recurso no está disponible, el cliente simplemente espera a que esté disponible (por orden de llegada).

En contraste con el ejemplo anterior, el cliente ahora se mantiene a sí mismo durante 30 unidades de tiempo.

Y después de estas 30 unidades de tiempo, el cliente libera el recurso con

```python
self.release()

```

El efecto es que el salabim luego trata de honrar la siguiente solicitud pendiente, si la hay.

(en realidad, en este caso no es necesaria esta declaración de liberación, ya que los recursos que fueron reclamados se liberan automáticamente cuando un proceso termina).

Las estadísticas se mantienen en dos colas del sistema, denominadas clerk.requesters() y clerk.claimers().

El resultado es muy similar al ejemplo anterior. Las estadísticas son exactamente las mismas.
