"use strict";(self.webpackChunkmodelos_de_simulacion=self.webpackChunkmodelos_de_simulacion||[]).push([[755],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>b});var i=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,i,n=function(a,e){if(null==a)return{};var t,i,n={},r=Object.keys(a);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var d=i.createContext({}),o=function(a){var e=i.useContext(d),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},u=function(a){var e=o(a.components);return i.createElement(d.Provider,{value:e},a.children)},p="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,d=a.parentName,u=s(a,["components","mdxType","originalType","parentName"]),p=o(t),m=n,b=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return t?i.createElement(b,l(l({ref:e},u),{},{components:t})):i.createElement(b,l({ref:e},u))}));function b(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=a,s[p]="string"==typeof a?a:n,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2841:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=t(7462),n=(t(7294),t(3905));const r={marp:!0,theme:"default",size:969,paginate:!0,math:!0},l="02.03 - Aplicaci\xf3n para probar bondad de ajuste",s={unversionedId:"Variables Aleatorias/02.03_py_app_bondad",id:"Variables Aleatorias/02.03_py_app_bondad",title:"02.03 - Aplicaci\xf3n para probar bondad de ajuste",description:"Modelos de Simualci\xf3n",source:"@site/docs/02 - Variables Aleatorias/02.03_py_app_bondad.md",sourceDirName:"02 - Variables Aleatorias",slug:"/Variables Aleatorias/02.03_py_app_bondad",permalink:"/modelos-de-simulacion/docs/Variables Aleatorias/02.03_py_app_bondad",draft:!1,editUrl:"https://github.com/abelranni/modelos-de-simulacion/tree/main/docs/02 - Variables Aleatorias/02.03_py_app_bondad.md",tags:[],version:"current",frontMatter:{marp:!0,theme:"default",size:969,paginate:!0,math:!0},sidebar:"tutorialSidebar",previous:{title:"02.02 - Pruebas de bondad de ajuste",permalink:"/modelos-de-simulacion/docs/Variables Aleatorias/02.02_pruebas_de_bondad"},next:{title:"02.04 - Distribuciones de probabilidad",permalink:"/modelos-de-simulacion/docs/Variables Aleatorias/02.04_distribuciones"}},d={},o=[{value:"Modelos de Simualci\xf3n",id:"modelos-de-simualci\xf3n",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Bibliotecas a utilizar",id:"bibliotecas-a-utilizar",level:2},{value:"Interfaz gr\xe1fica",id:"interfaz-gr\xe1fica",level:2},{value:"Funciones de generaci\xf3n de variables aleatorias",id:"funciones-de-generaci\xf3n-de-variables-aleatorias",level:2},{value:"Pruebas de bondad de ajuste",id:"pruebas-de-bondad-de-ajuste",level:2},{value:"Visualizaci\xf3n de resultados",id:"visualizaci\xf3n-de-resultados",level:2},{value:"Estructura general del programa",id:"estructura-general-del-programa",level:2},{value:"Definici\xf3n de funciones",id:"definici\xf3n-de-funciones",level:2},{value:"Funci\xf3n plot_distribution",id:"funci\xf3n-plot_distribution",level:3},{value:"Paso de par\xe1metros",id:"paso-de-par\xe1metros",level:3},{value:"Funci\xf3n ajustar_distribucion",id:"funci\xf3n-ajustar_distribucion",level:3},{value:"Funcion ajustar_distribucion",id:"funcion-ajustar_distribucion",level:3},{value:"Creaci\xf3n de la interfaz gr\xe1fica de usuario (GUI)",id:"creaci\xf3n-de-la-interfaz-gr\xe1fica-de-usuario-gui",level:3},{value:"Pruebas implementadas de bondad de ajuste",id:"pruebas-implementadas-de-bondad-de-ajuste",level:2},{value:"Prueba de Kolmogorov-Smirnov",id:"prueba-de-kolmogorov-smirnov",level:3},{value:"Prueba Chi-cuadrado",id:"prueba-chi-cuadrado",level:3},{value:"Resultados",id:"resultados",level:2}],u={toc:o},p="wrapper";function c(a){let{components:e,...t}=a;return(0,n.kt)(p,(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0203---aplicaci\xf3n-para-probar-bondad-de-ajuste"},"02.03 - Aplicaci\xf3n para probar bondad de ajuste"),(0,n.kt)("h2",{id:"modelos-de-simualci\xf3n"},"Modelos de Simualci\xf3n"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crear una aplicaci\xf3n que permita ajustar una distribuci\xf3n te\xf3rica a los datos de una muestra y realizar pruebas de bondad de ajuste."),(0,n.kt)("li",{parentName:"ul"},"La aplicaci\xf3n debe permitir cargar los datos de muestra desde un archivo CSV o mediante un cuadro de texto."),(0,n.kt)("li",{parentName:"ul"},"La aplicaci\xf3n debe permitir seleccionar la distribuci\xf3n te\xf3rica a ajustar (por ejemplo, normal, exponencial, uniforme, etc.).")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"bibliotecas-a-utilizar"},"Bibliotecas a utilizar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NumPy: para el manejo de arreglos num\xe9ricos y operaciones matem\xe1ticas."),(0,n.kt)("li",{parentName:"ul"},"SciPy: para trabajar con distribuciones de probabilidad y pruebas estad\xedsticas."),(0,n.kt)("li",{parentName:"ul"},"Matplotlib: para visualizar gr\xe1ficamente los datos y resultados."),(0,n.kt)("li",{parentName:"ul"},"Tkinter: para crear la interfaz gr\xe1fica.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"interfaz-gr\xe1fica"},"Interfaz gr\xe1fica"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Utilizar Tkinter para crear una ventana con campos de entrada para cargar los datos (por ejemplo, mediante un cuadro de texto o la carga de un archivo CSV)."),(0,n.kt)("li",{parentName:"ul"},"Agregar una lista desplegable o radio buttons para seleccionar la distribuci\xf3n te\xf3rica a ajustar (por ejemplo, normal, exponencial, uniforme, etc.)."),(0,n.kt)("li",{parentName:"ul"},"Incluir un bot\xf3n para realizar la prueba de bondad de ajuste y mostrar los resultados.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"funciones-de-generaci\xf3n-de-variables-aleatorias"},"Funciones de generaci\xf3n de variables aleatorias"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crear funciones que utilicen NumPy y SciPy para generar variables aleatorias seg\xfan la distribuci\xf3n seleccionada.")),(0,n.kt)("h2",{id:"pruebas-de-bondad-de-ajuste"},"Pruebas de bondad de ajuste"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Utilizar las funciones de SciPy para realizar pruebas de bondad de ajuste, como la prueba de Kolmogorov-Smirnov, la prueba de Anderson-Darling, o la prueba de Chi-cuadrado."),(0,n.kt)("li",{parentName:"ul"},"Mostrar los resultados de la prueba en la interfaz gr\xe1fica, indicando si se acepta o rechaza la hip\xf3tesis nula (es decir, si los datos se ajustan a la distribuci\xf3n te\xf3rica seleccionada).")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"visualizaci\xf3n-de-resultados"},"Visualizaci\xf3n de resultados"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Utilizar Matplotlib para crear gr\xe1ficos de los datos y la distribuci\xf3n te\xf3rica ajustada."),(0,n.kt)("li",{parentName:"ul"},"Mostrar los gr\xe1ficos en la interfaz gr\xe1fica.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"estructura-general-del-programa"},"Estructura general del programa"),(0,n.kt)("p",null,"La aplicaci\xf3n tiene tres partes principales:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Importaci\xf3n de bibliotecas y definici\xf3n de funciones"),(0,n.kt)("li",{parentName:"ol"},"Creaci\xf3n de la interfaz gr\xe1fica de usuario (GUI) con Tkinter"),(0,n.kt)("li",{parentName:"ol"},"Funciones de ajuste y gr\xe1ficos")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport scipy.stats as stats\nimport matplotlib.pyplot as plt\nimport tkinter as tk\nfrom tkinter import ttk\nfrom matplotlib.backends.backend_tkagg import FigureCanvasTkAgg\n\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"definici\xf3n-de-funciones"},"Definici\xf3n de funciones"),(0,n.kt)("h3",{id:"funci\xf3n-plot_distribution"},"Funci\xf3n plot_distribution"),(0,n.kt)("p",null,"Esta funci\xf3n crea un gr\xe1fico de la distribuci\xf3n ajustada junto con un histograma de los datos de muestra. La funci\xf3n plot_distribution toma tres argumentos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sample_data: Los datos de muestra"),(0,n.kt)("li",{parentName:"ul"},"dist: La distribuci\xf3n ajustada (un objeto de SciPy)"),(0,n.kt)("li",{parentName:"ul"},"params: Los par\xe1metros ajustados de la distribuci\xf3n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"La funci\xf3n realiza los siguientes pasos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crea una figura y un eje para el gr\xe1fico utilizando plt.subplots()."),(0,n.kt)("li",{parentName:"ul"},"Genera un histograma de los datos de muestra utilizando el m\xe9todo ax.hist()."),(0,n.kt)("li",{parentName:"ul"},"La opci\xf3n density=True normaliza el histograma de tal manera que el \xe1rea bajo las barras del histograma sume 1. Esto permite comparar el histograma con la funci\xf3n de densidad de probabilidad (pdf) de la distribuci\xf3n ajustada."),(0,n.kt)("li",{parentName:"ul"},"Crea un conjunto de puntos equiespaciados en el rango de los datos de muestra utilizando np.linspace(). Estos puntos se utilizar\xe1n para calcular y dibujar la pdf de la distribuci\xf3n ajustada."),(0,n.kt)("li",{parentName:"ul"},"Calcula la pdf de la distribuci\xf3n ajustada utilizando el m\xe9todo dist.pdf(). Los par\xe1metros ajustados de la distribuci\xf3n se pasan como argumentos utilizando el operador de desempaquetado *params.")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dibuja la pdf de la distribuci\xf3n ajustada en el gr\xe1fico utilizando el m\xe9todo ax.plot()."),(0,n.kt)("li",{parentName:"ul"},"A\xf1ade una leyenda al gr\xe1fico utilizando el m\xe9todo ax.legend()."),(0,n.kt)("li",{parentName:"ul"},"Muestra el gr\xe1fico en la ventana de Tkinter utilizando FigureCanvasTkAgg.")),(0,n.kt)("p",null,"La funci\xf3n plot_distribution crea un gr\xe1fico que compara el histograma de los datos de muestra con la funci\xf3n de densidad de probabilidad de la distribuci\xf3n ajustada. Esto permite visualizar la calidad del ajuste y evaluar si la distribuci\xf3n seleccionada es adecuada para los datos."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def plot_distribution(sample_data, dist, params):\n    # Crea una figura y un eje para el gr\xe1fico\n    fig, ax = plt.subplots(figsize=(6, 4))\n    \n    # Genera un histograma a partir de los datos de la muestra\n    # La opci\xf3n density=True hace que el histograma est\xe9 normalizado\n    ax.hist(sample_data, bins="auto", alpha=0.6, density=True, label="Datos")\n\n    # Genera puntos equiespaciados en el rango de los datos de la muestra\n    x = np.linspace(min(sample_data), max(sample_data), 1000)\n\n    # Calcula la funci\xf3n de densidad de probabilidad (pdf) de la distribuci\xf3n ajustada\n    pdf = dist.pdf(x, *params)\n\n    # Dibuja la pdf de la distribuci\xf3n ajustada en el gr\xe1fico\n    ax.plot(x, pdf, \'r-\', lw=2, label=f"{dist.name.capitalize()} ajustada")\n\n    # A\xf1ade una leyenda al gr\xe1fico\n    ax.legend()\n\n    # Muestra el gr\xe1fico en la ventana de Tkinter\n    canvas = FigureCanvasTkAgg(fig, master=frame_plot)\n    canvas.draw()\n    canvas.get_tk_widget().pack()\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"paso-de-par\xe1metros"},"Paso de par\xe1metros"),(0,n.kt)("p",null,"El operador * en Python se utiliza para desempaquetar los elementos de una secuencia (en este caso, una lista o una tupla) y pasarlos como argumentos posicionales a una funci\xf3n. En la l\xednea de c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pdf = dist.pdf(x, *params)\n")),(0,n.kt)("p",null,"La variable params es una lista o tupla que contiene los par\xe1metros estimados para la distribuci\xf3n seleccionada. Al usar el operador ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," antes de params, se desempaquetan los elementos de params y se pasan como argumentos individuales a la funci\xf3n pdf() de la distribuci\xf3n."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Por ejemplo, supongamos que estamos ajustando una distribuci\xf3n normal a los datos de muestra. La funci\xf3n pdf() de la distribuci\xf3n normal requiere dos argumentos: la media (loc) y la desviaci\xf3n est\xe1ndar (scale). Si params es una lista que contiene la media y la desviaci\xf3n est\xe1ndar estimadas, como ","[mu, sigma]",", al usar ",(0,n.kt)("inlineCode",{parentName:"p"},"*params"),", estamos pasando efectivamente mu y sigma como argumentos individuales a pdf(). Ser\xeda equivalente a escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pdf = dist.pdf(x, mu, sigma)\n")),(0,n.kt)("p",null,"La ventaja de usar ",(0,n.kt)("inlineCode",{parentName:"p"},"*params")," es que permite tratar con distribuciones que tienen diferentes n\xfameros de par\xe1metros de manera gen\xe9rica, sin tener que adaptar el c\xf3digo espec\xedficamente para cada distribuci\xf3n. El desempaquetado de argumentos con el operador ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," hace que el c\xf3digo sea m\xe1s flexible y f\xe1cil de mantener."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"funci\xf3n-ajustar_distribucion"},"Funci\xf3n ajustar_distribucion"),(0,n.kt)("p",null,"Esta funci\xf3n ajusta la distribuci\xf3n seleccionada a los datos de muestra y realiza pruebas de bondad de ajuste."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def ajustar_distribucion():\n    # Convierte los datos de la muestra a un array de NumPy\n    sample_data = np.array(data_entry.get().split(\',\'), dtype=float)\n\n    # Obtiene la distribuci\xf3n seleccionada por el usuario\n    dist_name = selected_dist.get()\n\n    # Mapea el nombre de la distribuci\xf3n seleccionada al nombre aceptado por la funci\xf3n kstest\n    dist_map = {"normal": "norm", "exponencial": "expon", "uniforme": "uniform"}\n    ks_dist_name = dist_map[dist_name]\n\n    # Obtiene el objeto de la distribuci\xf3n de SciPy correspondiente al nombre seleccionado\n    if dist_name == "normal":\n        dist = stats.norm\n    elif dist_name == "exponencial":\n        dist = stats.expon\n    elif dist_name == "uniforme":\n        dist = stats.uniform\n')),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\n    # Ajusta la distribuci\xf3n a los datos de la muestra\n    params = dist.fit(sample_data)\n\n    # Llama a la funci\xf3n plot_distribution para mostrar el gr\xe1fico de la distribuci\xf3n ajustada\n    plot_distribution(sample_data, dist, params)\n\n    # Prueba de Kolmogorov-Smirnov\n    D, ks_p_value = stats.kstest(sample_data, ks_dist_name, args=params)\n\n    # Prueba Chi-cuadrado\n    hist, bin_edges = np.histogram(sample_data, bins="auto", density=True)\n    bin_width = bin_edges[1] - bin_edges[0]\n    bin_centers = bin_edges[:-1] + bin_width / 2\n    expected_values = dist.pdf(bin_centers, *params) * bin_width * len(sample_data)\n    observed_values = hist * len(sample_data)\n\n    # Normaliza las frecuencias observadas y esperadas\n    observed_values_normalized = observed_values / np.sum(observed_values)\n    expected_values_normalized = expected_values / np.sum(expected_values)\n\n    chi2, chi2_p_value = stats.chisquare(observed_values_normalized, expected_values_normalized)\n\n')),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\n    # Muestra los resultados de las pruebas de bondad de ajuste\n    ks_result_text.set(f"KS: D = {D:.4f}, p-valor = {ks_p_value:.4f}")\n    chi2_result_text.set(f"Chi2: Estad\xedstico = {chi2:.4f}, p-valor = {chi2_p_value:.4f}")\n\n    # Eval\xfaa si se acepta o rechaza la hip\xf3tesis nula para cada prueba\n    alpha = 0.05\n    if ks_p_value > alpha:\n        ks_hypothesis_text.set("Hip\xf3tesis nula aceptada")\n    else:\n        ks_hypothesis_text.set("Hip\xf3tesis nula rechazada")\n\n    if chi2_p_value > alpha:\n        chi2_hypothesis_text.set("Hip\xf3tesis nula aceptada")\n    else:\n        chi2_hypothesis_text.set("Hip\xf3tesis nula rechazada")\n\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"funcion-ajustar_distribucion"},"Funcion ajustar_distribucion"),(0,n.kt)("p",null,"La funci\xf3n ajustar_distribucion realiza las siguientes acciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Convierte los datos de entrada en una lista de n\xfameros (sample_data)."),(0,n.kt)("li",{parentName:"ul"},"Obtiene el nombre de la distribuci\xf3n seleccionada en la GUI (dist_name)."),(0,n.kt)("li",{parentName:"ul"},"Mapea los nombres de las distribuciones de la GUI a los nombres aceptados por la funci\xf3n kstest de SciPy y asigna el resultado a ks_dist_name."),(0,n.kt)("li",{parentName:"ul"},"Selecciona la distribuci\xf3n de SciPy correspondiente al nombre seleccionado en la GUI y la asigna a dist."),(0,n.kt)("li",{parentName:"ul"},"Ajusta los par\xe1metros de la distribuci\xf3n a los datos de muestra utilizando el m\xe9todo dist.fit() y guarda los par\xe1metros ajustados en params.")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Llama a la funci\xf3n plot_distribution para graficar los datos y la distribuci\xf3n ajustada.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Realiza la prueba de bondad de ajuste de Kolmogorov-Smirnov utilizando stats.kstest(). Esta prueba compara la funci\xf3n de distribuci\xf3n acumulativa emp\xedrica de los datos de muestra con la funci\xf3n de distribuci\xf3n acumulativa te\xf3rica de la distribuci\xf3n ajustada.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Guarda el estad\xedstico de prueba ks_d_value y el p-valor en ks_p_value."))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Realiza la prueba de bondad de ajuste Chi-cuadrado:"),(0,n.kt)("p",{parentName:"li"},"  a. Crea un histograma de los datos de muestra utilizando np.histogram(), con la opci\xf3n density=True para normalizar el histograma."),(0,n.kt)("p",{parentName:"li"},"  b. Calcula los valores esperados de la distribuci\xf3n ajustada en los centros de las barras del histograma utilizando dist.pdf(). Multiplica los valores por el ancho de las barras y la cantidad de datos para obtener las frecuencias esperadas."),(0,n.kt)("p",{parentName:"li"},"  c. Convierte las frecuencias observadas y esperadas a n\xfameros enteros."),(0,n.kt)("p",{parentName:"li"},"  d. Normaliza las frecuencias observadas y esperadas dividiendo cada una por su suma total."),(0,n.kt)("p",{parentName:"li"},"  e. Aplica la prueba Chi-cuadrado utilizando stats.chisquare() y guarda el estad\xedstico de prueba chi2 y el p-valor en chi2_p_value."))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Muestra los resultados de las pruebas en la GUI utilizando las variables ks_result y chi2_result.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Eval\xfaa si la hip\xf3tesis nula se acepta o se rechaza seg\xfan los p-valores. Si el p-valor es mayor que el nivel de significancia alpha (por ejemplo, 0.05), se acepta la hip\xf3tesis nula, lo que indica que la distribuci\xf3n ajustada es adecuada para los datos. Si el p-valor es menor que alpha, se rechaza la hip\xf3tesis nula, lo que indica que la distribuci\xf3n ajustada no es adecuada para los datos. Muestra los resultados en la GUI utilizando las variables ks_result_text y chi2_result_text."))),(0,n.kt)("p",null,"En resumen la funci\xf3n ajustar_distribucion ajusta una distribuci\xf3n te\xf3rica a los datos de muestra, grafica los resultados y realiza pruebas de bondad de ajuste para evaluar la calidad del ajuste."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"creaci\xf3n-de-la-interfaz-gr\xe1fica-de-usuario-gui"},"Creaci\xf3n de la interfaz gr\xe1fica de usuario (GUI)"),(0,n.kt)("p",null,"Se crea una ventana de Tkinter y se a\xf1aden elementos de entrada y salida."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'window = tk.Tk()\nwindow.title("Ajuste de distribuciones")\nwindow.geometry("800x600")\n\n# ... (c\xf3digo de la GUI)\n\nwindow.mainloop()\n\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pruebas-implementadas-de-bondad-de-ajuste"},"Pruebas implementadas de bondad de ajuste"),(0,n.kt)("h3",{id:"prueba-de-kolmogorov-smirnov"},"Prueba de Kolmogorov-Smirnov"),(0,n.kt)("p",null,"Esta prueba compara la funci\xf3n de distribuci\xf3n acumulativa emp\xedrica de los datos de muestra con la funci\xf3n de distribuci\xf3n acumulativa te\xf3rica de la distribuci\xf3n ajustada."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"D, ks_p_value = stats.kstest(sample_data, ks_dist_name, args=params)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"prueba-chi-cuadrado"},"Prueba Chi-cuadrado"),(0,n.kt)("p",null,"Esta prueba compara las frecuencias observadas en un histograma de los datos de muestra con las frecuencias esperadas de la distribuci\xf3n ajustada."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"chi2, chi2_p_value = stats.chisquare(observed_values_normalized, expected_values_normalized)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"resultados"},"Resultados"),(0,n.kt)("p",null,"La aplicaci\xf3n muestra los resultados de las pruebas de bondad de ajuste y acepta o rechaza la hip\xf3tesis nula seg\xfan los p-valores de las pruebas."))}c.isMDXComponent=!0}}]);