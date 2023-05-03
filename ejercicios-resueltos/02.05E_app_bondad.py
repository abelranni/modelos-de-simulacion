import tkinter as tk
from tkinter import filedialog
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from tkinter import ttk

def on_closing():
    window.destroy()
    window.quit()

def clear_output():
    ks_hypothesis_text.delete("1.0", tk.END)
    ks_hypothesis_text.insert(tk.END, "")
    chi2_hypothesis_text.delete("1.0", tk.END)
    chi2_hypothesis_text.insert(tk.END, "")
    ks_result_text.delete("1.0", tk.END)
    chi2_result_text.delete("1.0", tk.END)
    ks_result_text.insert(tk.END, "")
    chi2_result_text.insert(tk.END, "")
    text_result.delete(1.0, tk.END)
    # entry_data.delete(1.0, tk.END)

def cargar_datos():
    file_path = filedialog.askopenfilename(filetypes=[("CSV files", "*.csv")])
    if file_path:
        data = pd.read_csv(file_path)
        sample_data = data.iloc[:, 0].values
        entry_data.delete(1.0, tk.END)
        entry_data.insert(tk.END, ', '.join(map(str, sample_data)))


def ajustar_distribucion():
    text_result.delete(1.0, tk.END)
    data_str = entry_data.get(1.0, tk.END).strip()
    if not data_str:
        return

    # Limpia la salida anterior
    clear_output()

    # Convierte los datos de la muestra a un array de NumPy
    sample_data = np.array(list(map(float, data_str.split(','))))

    # Obtiene la distribución seleccionada por el usuario
    dist_name = selected_dist.get()

    # Mapea el nombre de la distribución seleccionada al nombre aceptado por la función kstest
    dist_map = {"normal": "norm",
                "exponencial": "expon", "uniforme": "uniform"}
    ks_dist_name = dist_map[dist_name]

    # Obtiene el objeto de la distribución de SciPy correspondiente al nombre seleccionado
    if dist_name == "normal":
        dist = stats.norm
    elif dist_name == "exponencial":
        dist = stats.expon
    elif dist_name == "uniforme":
        dist = stats.uniform

    # Ajusta la distribución a los datos de la muestra
    params = dist.fit(sample_data)

    # Prueba de Kolmogorov-Smirnov
    ks_d_value, ks_p_value = stats.kstest(sample_data, ks_dist_name, args=params)

    # Prueba Chi-cuadrado
    hist, bin_edges = np.histogram(sample_data, bins="auto", density=True)
    bin_width = bin_edges[1] - bin_edges[0]
    bin_centers = bin_edges[:-1] + bin_width / 2
    expected_values = dist.pdf(bin_centers, *params) * bin_width * len(sample_data)
    observed_values = hist * len(sample_data)

    # Normaliza las frecuencias observadas y esperadas
    observed_values_normalized = observed_values / np.sum(observed_values)
    expected_values_normalized = expected_values / np.sum(expected_values)

    chi2, chi2_p_value = stats.chisquare(observed_values_normalized, expected_values_normalized)

    # chi2, chi2_p_value = stats.chisquare(observed_values, expected_values)

    # Muestra los resultados de las pruebas de bondad de ajuste
    text_result.insert(tk.END, f"Parametros Estimados: {params}\n")
    text_result.insert(tk.END, f"Distribución ajustada: {dist_name}\n")
    text_result.insert(tk.END, f"Parámetros: {params}\n")
    text_result.insert(tk.END, f"D (Kolmogorov-Smirnov): {ks_d_value}\n")
    text_result.insert(tk.END, f"p-valor (Kolmogorov-Smirnov): {ks_p_value}\n")
    text_result.insert(tk.END, f"Chi-cuadrado: {chi2}\n")
    text_result.insert(tk.END, f"p-valor (Chi-cuadrado): {chi2_p_value}\n")

    if ks_p_value > 0.05 and chi2_p_value > 0.05:
        text_result.insert(
            tk.END, "Aceptamos la hipótesis nula: Los datos se ajustan a la distribución seleccionada.")
    else:
        text_result.insert(
            tk.END, "Rechazamos la hipótesis nula: Los datos no se ajustan a la distribución seleccionada.")

    # Muestra los resultados de las pruebas de bondad de ajuste
    ks_result_text.insert(
        tk.END, f"KS: D = {ks_d_value:.4f}, p-valor = {ks_p_value:.4f}")
    chi2_result_text.insert(
        tk.END, f"Chi2: Estadístico = {chi2:.4f}, p-valor = {chi2_p_value:.4f}")

    # Evalúa si se acepta o rechaza la hipótesis nula para cada prueba
    alpha = 0.05
    if ks_p_value > alpha:
        ks_hypothesis_text.insert(tk.END, "Hipótesis nula aceptada")
    else:
        ks_hypothesis_text.insert(tk.END, "Hipótesis nula rechazada")

    if chi2_p_value > alpha:
        chi2_hypothesis_text.insert(tk.END, "Hipótesis nula aceptada")
    else:
        chi2_hypothesis_text.insert(tk.END, "Hipótesis nula rechazada")

    # Llama a la función plot_distribution para mostrar el gráfico de la distribución ajustada
    plot_distribution(sample_data, dist, params, fig, ax)
    canvas.draw()
    canvas.get_tk_widget().pack()


