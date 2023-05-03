"use strict";(self.webpackChunkmodelos_de_simulacion=self.webpackChunkmodelos_de_simulacion||[]).push([[2774],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var l=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=l.createContext({}),m=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=m(e.components);return l.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=t,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?l.createElement(f,r(r({ref:n},c),{},{components:a})):l.createElement(f,r({ref:n},c))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:t,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9821:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var l=a(7462),t=(a(7294),a(3905));const i={},r=void 0,o={permalink:"/modelos-de-simulacion/blog/banco_salabim_fase_2",source:"@site/blog/banco_salabim_fase_2.md",title:"banco_salabim_fase_2",description:"El ejemplo de la oficina bancaria con resistir y renegar\uf0c1",date:"2023-05-03T17:28:36.000Z",formattedDate:"3 de mayo de 2023",tags:[],readingTime:5.78,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Bienvenida",permalink:"/modelos-de-simulacion/blog/welcome"}},s={authorsImageUrls:[]},m=[{value:"El ejemplo de la oficina bancaria con resistir y renegar\uf0c1",id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegarpermalink-to-this-heading",level:2},{value:"El ejemplo de la oficina bancaria con resistir y renegar (tienda)\uf0c1",id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegar-tiendapermalink-to-this-heading",level:2},{value:"El ejemplo de la oficina bancaria con resistir y renegar (recursos)\uf0c1",id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegar-recursospermalink-to-this-heading",level:2},{value:"El ejemplo de la oficina bancaria con estados\uf0c1",id:"el-ejemplo-de-la-oficina-bancaria-con-estadospermalink-to-this-heading",level:2},{value:"El ejemplo de la oficina bancaria con standby\uf0c1",id:"el-ejemplo-de-la-oficina-bancaria-con-standbypermalink-to-this-heading",level:2}],c={toc:m},d="wrapper";function p(e){let{components:n,...a}=e;return(0,t.kt)(d,(0,l.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegarpermalink-to-this-heading"},"El ejemplo de la oficina bancaria con resistir y renegar",(0,t.kt)("a",{parentName:"h2",href:"https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging",title:"Permalink to this heading"},"\uf0c1")),(0,t.kt)("p",null,"Ahora, asumimos que los clientes no van a la cola cuando hay m\xe1s de 5 clientes esperando (balking). Adem\xe1s de eso, si un cliente est\xe1 esperando m\xe1s de 50, \xe9l / ella Irse tambi\xe9n (renegar)."),(0,t.kt)("p",null,"El c\xf3digo del modelo es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# Example - bank, 3 clerks, reneging.py\nimport salabim as sim\n\n\nclass CustomerGenerator(sim.Component):\n    def process(self):\n        while True:\n            Customer()\n            yield self.hold(sim.Uniform(5, 15).sample())\n\n\nclass Customer(sim.Component):\n    def process(self):\n        if len(waitingline) >= 5:\n            env.number_balked += 1\n            env.print_trace("", "", "balked")\n            print(env.now(), "balked",self.name())            \n            yield self.cancel()\n        self.enter(waitingline)\n        for clerk in clerks:\n            if clerk.ispassive():\n                clerk.activate()\n                break  # activate only one clerk\n        yield self.hold(50)  # if not serviced within this time, renege\n        if self in waitingline:\n            self.leave(waitingline)\n            env.number_reneged += 1\n            env.print_trace("", "", "reneged")\n        else:\n            yield self.passivate()  # wait for service to be completed\n\n\nclass Clerk(sim.Component):\n    def process(self):\n        while True:\n            while len(waitingline) == 0:\n                yield self.passivate()\n            self.customer = waitingline.pop()\n            self.customer.activate()  # get the customer out of it\'s hold(50)\n            yield self.hold(30)\n            self.customer.activate()  # signal the customer that\'s all\'s done\n\n\nenv = sim.Environment()\nCustomerGenerator()\nenv.number_balked = 0\nenv.number_reneged = 0\nclerks = [Clerk() for _ in range(3)]\n\nwaitingline = sim.Queue("waitingline")\nenv.run(duration=300000)\nwaitingline.length.print_histogram(30, 0, 1)\nwaitingline.length_of_stay.print_histogram(30, 0, 10)\nprint("number reneged", env.number_reneged)\nprint("number balked", env.number_balked)\n\n')),(0,t.kt)("p",null,"Veamos algunos detalles."),(0,t.kt)("p",null,"Esto hace que el componente actual (un cliente) sea un componente de datos (y est\xe9 sujeto a recolecci\xf3n de elementos no utilizados), si la longitud de la cola es 5 o m\xe1s."),(0,t.kt)("p",null,"El renegamiento se implementa mediante una retenci\xf3n de 50. Si un empleado puede atender a un cliente, tomar\xe1 El cliente sale de la l\xednea de espera y la activar\xe1 en ese momento. El cliente solo tiene que comprobar si \xe9l / ella todav\xeda est\xe1 en la fila de espera. Si es as\xed, \xe9l / ella no ha sido atendido a tiempo y, por lo tanto, renegar\xe1."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"yield self.hold(50)\nif self in waitingline:\n    self.leave(waitingline)\n    env.number_reneged += 1\nelse:\n     self.passivate()\n\n")),(0,t.kt)("p",null,"Todo lo que el empleado tiene que hacer al comenzar a atender a un cliente es hacer que el siguiente cliente se alinee. Salga de la cola (como antes) y active este cliente (a la hora ahora). El efecto es que la retenci\xf3n del cliente terminar\xe1."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"self.customer = waitingline.pop()\nself.customer.activate()\n\n")),(0,t.kt)("h2",{id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegar-tiendapermalink-to-this-heading"},"El ejemplo de la oficina bancaria con resistir y renegar (tienda)",(0,t.kt)("a",{parentName:"h2",href:"https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging-store",title:"Permalink to this heading"},"\uf0c1")),(0,t.kt)("p",null,"Ahora mostramos c\xf3mo se implementa el rechazo y el renego con una tienda."),(0,t.kt)("p",null,"El c\xf3digo del modelo es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# Bank, 3 clerks (store, reneging).py\nimport salabim as sim\n\n\nclass CustomerGenerator(sim.Component):\n    def process(self):\n        while True:\n            customer = Customer()\n            yield self.to_store(waiting_room, customer, fail_at=env.now())\n            if self.failed():\n                customer.cancel()\n                env.number_balked += 1\n                print(env.now(), "balked",customer.name())\n                env.print_trace("", "", "balked",customer.name())\n            yield self.hold(sim.Uniform(5, 15))\n\n\nclass Clerk(sim.Component):\n    def process(self):\n        while True:\n            customer = yield self.from_store(waiting_room)\n            yield self.hold(30)\n\n\nclass Customer(sim.Component):\n    def process(self):\n        yield self.hold(50)\n        if self in waiting_room:\n            self.leave(waiting_room)\n            env.number_reneged += 1\n            env.print_trace("", "", "reneged")\n\nenv = sim.Environment(trace=False)\nenv.number_balked = 0\nenv.number_reneged = 0\nCustomerGenerator()\nfor _ in range(3):\n    Clerk()\nwaiting_room = sim.Store("waiting_room", capacity=5)\n\nenv.run(till=30000)\n\nwaiting_room.length.print_histogram(30, 0, 1)\nwaiting_room.length_of_stay.print_histogram(30, 0, 10)\nprint("number reneged", env.number_reneged)\nprint("number balked", env.number_balked)\n\n')),(0,t.kt)("p",null,"Como puede ver, la parte de resistencia se realiza estableciendo un valor de fail","_","at de 0 en el to","_","store, lo que significa que si la solicitud no se atiende inmediatamente, El cliente se resiste."),(0,t.kt)("p",null,"Para el renacimiento, hacemos lo mismo que con la soluci\xf3n ordinaria."),(0,t.kt)("h2",{id:"el-ejemplo-de-la-oficina-bancaria-con-resistir-y-renegar-recursospermalink-to-this-heading"},"El ejemplo de la oficina bancaria con resistir y renegar (recursos)",(0,t.kt)("a",{parentName:"h2",href:"https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-balking-and-reneging-resources",title:"Permalink to this heading"},"\uf0c1")),(0,t.kt)("p",null,"Ahora mostramos c\xf3mo el rechazo y la renegaci\xf3n se implementan con recursos."),(0,t.kt)("p",null,"El c\xf3digo del modelo es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# Example - bank, 3 clerks, reneging (resources).py\nimport salabim as sim\n\n\nclass CustomerGenerator(sim.Component):\n    def process(self):\n        while True:\n            Customer()\n            yield self.hold(sim.Uniform(5, 15).sample())\n\n\nclass Customer(sim.Component):\n    def process(self):\n        if len(clerks.requesters()) >= 5:\n            env.number_balked += 1\n            env.print_trace("", "", "balked")\n            yield self.cancel()\n        yield self.request(clerks, fail_delay=50)\n        if self.failed():\n            env.number_reneged += 1\n            env.print_trace("", "", "reneged")\n        else:\n            yield self.hold(30)\n            self.release()\n\n\nenv = sim.Environment()\nCustomerGenerator()\nenv.number_balked = 0\nenv.number_reneged = 0\nclerks = sim.Resource("clerks", 3)\n\nenv.run(till=50000)\n\nclerks.requesters().length.print_histogram(30, 0, 1)\nprint()\nclerks.requesters().length_of_stay.print_histogram(30, 0, 10)\nprint("number reneged", env.number_reneged)\nprint("number balked", env.number_balked)\n\n')),(0,t.kt)("p",null,"Como puede ver, la parte de resistencia es exactamente la misma que en el ejemplo sin recursos."),(0,t.kt)("p",null,"Para el reenging, todo lo que tenemos que hacer es agregar un fail","_","delay"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"yield self.request(clerks, fail_delay=50)\n\n")),(0,t.kt)("p",null,"Si la solicitud no se cumple dentro de las 50 unidades de tiempo, el proceso contin\xfaa despu\xe9s de esa declaraci\xf3n de solicitud. Y luego, simplemente verificamos si la solicitud ha fallado"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"if self.failed():\n    env.number_reneged += 1\n\n")),(0,t.kt)("p",null,"Este ejemplo muestra claramente la ventaja de la soluci\xf3n de recursos sobre el m\xe9todo pasivar/activate, en este ejemplo."),(0,t.kt)("h2",{id:"el-ejemplo-de-la-oficina-bancaria-con-estadospermalink-to-this-heading"},"El ejemplo de la oficina bancaria con estados",(0,t.kt)("a",{parentName:"h2",href:"https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-states",title:"Permalink to this heading"},"\uf0c1")),(0,t.kt)("p",null,"El paquete salabim contiene otro concepto \xfatil para el modelado: estados. En este caso, definimos un estado llamado worktodo."),(0,t.kt)("p",null,"El c\xf3digo del modelo es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# Example - bank, 3 clerks (state).py\nimport salabim as sim\n\n\nclass CustomerGenerator(sim.Component):\n    def process(self):\n        while True:\n            Customer()\n            yield self.hold(sim.Uniform(5, 15).sample())\n\n\nclass Customer(sim.Component):\n    def process(self):\n        self.enter(waitingline)\n        worktodo.trigger(max=1)\n        yield self.passivate()\n\n\nclass Clerk(sim.Component):\n    def process(self):\n        while True:\n            if len(waitingline) == 0:\n                yield self.wait((worktodo, True, 1))\n            self.customer = waitingline.pop()\n            yield self.hold(30)\n            self.customer.activate()\n\n\nenv = sim.Environment()\nCustomerGenerator()\nfor i in range(3):\n    Clerk()\nwaitingline = sim.Queue("waitingline")\nworktodo = sim.State("worktodo")\n\nenv.run(till=50000)\nwaitingline.print_histograms()\nworktodo.print_histograms()\n\n')),(0,t.kt)("p",null,"Veamos algunos detalles."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"worktodo = sim.State('worktodo')\n\n")),(0,t.kt)("p",null,"Esto define un estado con un valor inicial False."),(0,t.kt)("p",null,"En el c\xf3digo del cliente, el cliente intenta activar un empleado con"),(0,t.kt)("p",null,"El efecto es que si hay empleados esperando trabajo, la espera del primer empleado es honrada y Ese empleado contin\xfaa su proceso despu\xe9s de"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"yield self.wait(worktodo)\n\n")),(0,t.kt)("p",null,"Tenga en cuenta que el empleado solo va a esperar a trabajar despu\xe9s de completar un trabajo si hay no hay clientes esperando."),(0,t.kt)("h2",{id:"el-ejemplo-de-la-oficina-bancaria-con-standbypermalink-to-this-heading"},"El ejemplo de la oficina bancaria con standby",(0,t.kt)("a",{parentName:"h2",href:"https://www.salabim.org/manual/Modelling.html#the-bank-office-example-with-standby",title:"Permalink to this heading"},"\uf0c1")),(0,t.kt)("p",null,"El paquete salabim contiene otro poderoso mecanismo de proceso, llamado standby. Cuando un componente est\xe1 en modo de espera, se actualizar\xe1 despu\xe9s de ",(0,t.kt)("em",{parentName:"p"},"cada")," evento. Normalmente, el modo de espera ser\xe1 Se utiliza en un bucle WHILE donde en cada evento se comprueban una o m\xe1s condiciones."),(0,t.kt)("p",null,"El modelo con standby es"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'# Example - bank, 3 clerks (standby).py\nimport salabim as sim\n\n\nclass CustomerGenerator(sim.Component):\n    def process(self):\n        while True:\n            Customer()\n            yield self.hold(sim.Uniform(5, 15).sample())\n\n\nclass Customer(sim.Component):\n    def process(self):\n        self.enter(waitingline)\n        yield self.passivate()\n\n\nclass Clerk(sim.Component):\n    def process(self):\n        while True:\n            while len(waitingline) == 0:\n                yield self.standby()\n            self.customer = waitingline.pop()\n            yield self.hold(30)\n            self.customer.activate()\n\n\nenv = sim.Environment(trace=True)\nCustomerGenerator()\nfor _ in range(3):\n    Clerk()\nwaitingline = sim.Queue("waitingline")\n\nenv.run(till=50000)\nwaitingline.length.print_histogram(30, 0, 1)\nprint()\nwaitingline.length_of_stay.print_histogram(30, 0, 10)\n\n')),(0,t.kt)("p",null,"En este caso, la condici\xf3n se verifica con frecuencia con"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"while len(waitingline) == 0:\n    yield self.standby()\n\n")),(0,t.kt)("p",null,"El resto del c\xf3digo es muy similar a la versi\xf3n con estados."),(0,t.kt)("p",null,"Advertencia"),(0,t.kt)("p",null,"Es muy importante darse cuenta de que este mecanismo puede tener un impacto significativo en el rendimiento, como despu\xe9s de CADA evento, el componente se vuelve actual y debe verificarse. En general, se recomienda intentar usar estados o un pasivo / activar m\xe1s directo. construcci\xf3n."))}p.isMDXComponent=!0}}]);