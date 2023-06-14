---
marp: true
theme: default
size: 16:9
paginate: true
---

# Oficina Bancaria Fase III

## Modelos de Simulación

---

## Fase 3. Agregar cajeros

-   [Modifying the flowchart](https://anylogic.help/tutorials/bank-office/3-adding-tellers.html#modifying-the-flowchart)
-   [Adding space markup shapes](https://anylogic.help/tutorials/bank-office/3-adding-tellers.html#adding-space-markup-shapes)
-   [Adding 3D objects](https://anylogic.help/tutorials/bank-office/3-adding-tellers.html#adding-3d-objects)

Ahora crearemos otra parte del sistema agregando cajeros que están trabajando en el banco. Ahora algunos clientes vendrán a ver cajeros, otros, para acceder al cajero automático. Podemos modelar cajeros usando retrasos de la misma manera que modelamos cajeros automáticos. Sin embargo, modelar cajeros usando recursos es mucho más conveniente. **El recurso** es una unidad especial que puede ser poseída por un agente. Sólo un agente puede poseer un recurso a la vez; Por lo tanto, los agentes compiten por los recursos.

## Modificación del diagrama de flujo

Crear un servicio

1.  **Abra la Biblioteca de modelado de procesos** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta** y arrastre el ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/service16.png) bloque **Servicio** a nuestro ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama. ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/service16.png) **El servicio** se apodera de las unidades de recursos para el agente, retrasa al agente y libera las unidades incautadas.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_1.png)
    
2.  Vaya a la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades** del bloque de **servicio**.
3.  Modifique las propiedades del bloque:
    -   Solo hay una cola para todos los cajeros. **Configure la capacidad de la cola** en 20.
    -   Suponemos que el tiempo de servicio se distribuye triangularmente con el valor mínimo de 2.5, el valor promedio de 6 y el valor máximo de 11 minutos. **Establezca Tiempo de retardo** en triangular(2.5, 6, 11)
        
        ![](https://anylogic.help/tutorials/bank-office/images/phase3_2.png)
        

Ajustar el diagrama de flujo del proceso

1.  Mueva la **cola** de bloques, el **cajero automático** y el **sumidero** hacia la derecha para dejar espacio para un bloque entre el **origen** y la **cola**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/make%20space.png)
    
2.  **Abra la Biblioteca de modelado de procesos** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta** y agregue el bloque **SelectOutput** en el ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/selectOutput16.png) espacio resultante. Cuando coloque el bloque en el conector, se incorporará automáticamente. ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/selectOutput16.png) **SelectOutput** es un bloque de toma de decisiones. El agente que llegó al bloque se reenvía a lo largo de uno de los dos puertos de salida dependiendo de la condición definida por el usuario.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_3.png)
    
3.  Seleccione **selectOutput** en el diagrama de flujo y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**. Elija la opción **Si la condición es true** para el parámetro **Select True Output**. Asegúrese de que **la condición** es randomTrue(0,5 ).  
    Esta condición de enrutamiento del agente define que el número de clientes que compiten por el servicio de cajero automático y cajero será aproximadamente igual.
4.  [Conecte](https://anylogic.help/library-reference-guides/process-modeling-library/connecting-flowchart-blocks.html) **selectOutput** y **service** con otros bloques como se muestra en la figura:
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_4.png)
    

Agregar recursos para el servicio

1.  **Abra la Biblioteca de modelado de procesos** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta** y arrastre el ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/resourcePool16.png) bloque **ResourcePool** a nuestro ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama.  
    ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/resourcePool16.png) **El bloque ResourcePool** es un almacenamiento para unidades de recursos.
2.  Colóquelo en **servicio** y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
3.  Asigne un nombre al bloque Cajeros.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_5.png)
    
4.  Especifique que este bloque de recursos tiene sólo cuatro unidades de recursos estableciendo su **capacidad** en 4.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_6.png)
    
5.  ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/resourcePool16.png) **El bloque ResourcePool** debe estar conectado al bloque de captura y liberación de recursos ( ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/service16.png) **Servicio** en nuestro caso). Así que necesitamos modificar las propiedades del bloque de **servicio**.
6.  **Seleccione servicio** en el diagrama de flujo para abrir sus propiedades. Establezca el parámetro **Seize** en **unidades del mismo grupo**. A continuación, especifique el grupo de recursos que hemos creado en la opción **Grupo de recursos**. Puede hacer clic en la flecha hacia abajo para seleccionar el objeto del grupo de recursos de la lista desplegable o puede hacer clic en el botón, situado a la derecha, para seleccionar el objeto en el editor gráfico (todos los objetos inapropiados aparecerán atenuados).
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_7.png)
    
7.  Ahora, dado que el modelo ha cambiado, también necesitamos alterar la animación del modelo.

## Agregar formas de marcado de espacio

Ahora queremos dibujar el área para hacer cola y un lugar para recibir servicio para nuestros clientes.

Configurar el marcado de espacio para la cola para los cajeros

1.  En esta ocasión dibujaremos una zona de espera utilizando un [nodo rectangular](https://anylogic.help/markup/node-r.html). En primer lugar, abra la **paleta Marcado de espacio** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/MarkupPalette_view.png) vista **Paleta**.
2.  Haga doble clic en el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) elemento **Nodo rectangular** para cambiar al modo de dibujo.
3.  Haga clic en el editor gráfico y arrastre el rectángulo sin soltar el botón del ratón. Suelte cuando tenga un nodo rectangular del formato requerido. Puede editar su forma más tarde según lo necesite.
4.  Asigne un nombre al nodo Área de espera.
5.  Cambie el control **Visible** a **no**. De esta manera, la forma de marcado será invisible durante la animación en tiempo de ejecución del modelo.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_8.png)
    
