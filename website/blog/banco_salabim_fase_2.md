
## El ejemplo de la oficina bancaria con resistir y renegar[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging "Permalink to this heading")

Ahora, asumimos que los clientes no van a la cola cuando hay más de 5 clientes esperando (balking). Además de eso, si un cliente está esperando más de 50, él / ella Irse también (renegar).

El código del modelo es:

```python
# Example - bank, 3 clerks, reneging.py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        if len(waitingline) >= 5:
            env.number_balked += 1
            env.print_trace("", "", "balked")
            print(env.now(), "balked",self.name())            
            yield self.cancel()
        self.enter(waitingline)
        for clerk in clerks:
            if clerk.ispassive():
                clerk.activate()
                break  # activate only one clerk
        yield self.hold(50)  # if not serviced within this time, renege
        if self in waitingline:
            self.leave(waitingline)
            env.number_reneged += 1
            env.print_trace("", "", "reneged")
        else:
            yield self.passivate()  # wait for service to be completed


class Clerk(sim.Component):
    def process(self):
        while True:
            while len(waitingline) == 0:
                yield self.passivate()
            self.customer = waitingline.pop()
            self.customer.activate()  # get the customer out of it's hold(50)
            yield self.hold(30)
            self.customer.activate()  # signal the customer that's all's done


env = sim.Environment()
CustomerGenerator()
env.number_balked = 0
env.number_reneged = 0
clerks = [Clerk() for _ in range(3)]

waitingline = sim.Queue("waitingline")
env.run(duration=300000)
waitingline.length.print_histogram(30, 0, 1)
waitingline.length_of_stay.print_histogram(30, 0, 10)
print("number reneged", env.number_reneged)
print("number balked", env.number_balked)

```

Veamos algunos detalles.

Esto hace que el componente actual (un cliente) sea un componente de datos (y esté sujeto a recolección de elementos no utilizados), si la longitud de la cola es 5 o más.

El renegamiento se implementa mediante una retención de 50. Si un empleado puede atender a un cliente, tomará El cliente sale de la línea de espera y la activará en ese momento. El cliente solo tiene que comprobar si él / ella todavía está en la fila de espera. Si es así, él / ella no ha sido atendido a tiempo y, por lo tanto, renegará.

```python
yield self.hold(50)
if self in waitingline:
    self.leave(waitingline)
    env.number_reneged += 1
else:
     self.passivate()

```

Todo lo que el empleado tiene que hacer al comenzar a atender a un cliente es hacer que el siguiente cliente se alinee. Salga de la cola (como antes) y active este cliente (a la hora ahora). El efecto es que la retención del cliente terminará.

```python
self.customer = waitingline.pop()
self.customer.activate()

```

## El ejemplo de la oficina bancaria con resistir y renegar (tienda)[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging-store "Permalink to this heading")

Ahora mostramos cómo se implementa el rechazo y el renego con una tienda.

El código del modelo es:

```python
# Bank, 3 clerks (store, reneging).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            customer = Customer()
            yield self.to_store(waiting_room, customer, fail_at=env.now())
            if self.failed():
                customer.cancel()
                env.number_balked += 1
                print(env.now(), "balked",customer.name())
                env.print_trace("", "", "balked",customer.name())
            yield self.hold(sim.Uniform(5, 15))


class Clerk(sim.Component):
    def process(self):
        while True:
            customer = yield self.from_store(waiting_room)
            yield self.hold(30)


class Customer(sim.Component):
    def process(self):
        yield self.hold(50)
        if self in waiting_room:
            self.leave(waiting_room)
            env.number_reneged += 1
            env.print_trace("", "", "reneged")

env = sim.Environment(trace=False)
env.number_balked = 0
env.number_reneged = 0
CustomerGenerator()
for _ in range(3):
    Clerk()
waiting_room = sim.Store("waiting_room", capacity=5)

env.run(till=30000)

waiting_room.length.print_histogram(30, 0, 1)
waiting_room.length_of_stay.print_histogram(30, 0, 10)
print("number reneged", env.number_reneged)
print("number balked", env.number_balked)

```

Como puede ver, la parte de resistencia se realiza estableciendo un valor de fail\_at de 0 en el to\_store, lo que significa que si la solicitud no se atiende inmediatamente, El cliente se resiste.

Para el renacimiento, hacemos lo mismo que con la solución ordinaria.

## El ejemplo de la oficina bancaria con resistir y renegar (recursos)[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging-resources "Permalink to this heading")

