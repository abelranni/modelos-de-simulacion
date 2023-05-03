"use strict";(self.webpackChunkmodelos_de_simulacion=self.webpackChunkmodelos_de_simulacion||[]).push([[2799],{3905:(e,a,l)=>{l.d(a,{Zo:()=>c,kt:()=>g});var t=l(7294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function o(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function i(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?o(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function r(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),l=a;return e&&(l="function"==typeof e?e(a):i(i({},a),e)),l},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(l),u=n,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return l?t.createElement(g,i(i({ref:a},c),{},{components:l})):t.createElement(g,i({ref:a},c))}));function g(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=l.length,i=new Array(o);i[0]=u;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[m]="string"==typeof e?e:n,i[1]=r;for(var p=2;p<o;p++)i[p]=l[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,l)}u.displayName="MDXCreateElement"},3513:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var t=l(7462),n=(l(7294),l(3905));const o={marp:!0,theme:"default",size:969,paginate:!0},i="Oficina Bancaria Fase I",r={unversionedId:"Simulacion/Anylogic/Ejemplo/banco_fase_1",id:"Simulacion/Anylogic/Ejemplo/banco_fase_1",title:"Oficina Bancaria Fase I",description:"Modelos de Simulaci\xf3n",source:"@site/docs/03 - Simulacion/Anylogic/Ejemplo/banco_fase_1.md",sourceDirName:"03 - Simulacion/Anylogic/Ejemplo",slug:"/Simulacion/Anylogic/Ejemplo/banco_fase_1",permalink:"/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_1",draft:!1,editUrl:"https://github.com/abelranni/modelos-de-simulacion/tree/main/docs/03 - Simulacion/Anylogic/Ejemplo/banco_fase_1.md",tags:[],version:"current",frontMatter:{marp:!0,theme:"default",size:969,paginate:!0},sidebar:"tutorialSidebar",previous:{title:"03 - Simulaci\xf3n",permalink:"/modelos-de-simulacion/docs/category/03---simulaci\xf3n"},next:{title:"Oficina Bancaria Fase II",permalink:"/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_2"}},s={},p=[{value:"Modelos de Simulaci\xf3n",id:"modelos-de-simulaci\xf3n",level:2},{value:"Fase 1. Creaci\xf3n de un modelo sencillo",id:"fase-1-creaci\xf3n-de-un-modelo-sencillo",level:2},{value:"Creaci\xf3n de un diagrama de flujo de proceso",id:"creaci\xf3n-de-un-diagrama-de-flujo-de-proceso",level:2},{value:"Ejecuci\xf3n del modelo",id:"ejecuci\xf3n-del-modelo",level:2}],c={toc:p},m="wrapper";function d(e){let{components:a,...l}=e;return(0,n.kt)(m,(0,t.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oficina-bancaria-fase-i"},"Oficina Bancaria Fase I"),(0,n.kt)("h2",{id:"modelos-de-simulaci\xf3n"},"Modelos de Simulaci\xf3n"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"fase-1-creaci\xf3n-de-un-modelo-sencillo"},"Fase 1. Creaci\xf3n de un modelo sencillo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html#creating-a-process-flowchart"},"Creating a process flowchart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html#running-the-model"},"Running the model"))),(0,n.kt)("p",null,"Primero, crearemos el modelo de cola m\xe1s simple simulando c\xf3mo se atiende a los clientes en el cajero autom\xe1tico."),(0,n.kt)("p",null,"Crear un nuevo modelo"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haga clic en el ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/NewAnyLogicProject_edit.gif",alt:null})," bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Nueva")," barra de herramientas. Aparecer\xe1 el cuadro de di\xe1logo ",(0,n.kt)("strong",{parentName:"p"},"Nuevo modelo"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Especifique el nombre del modelo. Tipo Banco en el cuadro de edici\xf3n Nombre del ",(0,n.kt)("strong",{parentName:"p"},"modelo"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/newModel.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Especifique la ubicaci\xf3n donde desea almacenar los archivos de modelo. Busque la carpeta existente con el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Examinar")," o escriba el nombre de la carpeta que desea crear en el cuadro de edici\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Ubicaci\xf3n"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seleccione ",(0,n.kt)("strong",{parentName:"p"},"minutos")," como unidades de tiempo modelo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haga clic en ",(0,n.kt)("strong",{parentName:"p"},"Finalizar")," para completar el proceso."))),(0,n.kt)("p",null,"Se crea un nuevo modelo. Ya tiene un tipo de agente llamado ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/Agent_icon.gif",alt:null}),"\xa0Principaly un experimento llamado experimento de ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/experiments/images/SimulationExperiment_obj.gif",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"simulaci\xf3n"),". Los agentes son los principales bloques de construcci\xf3n del modelo AnyLogic. En nuestro caso ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/Agent_icon.gif",alt:null}),"\xa0Principal El agente servir\xe1 como el lugar donde definiremos toda la l\xf3gica del modelo: aqu\xed pondremos el diagrama de flujo del proceso, y definiremos alguna animaci\xf3n simple."),(0,n.kt)("p",null,"En el centro del espacio de trabajo ver\xe1 el editor gr\xe1fico. Muestra el diagrama de la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/Agent_icon.gif",alt:null}),"\xa0Principal Tipo de agente."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/workspace.png",alt:null})),(0,n.kt)("p",null,"A la izquierda del editor gr\xe1fico puede ver la vista ",(0,n.kt)("strong",{parentName:"p"},"Proyectos")," y la vista ",(0,n.kt)("strong",{parentName:"p"},"Paleta")," compartiendo la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif",alt:null})," ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Palette_view.gif",alt:null})," misma \xe1rea. La ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Proyectos")," proporciona acceso a los modelos de AnyLogic abiertos actualmente en el \xe1rea de trabajo. El \xe1rbol del espacio de trabajo proporciona una navegaci\xf3n sencilla a trav\xe9s de los modelos. La ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Palette_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Paleta")," contiene todos los elementos gr\xe1ficos que puede agregar al editor gr\xe1fico de su agente simplemente arrastrando y soltando. Los elementos del modelo est\xe1n organizados en paletas por categor\xeda."),(0,n.kt)("p",null,"En el lado derecho del espacio de trabajo puede ver la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Properties_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Propiedades"),". La ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Properties_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Propiedades")," se utiliza para ver y modificar las propiedades de un elemento de modelo seleccionado actualmente. Cuando selecciona algo, por ejemplo, en la vista ",(0,n.kt)("strong",{parentName:"p"},"Proyectos")," o en el editor gr\xe1fico, la vista ",(0,n.kt)("strong",{parentName:"p"},"Propiedades")," muestra las propiedades de la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif",alt:null})," ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Properties_view.gif",alt:null})," selecci\xf3n."),(0,n.kt)("p",null,"Ahora podemos empezar a desarrollar el modelo."),(0,n.kt)("h2",{id:"creaci\xf3n-de-un-diagrama-de-flujo-de-proceso"},"Creaci\xf3n de un diagrama de flujo de proceso"),(0,n.kt)("p",null,"Ahora definiremos el proceso con un diagrama de flujo compuesto por bloques de ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/library-reference-guides/process-modeling-library/index.html"},(0,n.kt)("strong",{parentName:"a"},"la Biblioteca de Modelado de Procesos")),"."),(0,n.kt)("p",null,"Cada bloque aqu\xed define alguna operaci\xf3n que se realizar\xe1 con los agentes que pasan a trav\xe9s de este bloque."),(0,n.kt)("p",null,"En AnyLogic se crean diagramas de flujo a\xf1adiendo los bloques de la paleta de la biblioteca al diagrama gr\xe1fico, conectando bloques entre s\xed y ajustando los par\xe1metros de los bloques."),(0,n.kt)("p",null,"Crear el diagrama de flujo del modelo"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Despu\xe9s de crear el modelo, AnyLogic cambiar\xe1 a la vista Paleta y mostrar\xe1 la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Palette_view.gif",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"paleta")," Biblioteca de modelado de ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"procesos"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/palette.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Agregue ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png",alt:null})," bloques de la ",(0,n.kt)("strong",{parentName:"p"},"biblioteca de modelado de procesos")," en el diagrama y con\xe9ctelos como se muestra en la figura siguiente. Para agregar un bloque de diagrama de flujo en el diagrama, arrastre el elemento requerido de la paleta al editor gr\xe1fico."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/ge_1.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Al arrastrar los bloques y colocarlos uno cerca del otro, es posible que aparezca las l\xedneas que conectan los bloques. Estos conectores deben conectar solo los puertos que se encuentran en los bordes derecho e izquierdo de los iconos de bloque."))),(0,n.kt)("p",null,"Nuestro diagrama de flujo describe el sistema de cola m\xe1s simple, que consiste en una fuente de agentes, un retraso, una cola antes de este retraso y el bloque de sumidero final."),(0,n.kt)("p",null,"Digamos un par de palabras sobre estos bloques de diagrama de flujo."),(0,n.kt)("p",null,"Consulte ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/library-reference-guides/process-modeling-library/pml-blocks.html"},"Bloques")," de la Biblioteca de modelado de procesos para obtener una lista de todos los ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png",alt:null})," bloques de ",(0,n.kt)("strong",{parentName:"p"},"la Biblioteca de modelado de procesos")," con descripciones breves y enlaces a art\xedculos detallados individuales sobre cada bloque."),(0,n.kt)("p",null,"Configurar los bloques de diagrama de flujo"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Para modificar las propiedades de alg\xfan elemento del modelo, primero selecci\xf3nelo haciendo clic en \xe9l en el editor gr\xe1fico o en la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Proyectos"),". Esto abre las propiedades de este elemento en la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Properties_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Propiedades"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seleccione ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/library-reference-guides/process-modeling-library/icons/source16.png",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"Bloque de origen"),". En la vista ",(0,n.kt)("strong",{parentName:"p"},"Propiedades"),", especifique la frecuencia con la que llegan los clientes estableciendo la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/Properties_view.gif",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"tasa de llegada")," en 0.3 ",(0,n.kt)("strong",{parentName:"p"},"por minuto"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/source_props.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modifique las propiedades del ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/library-reference-guides/process-modeling-library/icons/queue16.png",alt:null})," bloque ",(0,n.kt)("strong",{parentName:"p"},"Queue"),". Establezca la ",(0,n.kt)("strong",{parentName:"p"},"capacidad")," en 15 agentes. Como m\xe1ximo, 15 clientes esperar\xe1n en una cola."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/queue_props.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cambie el nombre del ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/library-reference-guides/process-modeling-library/icons/delay16.png",alt:null})," bloque ",(0,n.kt)("strong",{parentName:"p"},"Delay")," a CAJERO.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Supongamos que el tiempo de procesamiento dentro del ",(0,n.kt)("strong",{parentName:"p"},"cajero autom\xe1tico")," se distribuye triangularmente con un valor medio de 1.5, min de 0.8 y valor m\xe1ximo de 3.5 ",(0,n.kt)("strong",{parentName:"p"},"minutos"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/delay_props.png",alt:null})))),(0,n.kt)("p",null,"El triangular() es un generador de n\xfameros aleatorios est\xe1ndar de AnyLogic. AnyLogic tambi\xe9n proporciona otras distribuciones de n\xfameros aleatorios, como ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/advanced/functions/normal.html"},"normal"),", ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/advanced/functions/poisson.html"},"Poisson"),", ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/advanced/functions/exponential.html"},"exponencial"),", etc. Consulte la p\xe1gina ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/advanced/functions/probability-index.html"},"Distribuciones de probabilidad")," para obtener la lista de todos los generadores de n\xfameros aleatorios disponibles."),(0,n.kt)("h2",{id:"ejecuci\xf3n-del-modelo"},"Ejecuci\xf3n del modelo"),(0,n.kt)("p",null,"Hemos terminado de modelar el sistema de colas m\xe1s simple y estamos listos para ejecutar el modelo resultante. En primer lugar, cree el modelo haciendo clic en el bot\xf3n de la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/toolbars/Build_co.gif",alt:null})," barra de herramientas ",(0,n.kt)("strong",{parentName:"p"},"Crear modelo"),". Si hay algunos errores en el modelo, el edificio falla y, a continuaci\xf3n, aparece la vista ",(0,n.kt)("strong",{parentName:"p"},"Problemas")," con todos ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProblemsView_view.gif",alt:null})," los errores encontrados en el modelo. Haga doble clic en un error de la lista para abrir la ubicaci\xf3n del error y corregirlo."),(0,n.kt)("p",null,"Una vez que el modelo se haya creado correctamente, puede iniciarlo. Al ejecutar la simulaci\xf3n, se actualiza autom\xe1ticamente el modelo actual."),(0,n.kt)("p",null,"Iniciar el modelo"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Ejecutar")," de la barra de herramientas y elija el ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/toolbars/Run_co.gif",alt:null})," experimento que desea ejecutar en la lista desplegable. El ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/experiments/images/SimulationExperiment_obj.gif",alt:null})," experimento ",(0,n.kt)("strong",{parentName:"p"},"de simulaci\xf3n")," se llama Banco/Simulaci\xf3n."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/exp_run.png",alt:null})))),(0,n.kt)("p",null,"Si este modelo es el \xfanico abierto en el espacio de trabajo en este momento, se le pedir\xe1 que ejecute este experimento en particular. M\xe1s adelante, este bot\xf3n iniciar\xe1 el experimento ejecutado anteriormente. Para ejecutar cualquier otro experimento, haga clic con el bot\xf3n derecho del rat\xf3n (Mac OS: Ctrl + clic) en el experimento en la ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif",alt:null})," vista ",(0,n.kt)("strong",{parentName:"p"},"Proyectos")," y elija ",(0,n.kt)("strong",{parentName:"p"},"Ejecutar")," en el men\xfa contextual."),(0,n.kt)("p",null,"Una vez iniciado el modelo, ver\xe1 la ",(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/anylogic/running/model-window.html"},"ventana del modelo"),". Muestra la presentaci\xf3n del tipo de agente de nivel superior (de forma predeterminada, es ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/Agent_icon.gif",alt:null}),"\xa0Principal)."),(0,n.kt)("p",null,"El modelo se lanzar\xe1 inmediatamente. Ver\xe1 un diagrama de flujo animado. Cada modelo creado con ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png",alt:null})," ",(0,n.kt)("strong",{parentName:"p"},"la Biblioteca de modelado de procesos")," tiene instant\xe1neamente un diagrama de flujo animado donde puede ver el estado detallado del bloque actual, por ejemplo, el tama\xf1o de la cola, el n\xfamero de agentes restantes, etc., \xa1completamente visualizado!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/run_1.png",alt:null})),(0,n.kt)("p",null,"Si es necesario, ajuste la velocidad de ejecuci\xf3n a sus necesidades utilizando los botones ",(0,n.kt)("strong",{parentName:"p"},"Ralentizar")," ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/running/images/slowDown.png",alt:null})," y ",(0,n.kt)("strong",{parentName:"p"},"Acelerar en")," ",(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/anylogic/running/images/speedUp.png",alt:null})," el panel de control."),(0,n.kt)("p",null,"Puede inspeccionar los bloques de diagramas de flujo para obtener informaci\xf3n detallada sobre su estado actual. Haga clic en el bloque para abrir su ventana de inspecci\xf3n. La ventana Inspeccionar muestra estad\xedsticas del bloque, por ejemplo, la inspecci\xf3n del bloque de ",(0,n.kt)("strong",{parentName:"p"},"cola")," muestra la capacidad de la cola, el n\xfamero de agentes que pasan por cualquiera de los puertos del bloque y tambi\xe9n si la opci\xf3n de tiempo de espera est\xe1 habilitada para esta cola. Contiene string muestra el n\xfamero de agentes que se encuentran actualmente en el bloque junto con los ID de estos agentes."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://anylogic.help/tutorials/bank-office/images/run_1_1.png",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html"},"Fuente")))}d.isMDXComponent=!0}}]);