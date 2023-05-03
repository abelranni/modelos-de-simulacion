---
marp: true
theme: default
size: 16:9
paginate: true
---

# Oficina Bancaria Fase IV

## Modelos de Simulación

---

## Fase 4. Recopilación de estadísticas

-   [Collecting utilization statistics](https://anylogic.help/tutorials/bank-office/4-collecting-utilization-statistics.html#collecting-utilization-statistics)
-   [Collecting customer time statistics](https://anylogic.help/tutorials/bank-office/4-collecting-utilization-statistics.html#collecting-customer-time-statistics)

Con AnyLogic, puede recopilar estadísticas complicadas siempre que las necesite. Los bloques de la Biblioteca de modelado de procesos ya son capaces de recopilar las estadísticas básicas. Podemos ver las estadísticas recopiladas para los bloques de diagramas de flujo con gráficos.

Queremos observar cómo la utilización media de ATM y la longitud media de la cola cambian con el tiempo.

## Recopilación de estadísticas de utilización

Agregar un gráfico de barras para indicar la utilización media de ATM

1.  Abra la ![](https://anylogic.help/anylogic/analysis/images/Histogram_edit.gif) paleta **Análisis**. Esta paleta contiene gráficos y objetos de datos utilizados para recopilar datos y realizar diversos análisis estadísticos sobre ellos. Arrastre el elemento **Gráfico de barras** desde la galería de símbolos hasta el ![](https://anylogic.help/anylogic/analysis/images/BarChart_edit.gif) editor gráfico.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_1.png)
    
2.  Vaya a la sección **Datos** de las propiedades del gráfico. Haga clic en el botón Agregar elemento de datos para agregar el ![](https://anylogic.help/tutorials/bank-office/images/plus.png) **elemento de datos** que se mostrará en este gráfico.
3.  **Establezca el título** del elemento de datos: Utilización de cajeros automáticos.
4.  Tipo ATM.statsUtilization.mean() como el **valor** del elemento de datos. CAJERO es el nombre del ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/delay16.png) bloque **Delay** que hemos creado. Cada ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/delay16.png) bloque **de retardo** tiene un statsUtilización Conjunto de datos que recopila estadísticas sobre la utilización del objeto. El mean() es la función que devuelve el valor medio medido. Puede utilizar otras funciones para obtener valores estadísticos, como min() y max().
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_2.png)
    
5.  Cambie la posición de la leyenda del gráfico en la sección **Propiedades** de leyenda.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_3.png)
    
6.  Ahora cambie el tamaño del gráfico como se muestra en la siguiente figura:
    
    ![](https://anylogic.help/tutorials/bank-office/images/1stPlot.png)
    

Agregar un gráfico de barras para indicar la longitud media de la cola

1.  Agregue otro gráfico de barras de la misma manera. Cambie su tamaño para que se parezca al de la figura siguiente.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_4.png)
    
2.  Abra la sección **Apariencia** de la vista **Propiedades** y elija la última opción de la propiedad **Dirección de** barras para hacer que las barras crezcan hacia la ![](https://anylogic.help/anylogic/ui/images/views/Properties_view.gif) izquierda. Cambie la posición de la leyenda del gráfico en la sección **Leyenda** (como se muestra en la figura siguiente).
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_5.png)
    
3.  Haga clic en el botón **Agregar elemento de** ![](https://anylogic.help/tutorials/bank-office/images/plus.png) datos.
4.  Establezca el **título**: Longitud de la cola y **Valor**: queue.statsSize.mean(). Aquí statsTamaño es el conjunto de datos de tipo EstadísticasContinuo que recopila las estadísticas sobre el tamaño de la **cola**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_6.png)
    

Ejecute el modelo y observe la utilización del cajero automático y la longitud media de la cola con los nuevos gráficos creados.

![](https://anylogic.help/tutorials/bank-office/images/run4.png)

## Recopilación de estadísticas de tiempo del cliente

Queremos saber cuánto tiempo pasa el cliente en un banco. Recopilaremos estadísticas de tiempo utilizando los bloques ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureStart16.png) de **la Biblioteca de modelado de procesos** **AnyLogic** ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) TimeMeasureStart y ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureEnd16.png) **TimeMeasureEnd**. Para medir el tiempo que los agentes pasan en una sección particular del diagrama de flujo, tenemos que colocar estos bloques en el punto de entrada y en el punto de salida de esta sección. ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureStart16.png) El bloque TimeMeasureStart almacena el tiempo que un agente pasó a través de él, mientras que el bloque **TimeMeasureEnd** mide el tiempo que ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureEnd16.png) un agente pasó dentro de la sección especificada del diagrama de flujo después de pasar el bloque **TimeMeasureStart** correspondiente.![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureStart16.png)

Agregue bloques de medición de tiempo al diagrama de flujo.

1.  Ajuste el diagrama de flujo para dejar espacio para un nuevo bloque entre **source** y **selectOutput**.
2.  **Abra la Biblioteca de modelado de procesos** en la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta** y agregue el bloque **TimeMeasureStart** en el ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureStart16.png) espacio resultante. Asegúrese de que los puertos del bloque estén conectados correctamente.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_7.png)
    
3.  Mueva el **fregadero** del bloque hacia la derecha y reorganice la conexión entre el **servicio** y el **sumidero** para dejar espacio para un bloque después del conector.
4.  Arrastre el ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureEnd16.png) bloque **TimeMeasureEnd** de la **Biblioteca de modelado de procesos** de la ![](https://anylogic.help/anylogic/ui/images/views/Palette_view.gif) ![](https://anylogic.help/anylogic/ui/images/palettes/processModelingLibrary.png) vista **Paleta** al editor gráfico y colóquelo antes del bloque **receptor**. Asigne un nombre al bloque tiempoTotal.
5.  Asegúrese de que los puertos del bloque **timeTotal** estén conectados correctamente tanto a los bloques ATM como a **los** bloques de **servicio**.
6.  Cada ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureEnd16.png) bloque TimeMeasureEnd debe tener al menos un ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureStart16.png) bloque **TimeMeasureStart** especificado en sus propiedades para calcular la distribución de tiempo para los agentes. Especifique nuestro bloque timeMeasureStart en su parámetro **TimeMeasureStart blocks**.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_9.png)
    

Añadir un histograma para indicar las estadísticas recopiladas

1.  Abra la ![](https://anylogic.help/anylogic/analysis/images/Histogram_edit.gif) paleta **Análisis**. Arrastre el elemento **Histograma** de la paleta al editor gráfico.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_10.png)
    
2.  Vaya a la sección **Datos** en las propiedades del histograma. Haga clic en el botón Agregar datos de ![](https://anylogic.help/tutorials/bank-office/images/plus.png) histograma para agregar el elemento de datos que se mostrará en este **histograma**.
3.  **Modifique el título** del elemento de datos: Tiempo en la distribución del sistema.
4.  Tipo timeTotal.distribution en el campo **Histograma**. tiempoTotal es el nombre del ![](https://anylogic.help/library-reference-guides/process-modeling-library/icons/timeMeasureEnd16.png) bloque **TimeMeasureEnd** que recopila la distribución del tiempo que los agentes pasan en el sistema.
    
    ![](https://anylogic.help/tutorials/bank-office/images/phase4_12.png)
    

Ejecute el modelo. Establezca el modo de tiempo virtual y observe la distribución del tiempo del cliente en el sistema.

![](https://anylogic.help/tutorials/bank-office/images/run_4_2.png)

---

[Fuente](https://anylogic.help/tutorials/bank-office/4-collecting-utilization-statistics.html)