Ahora mostramos cómo el rechazo y la renegación se implementan con recursos.

El código del modelo es:

```python
# Example - bank, 3 clerks, reneging (resources).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        if len(clerks.requesters()) >= 5:
            env.number_balked += 1
            env.print_trace("", "", "balked")
            yield self.cancel()
        yield self.request(clerks, fail_delay=50)
        if self.failed():
            env.number_reneged += 1
            env.print_trace("", "", "reneged")
        else:
            yield self.hold(30)
            self.release()


env = sim.Environment()
CustomerGenerator()
env.number_balked = 0
env.number_reneged = 0
clerks = sim.Resource("clerks", 3)

env.run(till=50000)

clerks.requesters().length.print_histogram(30, 0, 1)
print()
clerks.requesters().length_of_stay.print_histogram(30, 0, 10)
print("number reneged", env.number_reneged)
print("number balked", env.number_balked)

```

Como puede ver, la parte de resistencia es exactamente la misma que en el ejemplo sin recursos.

Para el reenging, todo lo que tenemos que hacer es agregar un fail\_delay

```python
yield self.request(clerks, fail_delay=50)

```

Si la solicitud no se cumple dentro de las 50 unidades de tiempo, el proceso continúa después de esa declaración de solicitud. Y luego, simplemente verificamos si la solicitud ha fallado

```python
if self.failed():
    env.number_reneged += 1

```

Este ejemplo muestra claramente la ventaja de la solución de recursos sobre el método pasivar/activate, en este ejemplo.

## El ejemplo de la oficina bancaria con estados[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-states "Permalink to this heading")

El paquete salabim contiene otro concepto útil para el modelado: estados. En este caso, definimos un estado llamado worktodo.

El código del modelo es:

```python
# Example - bank, 3 clerks (state).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        self.enter(waitingline)
        worktodo.trigger(max=1)
        yield self.passivate()


class Clerk(sim.Component):
    def process(self):
        while True:
            if len(waitingline) == 0:
                yield self.wait((worktodo, True, 1))
            self.customer = waitingline.pop()
            yield self.hold(30)
            self.customer.activate()


env = sim.Environment()
CustomerGenerator()
for i in range(3):
    Clerk()
waitingline = sim.Queue("waitingline")
worktodo = sim.State("worktodo")

env.run(till=50000)
waitingline.print_histograms()
worktodo.print_histograms()

```

Veamos algunos detalles.

```python
worktodo = sim.State('worktodo')

```

Esto define un estado con un valor inicial False.

En el código del cliente, el cliente intenta activar un empleado con

El efecto es que si hay empleados esperando trabajo, la espera del primer empleado es honrada y Ese empleado continúa su proceso después de

```python
yield self.wait(worktodo)

```

Tenga en cuenta que el empleado solo va a esperar a trabajar después de completar un trabajo si hay no hay clientes esperando.

## El ejemplo de la oficina bancaria con standby[](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-standby "Permalink to this heading")

El paquete salabim contiene otro poderoso mecanismo de proceso, llamado standby. Cuando un componente está en modo de espera, se actualizará después de _cada_ evento. Normalmente, el modo de espera será Se utiliza en un bucle WHILE donde en cada evento se comprueban una o más condiciones.

El modelo con standby es

```python
# Example - bank, 3 clerks (standby).py
import salabim as sim


class CustomerGenerator(sim.Component):
    def process(self):
        while True:
            Customer()
            yield self.hold(sim.Uniform(5, 15).sample())


class Customer(sim.Component):
    def process(self):
        self.enter(waitingline)
        yield self.passivate()


class Clerk(sim.Component):
    def process(self):
        while True:
            while len(waitingline) == 0:
                yield self.standby()
            self.customer = waitingline.pop()
            yield self.hold(30)
            self.customer.activate()


env = sim.Environment(trace=True)
CustomerGenerator()
for _ in range(3):
    Clerk()
waitingline = sim.Queue("waitingline")

env.run(till=50000)
waitingline.length.print_histogram(30, 0, 1)
print()
waitingline.length_of_stay.print_histogram(30, 0, 10)

```

En este caso, la condición se verifica con frecuencia con

```python
while len(waitingline) == 0:
    yield self.standby()

```

El resto del código es muy similar a la versión con estados.

Advertencia

Es muy importante darse cuenta de que este mecanismo puede tener un impacto significativo en el rendimiento, como después de CADA evento, el componente se vuelve actual y debe verificarse. En general, se recomienda intentar usar estados o un pasivo / activar más directo. construcción.
