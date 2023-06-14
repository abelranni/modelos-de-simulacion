---
marp: true
theme: default
size: 16:9
paginate: true
---

# Oficina Bancaria Fase I

## Modelos de Simulación

---


## Fase 1. Creación de un modelo sencillo

-   [Creating a process flowchart](https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html#creating-a-process-flowchart)
-   [Running the model](https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html#running-the-model)

Primero, crearemos el modelo de cola más simple simulando cómo se atiende a los clientes en el cajero automático.

Crear un nuevo modelo

1.  Haga clic en el ![](https://anylogic.help/anylogic/ui/images/NewAnyLogicProject_edit.gif) botón **Nueva** barra de herramientas. Aparecerá el cuadro de diálogo **Nuevo modelo**.
2.  Especifique el nombre del modelo. Tipo Banco en el cuadro de edición Nombre del **modelo**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/newModel.png)
    
3.  Especifique la ubicación donde desea almacenar los archivos de modelo. Busque la carpeta existente con el botón **Examinar** o escriba el nombre de la carpeta que desea crear en el cuadro de edición **Ubicación**.
4.  Seleccione **minutos** como unidades de tiempo modelo.
5.  Haga clic en **Finalizar** para completar el proceso.

Se crea un nuevo modelo. Ya tiene un tipo de agente llamado ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principaly un experimento llamado experimento de ![](https://anylogic.help/anylogic/experiments/images/SimulationExperiment_obj.gif) **simulación**. Los agentes son los principales bloques de construcción del modelo AnyLogic. En nuestro caso ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal El agente servirá como el lugar donde definiremos toda la lógica del modelo: aquí pondremos el diagrama de flujo del proceso, y definiremos alguna animación simple.

En el centro del espacio de trabajo verá el editor gráfico. Muestra el diagrama de la ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal Tipo de agente.

![](https://anylogic.help/tutorials/bank-office/images/workspace.png)

A la izquierda del editor gráfico puede ver la vista **Proyectos** y la vista **Paleta** compartiendo la ![](https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif) ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) misma área. La ![](https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif) vista **Proyectos** proporciona acceso a los modelos de AnyLogic abiertos actualmente en el área de trabajo. El árbol del espacio de trabajo proporciona una navegación sencilla a través de los modelos. La ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) vista **Paleta** contiene todos los elementos gráficos que puede agregar al editor gráfico de su agente simplemente arrastrando y soltando. Los elementos del modelo están organizados en paletas por categoría.

En el lado derecho del espacio de trabajo puede ver la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**. La ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades** se utiliza para ver y modificar las propiedades de un elemento de modelo seleccionado actualmente. Cuando selecciona algo, por ejemplo, en la vista **Proyectos** o en el editor gráfico, la vista **Propiedades** muestra las propiedades de la ![](https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif) ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) selección.

Ahora podemos empezar a desarrollar el modelo.

## Creación de un diagrama de flujo de proceso

Ahora definiremos el proceso con un diagrama de flujo compuesto por bloques de [**la Biblioteca de Modelado de Procesos**](https://anylogic.help/library-reference-guides/process-modeling-library/index.html).

Cada bloque aquí define alguna operación que se realizará con los agentes que pasan a través de este bloque.

En AnyLogic se crean diagramas de flujo añadiendo los bloques de la paleta de la biblioteca al diagrama gráfico, conectando bloques entre sí y ajustando los parámetros de los bloques.

Crear el diagrama de flujo del modelo

1.  Después de crear el modelo, AnyLogic cambiará a la vista Paleta y mostrará la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) **paleta** Biblioteca de modelado de ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) **procesos**:
    
    ![](https://anylogic.help/tutorials/bank-office/images/palette.png)
    
2.  Agregue ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) bloques de la **biblioteca de modelado de procesos** en el diagrama y conéctelos como se muestra en la figura siguiente. Para agregar un bloque de diagrama de flujo en el diagrama, arrastre el elemento requerido de la paleta al editor gráfico.
    
    ![](https://anylogic.help/tutorials/bank-office/images/ge_1.png)
    
3.  Al arrastrar los bloques y colocarlos uno cerca del otro, es posible que aparezca las líneas que conectan los bloques. Estos conectores deben conectar solo los puertos que se encuentran en los bordes derecho e izquierdo de los iconos de bloque.

Nuestro diagrama de flujo describe el sistema de cola más simple, que consiste en una fuente de agentes, un retraso, una cola antes de este retraso y el bloque de sumidero final.

Digamos un par de palabras sobre estos bloques de diagrama de flujo.

Consulte [Bloques](https://anylogic.help/library-reference-guides/process-modeling-library/pml-blocks.html) de la Biblioteca de modelado de procesos para obtener una lista de todos los ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) bloques de **la Biblioteca de modelado de procesos** con descripciones breves y enlaces a artículos detallados individuales sobre cada bloque.

Configurar los bloques de diagrama de flujo

1.  Para modificar las propiedades de algún elemento del modelo, primero selecciónelo haciendo clic en él en el editor gráfico o en la ![](https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif) vista **Proyectos**. Esto abre las propiedades de este elemento en la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
2.  Seleccione ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/source16.png) **Bloque de origen**. En la vista **Propiedades**, especifique la frecuencia con la que llegan los clientes estableciendo la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) **tasa de llegada** en 0.3 **por minuto**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/source_props.png)
    