6.  Haga clic en el bloque de **servicio** en el diagrama de flujo y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
7.  Seleccione el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) nodo **waitingArea** en la opción **Ubicación del agente (cola).**
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_9.png)
    

Configurar el marcado de espacio para los clientes

Los clientes necesitan un lugar para pararse en algún lugar mientras son atendidos por los cajeros.

1.  Dibuje otro nodo rectangular como se muestra en la imagen siguiente. Asigne un nombre al nodo customerPlaces y, en sus propiedades, cambie el control **Visible** a **no**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_17.png)
    
2.  Utilizaremos [atractores](https://anylogic.help/markup/attractor.html) para definir los clientes que reciben servicio. Seleccione el nodo **customerPlaces** y haga clic en el botón **Atractores...** en sus propiedades. En la ventana **Atractores** que aparecerá, especifique 4 para el modo de creación **Número de atractores** y haga clic en **Aceptar.** Verá que los atractores aparecieron en el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) nodo **customerPlaces** con un desplazamiento uniforme.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_18.png)
    
3.  Ahora tenemos que referirnos a esta área en el diagrama de flujo. Haga clic en el bloque de **servicio** en el diagrama de flujo y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
4.  Seleccione el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) nodo **customerPlaces** en la opción **Ubicación del agente (retraso).**
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_19.png)
    

Configurar el marcado de espacio para los cajeros

1.  Como tenemos 4 cajeros, usaremos [un nodo rectangular](https://anylogic.help/markup/node-r.html) para dibujar esta área de servicio.
2.  Dibuje otro nodo rectangular como se muestra en la imagen siguiente. Asigne un nombre al nodo tellerPlaces y, en sus propiedades, cambie el control **Visible** a **no**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_10.png)
    
3.  Cree 4 atractores dentro del nodo para especificar cajeros de la misma manera que lo ha hecho antes.
4.  Verá que aparecen atractores en el nodo **tellerPlaces**con el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) desplazamiento par, pero mirando hacia la dirección incorrecta. Seleccione todos los atractores haciendo clic en cada uno mientras mantiene presionada la tecla Mayús y vaya a la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**. En la sección **Posición y tamaño**, cambie el parámetro **Orientación** a 180.0.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_20.png)
    
5.  Haga clic en el bloque **de cajeros** en el diagrama de flujo y vaya a su ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
6.  Seleccione el ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) parámetro **tellerPlaces** en la **ubicación principal (nodos)** haciendo clic en ![](https://anylogic.help/tutorials/bank-office/images/plus_btn.png).
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_24.png)
    

Puede ejecutar el modelo ahora y observar cómo algunos clientes reciben atención en el cajero automático y otros van a ver a los cajeros.

## Agregar objetos 3D

Es hora de agregar objetos 3D de cajero a nuestro modelo. Crearemos un nuevo tipo de recurso para animar a los cajeros.

Crear un nuevo tipo de recurso

1.  Abra la paleta Biblioteca de ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) **modelado de procesos**.
2.  Arrastre el elemento Tipo de ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) **recurso** al editor gráfico.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_13.png)
    
3.  El asistente **Nuevo agente** se abrirá en el paso **Creación de nuevo agente**. Entrar Cajero como **el nombre del** tipo de agente y deje seleccionada la **opción Crear el tipo de agente "desde cero".** Presione **Siguiente**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/new_resource_1.png)
    
4.  En el siguiente paso, seleccione 3D como tipo de animación y seleccione **Trabajador de oficina** en la lista de figuras **3D**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/new_resource_2.png)
    
5.  Haga clic en **Finalizar**. El nuevo ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Cajero Se abrirá el diagrama. Puede encontrar la figura 3D del **trabajador de Office** en el origen del eje. Vuelva a la opción ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama.

Configurar el diagrama de flujo para usar el nuevo tipo de recurso

1.  En el ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) Principal diagrama, seleccione los **cajeros** de bloques en el editor gráfico.
2.  En sus propiedades, especifique ![](https://anylogic.help/anylogic/ui/images/Agent_icon.gif) **Teller** como la **nueva unidad de recursos**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_16.png)
    
3.  Ejecute el modelo y observe a los clientes y cajeros.

Agregar mesas para los cajeros

1.  Abra la ![](https://anylogic.help/anylogic/ui/images/palettes/3d_objects.png) paleta **Objetos 3D**.
2.  Arrastre cuatro figuras de **Table** 3D de la sección **Office** de esta paleta a ![](https://anylogic.help/markup/images/RectangleNode_obj.gif) **tellerPlaces** en el editor gráfico. En el cuadro de diálogo **Objeto 3D de escala automática** que se muestra, haga clic en el botón **Sí**.
3.  Coloque las mesas sobre los atractores ya que los atractores son los lugares donde se encuentran los cajeros.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_21.png)
    
4.  Puedes ver que su orientación es incorrecta. Seleccione todas las tablas haciendo clic en ellas mientras mantiene presionada la tecla Mayús y vaya a la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) vista **Propiedades**.
5.  En la sección **Posición**, cambie el parámetro **Rotación** a \-90.0 Grados.
6.  Si es necesario, reorganice los ocho atractores y las cuatro mesas para que estén razonablemente alineados.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase3_23.png)
    

Ahora puede ejecutar el modelo y observar en 3D cómo algunos clientes van al cajero automático y otros obtienen servicio en las mesas de los cajeros.

![](https://anylogic.help/tutorials/bank-office/images/phase3_25.png)

---

[Fuente](https://anylogic.help/tutorials/bank-office/3-adding-tellers.html)