def plot_distribution(sample_data, dist, params, fig, ax):
    # Limpia el eje antes de trazar nuevos datos
    ax.clear()
    # # Crea una figura y un eje para el gráfico
    # fig, ax = plt.subplots(figsize=(6, 4))

    # Genera un histograma a partir de los datos de la muestra
    # La opción density=True hace que el histograma esté normalizado
    ax.hist(sample_data, bins="auto", alpha=0.6, density=True, label="Datos")

    # Genera puntos equiespaciados en el rango de los datos de la muestra
    x = np.linspace(min(sample_data), max(sample_data), 1000)

    # Calcula la función de densidad de probabilidad (pdf) de la distribución ajustada
    pdf = dist.pdf(x, *params)

    # Dibuja la pdf de la distribución ajustada en el gráfico
    ax.plot(x, pdf, 'r-', lw=2, label=f"{dist.name.capitalize()} ajustada")

    # Añade una leyenda al gráfico
    ax.legend()

    # # Muestra el gráfico en la ventana de Tkinter
    # canvas = FigureCanvasTkAgg(fig, master=frame_plot)
    # canvas.draw()
    # canvas.get_tk_widget().pack()


window = tk.Tk()
window.title("Prueba de bondad de ajuste")

# Crea un Frame para contener para cada widget
frame_data = ttk.Frame(window)
frame_data.grid(row=0, column=0, padx=10, pady=10)

frame_result = ttk.Frame(window)
frame_result.grid(row=1, column=0, rowspan=2, padx=10, pady=10)

frame_dist = ttk.Frame(window)
frame_dist.grid(row=3, column=0, padx=10, pady=10)

frame_plot = ttk.Frame(window)
frame_plot.grid(row=0, rowspan=3, column=1, padx=10, pady=10)

frame_result2 = ttk.Frame(window)
frame_result2.grid(row=3, column=1, padx=10, pady=10)

entry_data = tk.Text(frame_data, height=4, width=40)
entry_data.grid(row=0, column=0)
button_load = ttk.Button(frame_data, text="Cargar datos", command=cargar_datos, width=40)
button_load.grid(row=1, column=0)

label_result = ttk.Label(frame_result, text="Resultados:")
label_result.grid(row=0, column=0, sticky=tk.W)
text_result = tk.Text(frame_result, height=10, width=40)
text_result.grid(row=1, column=0)

label_dist = ttk.Label(frame_dist, text="Selecciona una distribución:")
label_dist.grid(row=0, column=0, sticky=tk.W)
selected_dist = tk.StringVar()
selected_dist.set("normal")
radiobutton_normal = ttk.Radiobutton(
    frame_dist, text="Normal", variable=selected_dist, value="normal")
radiobutton_normal.grid(row=1, column=0, sticky=tk.W)
radiobutton_exponential = ttk.Radiobutton(
    frame_dist, text="Exponencial", variable=selected_dist, value="exponencial")
radiobutton_exponential.grid(row=2, column=0, sticky=tk.W)
radiobutton_uniform = ttk.Radiobutton(
    frame_dist, text="Uniforme", variable=selected_dist, value="uniforme")
radiobutton_uniform.grid(row=3, column=0, sticky=tk.W)

button_ajustar = ttk.Button(
    window, text="Ajustar distribución", command=ajustar_distribucion)
button_ajustar.grid(row=4, column=0, padx=10, pady=10)


ks_result_text = tk.Text(frame_result2, height=2, width=40)
ks_result_text.grid(row=0, column=0)
ks_hypothesis_text = tk.Text(frame_result2, height=2, width=40)
ks_hypothesis_text.grid(row=1, column=0)

chi2_result_text = tk.Text(frame_result2, height=2, width=40)
chi2_result_text.grid(row=2, column=0)
chi2_hypothesis_text = tk.Text(frame_result2, height=2, width=40)
chi2_hypothesis_text.grid(row=3, column=0)


# Crea la figura y el eje
# fig, ax = plt.subplots()
fig, ax = plt.subplots(figsize=(6, 4))

# Crea el objeto canvas
canvas = FigureCanvasTkAgg(fig, master=frame_plot)

# style = ttk.Style()
# style.theme_use("default") //"default", "classic", "clam", "alt", "vista".

window.protocol("WM_DELETE_WINDOW", on_closing)
window.mainloop()