3.  Modifique las propiedades del ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/queue16.png) bloque **Queue**. Establezca la **capacidad** en 15 agentes. Como máximo, 15 clientes esperarán en una cola.
    
    ![](https://anylogic.help/tutorials/bank-office/images/queue_props.png)
    
4.  Cambie el nombre del ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/delay16.png) bloque **Delay** a CAJERO.
5.  Supongamos que el tiempo de procesamiento dentro del **cajero automático** se distribuye triangularmente con un valor medio de 1.5, min de 0.8 y valor máximo de 3.5 **minutos**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/delay_props.png)
    

El triangular() es un generador de números aleatorios estándar de AnyLogic. AnyLogic también proporciona otras distribuciones de números aleatorios, como [normal](https://anylogic.help/advanced/functions/normal.html), [Poisson](https://anylogic.help/advanced/functions/poisson.html), [exponencial](https://anylogic.help/advanced/functions/exponential.html), etc. Consulte la página [Distribuciones de probabilidad](https://anylogic.help/advanced/functions/probability-index.html) para obtener la lista de todos los generadores de números aleatorios disponibles.

## Ejecución del modelo

Hemos terminado de modelar el sistema de colas más simple y estamos listos para ejecutar el modelo resultante. En primer lugar, cree el modelo haciendo clic en el botón de la ![](https://anylogic.help/anylogic/ui/images/toolbars/Build_co.gif) barra de herramientas **Crear modelo**. Si hay algunos errores en el modelo, el edificio falla y, a continuación, aparece la vista **Problemas** con todos ![](https://anylogic.help/anylogic/ui/images/views/ProblemsView_view.gif) los errores encontrados en el modelo. Haga doble clic en un error de la lista para abrir la ubicación del error y corregirlo.

Una vez que el modelo se haya creado correctamente, puede iniciarlo. Al ejecutar la simulación, se actualiza automáticamente el modelo actual.

Iniciar el modelo

1.  Haga clic en el botón **Ejecutar** de la barra de herramientas y elija el ![](https://anylogic.help/anylogic/ui/images/toolbars/Run_co.gif) experimento que desea ejecutar en la lista desplegable. El ![](https://anylogic.help/anylogic/experiments/images/SimulationExperiment_obj.gif) experimento **de simulación** se llama Banco/Simulación.
    
    ![](https://anylogic.help/tutorials/bank-office/images/exp_run.png)
    

Si este modelo es el único abierto en el espacio de trabajo en este momento, se le pedirá que ejecute este experimento en particular. Más adelante, este botón iniciará el experimento ejecutado anteriormente. Para ejecutar cualquier otro experimento, haga clic con el botón derecho del ratón (Mac OS: Ctrl + clic) en el experimento en la ![](https://anylogic.help/anylogic/ui/images/views/ProjectTree_view.gif) vista **Proyectos** y elija **Ejecutar** en el menú contextual.

Una vez iniciado el modelo, verá la [ventana del modelo](https://anylogic.help/anylogic/running/model-window.html). Muestra la presentación del tipo de agente de nivel superior (de forma predeterminada, es ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal).

El modelo se lanzará inmediatamente. Verá un diagrama de flujo animado. Cada modelo creado con ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) **la Biblioteca de modelado de procesos** tiene instantáneamente un diagrama de flujo animado donde puede ver el estado detallado del bloque actual, por ejemplo, el tamaño de la cola, el número de agentes restantes, etc., ¡completamente visualizado!

![](https://anylogic.help/tutorials/bank-office/images/run_1.png)

Si es necesario, ajuste la velocidad de ejecución a sus necesidades utilizando los botones **Ralentizar** ![](https://anylogic.help/anylogic/running/images/slowDown.png) y **Acelerar en** ![](https://anylogic.help/anylogic/running/images/speedUp.png) el panel de control.

Puede inspeccionar los bloques de diagramas de flujo para obtener información detallada sobre su estado actual. Haga clic en el bloque para abrir su ventana de inspección. La ventana Inspeccionar muestra estadísticas del bloque, por ejemplo, la inspección del bloque de **cola** muestra la capacidad de la cola, el número de agentes que pasan por cualquiera de los puertos del bloque y también si la opción de tiempo de espera está habilitada para esta cola. Contiene string muestra el número de agentes que se encuentran actualmente en el bloque junto con los ID de estos agentes.

![](https://anylogic.help/tutorials/bank-office/images/run_1_1.png)

---

[Fuente](https://anylogic.help/tutorials/bank-office/1-creating-simple-model.html)