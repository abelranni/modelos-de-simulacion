---
marp: false
theme: default
size: 16:9
paginate: true
---

# Salabim Banco Fase II

## Modelos de Simulación

---

## El ejemplo de la oficina bancaria con clientes dudosos y arrepentidos [](https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging "Permalink to this heading")

Ahora, suponemos que los clientes no van a la cola cuando hay más de 5 clientes esperando (dudosos). Además, si un cliente espera más de 50, también se marchará (arrepentidos).

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

```python
yield self.cancel()
```

Esto hace que el componente actual (un cliente) sea un componente de datos (y esté sujeto a recolección de elementos no utilizados), si la longitud de la cola es 5 o más.

El arrepentimiento se implementa mediante una espera de 50. Si un empleado puede atender a un cliente, lo sacará de la línea de espera y lo activará en ese momento. El cliente sólo tiene que comprobar si sigue en la línea de espera. Si es así, no ha sido atendido a tiempo y se arrepentirá.

```python
yield self.hold(50)
if self in waitingline:
    self.leave(waitingline)
    env.number_reneged += 1
else:
     self.passivate()

```

Lo único que tiene que hacer el empleado al empezar a atender a un cliente es sacar de la cola al siguiente cliente (como antes) y activar a este cliente (en el momento actual). El efecto es que la espera del cliente terminará.

```python
self.customer = waitingline.pop()
self.customer.activate()

```
