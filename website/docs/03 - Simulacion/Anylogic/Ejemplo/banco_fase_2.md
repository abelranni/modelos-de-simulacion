---
marp: true
theme: default
size: 16:9
paginate: true
---

# Oficina Bancaria Fase II

## Modelos de Simulación

---

## Fase 2. Creación de animación de modelo

-   [Adding space markup shapes](https://anylogic.help/tutorials/bank-office/2-creating-model-animation.html#adding-space-markup-shapes)
-   [Adding 3D animation](https://anylogic.help/tutorials/bank-office/2-creating-model-animation.html#adding-3d-animation)
    -   [Navigating through 3D animation](https://anylogic.help/tutorials/bank-office/2-creating-model-animation.html#navigating-through-3d-animation)
    -   [Adding 3D objects](https://anylogic.help/tutorials/bank-office/2-creating-model-animation.html#adding-3d-objects)

Aunque el diagrama de flujo está animado, es posible que desee ver el diseño real del departamento bancario animado. ¡Eso también es posible! Para cada modelo puede crear una animación para representar visualmente su modelo. Puede crear cualquier animación que desee. Ahora dibujaremos el diseño que consiste en el cajero automático y una cola. Luego animaremos a los clientes que están en la cola y usan el cajero automático. También queremos visualizar el estado actual del cajero automático.

Ahora dibujaremos el diseño de nuestro banco. El diseño se dibuja en el mismo diagrama donde se dibuja un diagrama de flujo. Sin embargo, si tiene una imagen existente del diseño, simplemente puede importar esta imagen como el diseño del banco en lugar de dibujarla usted mismo.

## Agregar formas de marcado de espacio

Configurar el marcado de espacio para el cajero automático

1.  Dibuje el cajero automático como [un nodo de punto](https://anylogic.help/markup/node-point.html). En primer lugar, abra la **paleta Marcado de espacio** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/MarkupPalette_view.png) vista **Paleta** .
2.  Arrastre el ![](https://anylogic.help/markup/images/PointNode_obj.gif) elemento **Nodo de puntos** de la ![](https://anylogic.help/anylogic/ui/images/palettes/MarkupPalette_view.png) paleta **Marcado de espacio** al editor gráfico y colóquelo debajo del diagrama de flujo.
    
    ![](https://anylogic.help/tutorials/bank-office/images/point_node_draw.png)
    
3.  Seleccione el nodo de punto en el editor gráfico para abrir su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**. Escriba la expresión que permitirá cambiar el color de la forma en tiempo de ejecución en la propiedad **Color**:  
    ATM.size() > 0 ? rojo : verde
    
    CAJERO aquí está el nombre del ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/delay16.png) bloque **Delay** que creamos. La expresión determina el color del nodo de punto en tiempo de ejecución. El tamaño() devuelve el número de agentes que se están procesando actualmente. El color será rojo, si un cliente está siendo atendido en este momento, y verde de lo contrario.
    
4.  Haga clic en el bloque **ATM** en el diagrama de flujo para abrir su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
5.  En la opción **Ubicación del agente**, seleccione el nodo de **punto** que ha dibujado anteriormente. Puede hacer clic en la flecha hacia abajo y seleccionar el nodo de punto de la lista de elementos de marcado de espacio apropiados, o puede hacer clic en el botón, ubicado a la derecha, para seleccionar esta forma de marcado de espacio en el editor gráfico (el resto de los elementos del editor aparecerán atenuados).
    
    ![](https://anylogic.help/tutorials/bank-office/images/entity_location.png)
    

Configurar el marcado de espacio para la cola

1.  Dibuje la cola como [una ruta](https://anylogic.help/markup/path.html). En primer lugar, abra la **paleta Marcado de espacio** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/MarkupPalette_view.png) vista **Paleta**.
2.  Haga doble clic en el ![](https://anylogic.help/markup/images/Path_obj.gif) elemento **Path** de la paleta. Aparecerá un icono de lápiz junto a él, lo que significa que ha cambiado al modo de dibujo.
3.  Haga clic en el editor gráfico para poner el primer punto de la ruta. Haga más clics para agregar puntos de inflexión. Termine de dibujar con un doble clic.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_1.png)
    
4.  Haga clic en el bloque de **cola** en el diagrama de flujo y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
5.  En la opción **Ubicación del agente**, seleccione la **ruta** que ha dibujado anteriormente. Puede hacer clic en la flecha hacia abajo y seleccionar la ruta de la lista de elementos apropiados, o puede hacer clic en el botón, ubicado a la derecha, para seleccionar esta forma de marcado de espacio desde el editor gráfico (el resto de los elementos en el editor estarán atenuados).
    
    ![](https://anylogic.help/tutorials/bank-office/images/entity_location_2.png)
    

Ahora puede ejecutar el modelo y observar su comportamiento. Si desea acelerar significativamente la simulación, cambie al modo de tiempo virtual haciendo clic en el ![](https://anylogic.help/anylogic/running/images/vt.png) control **Ejecutar lo más rápido posible (modo de tiempo virtual).** Cambiar al modo de tiempo virtual le permite ver la simulación ejecutada a su velocidad máxima. Por lo tanto, puede simular un largo período de tiempo.

![](https://anylogic.help/tutorials/bank-office/images/queue.png)

## Agregar animación 3D

Los dos elementos que hemos dibujado por defecto se muestran en 2D y 3D. Puede comprobar esta propiedad en la sección **Avanzadas** de su vista de propiedades. Ahora queremos crear animación 3D para nuestro modelo.

En primer lugar, debe agregar una [ventana 3D](https://anylogic.help/anylogic/3d/view3d.html) en el diagrama de su tipo de agente.

![](https://anylogic.help/anylogic/3d/images/View3D_edit.gif) **La ventana** 3D desempeña el papel de un marcador de posición para la animación 3D. Define el área en el diagrama de presentación donde se mostrará la animación 3D en tiempo de ejecución.

Agregar ventana 3D

1.  Arrastre el ![](https://anylogic.help/anylogic/3d/images/View3D_edit.gif) elemento Ventana 3D de la sección **3D** de la ![](https://anylogic.help/anylogic/ui/images/palettes/PresentationPalette_view.gif) paleta **Presentación** al editor gráfico.
2.  El área gris aparecerá en la pantalla. Ubíquelo donde desee que se muestre la presentación 3D en el tiempo de ejecución del modelo:
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_3.png)
    

### Navegación a través de la animación 3D

Ahora puede ejecutar su modelo y observar una animación 3D simple.

Al crear una ventana 3D, AnyLogic agrega un área de vista que le permite navegar fácilmente a la [vista](https://anylogic.help/anylogic/presentation/viewarea.html) 3D en tiempo de ejecución. Para cambiar a esta vista 3D mientras se ejecuta el modelo, abra el panel de desarrollador haciendo clic en el control **Panel** de [desarrollador](https://anylogic.help/anylogic/running/developer-panel.html) en la esquina derecha del [panel](https://anylogic.help/anylogic/running/control-panel.html) de ![](https://anylogic.help/anylogic/running/images/debug.png) control. En el panel de desarrolladores, expanda el **área de selección de vista para navegar por** la ![](https://anylogic.help/anylogic/running/images/navigate.png) lista y seleccione **\[window3d\]** en la lista.

![](https://anylogic.help/tutorials/bank-office/images/navigate.png)

Puede navegar por la escena 3D utilizando los comandos que se describen a continuación:

| Con el fin de | Utilice el ratón como se describe aquí |
| --- | --- |
| Mover la escena | 1\. Presione el botón izquierdo del mouse en la vista 3D y mantenga presionado el botón del mouse.  
2\. Mueva el ratón en la dirección requerida. |
| Girar la escena | 1\. Presione la tecla Alt (Mac OS: tecla Opción) y manténgala presionada.  
2\. Haga clic en la ventana de escena 3D y, mientras mantiene presionada la tecla Alt y el botón izquierdo del mouse.  
3\. Mueva el ratón en la dirección de rotación requerida. |
| Acercar/alejar la escena | 1\. Desplácese la rueda del mouse en la ventana 3D lejos de / hacia usted. |

### Agregar objetos 3D

Ahora queremos agregar una cifra de cliente. De forma predeterminada, los clientes se dibujan como puntos de colores y se muestran como cilindros de colores en la animación 3D. Queremos crear nuestro tipo de cliente personalizado y animarlo en 3D. Crearemos un nuevo tipo de agente para este propósito.

Crear un nuevo tipo de agente

1.  **Abra la Biblioteca de modelado de procesos** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta**.
2.  Arrastre el elemento **Tipo de** ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) agente al editor gráfico.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_4.png)
    
3.  El asistente **Nuevo agente** se abrirá en el paso **Creación de un nuevo tipo de agente**. Entrar Cliente como **nombre del tipo** de agente y deje seleccionada la **opción Crear el tipo de agente "desde cero".** Presione **Siguiente**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/new_agent_1.png)
    
4.  En el siguiente paso, seleccione 3D como tipo de animación y seleccione **Persona** de la lista de figuras **3D**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/new_agent_2.png)
    
5.  Haga clic en **Finalizar**. El nuevo ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Cliente Se abrirá el diagrama. Puede encontrar la figura 3D de **la persona** en el origen del eje. Vuelva a la opción ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama.

Configurar el diagrama de flujo para usar el nuevo tipo

1.  En el ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama, seleccione el bloque **de origen** en el editor gráfico.
2.  Elija ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) **Cliente** en la lista desplegable **Nuevo agente**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_7.png)
    
3.  Vaya a la vista **Propiedades** del elemento **de nodo** y establezca Control ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) **visible** en **no**. De esta manera, la forma de marcado será invisible durante la animación en el tiempo de ejecución del modelo.
4.  De la misma manera, haga que el elemento **path** también sea invisible en tiempo de ejecución.
5.  Ejecute el modelo y cambie a la vista 3D para ver a nuestros clientes moviéndose en la cola.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_9.png)
    

Agregar una cifra de cajero automático

1.  Abra la paleta **Objetos 3D** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/3d_objects.png) vista **Paleta**.
2.  Arrastre la figura **ATM** 3D de la sección **Supermercado** de esta paleta al **nodo** del editor gráfico. En el cuadro de diálogo **Objeto 3D de escala automática** que se muestra, haga clic en el botón **Sí**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_8.png)
    
3.  Si ejecuta el modelo ahora y verifica la animación 3D en modo **window3D**, notará que nuestro cajero automático no se enfrenta al flujo de clientes y necesitamos rotarlo.
4.  Seleccione el objeto **atm** 3D en el editor gráfico y abra la sección **Posición** en su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
5.  Elegir 0 grados de la lista desplegable de la opción **Rotación Z**.
6.  Ejecute el modelo para verificar que el cajero automático esté frente a los clientes ahora.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase2_10.png)

---

[Fuente](https://anylogic.help/tutorials/bank-office/2-creating-model-animation.html)