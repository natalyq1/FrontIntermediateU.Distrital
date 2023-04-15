// Obtiene un elemento dado su id
const titulo = document.getElementById("titulo");
console.log(titulo);

// Obtiene elementos dado el tag
const liList = document.getElementsByTagName("li");
console.log(liList);

// Obtiene elementos dada una clase CSS
const msgList = document.getElementsByClassName("mensaje");
console.log(msgList);

// Obtiene varios elementos dado un selector
// Retorna una lista vacia si no encuentra elementos
const hijos = document.querySelectorAll("ul li");
console.log(hijos);

// Obtiene un elemento dado un selector
// Retorna null si no encuentra el elemento
const hijo = document.querySelector("ul li");
console.log(hijo);


// Obtiene el elemento
const link = document.getElementById("link");

// Modifica el texto del elemento
titulo.textContent = "Frontend Avanzado";

// Modifica el valor de un atributo de un elemento
link.href = "https://www.amazon.com";
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// Obtiene el valor de un atributo
const srcImg1 = img1.getAttribute("src");
console.log(srcImg1);

// Modifica el atributo de un elemento
img2.setAttribute("src", srcImg1);

// Obtiene el valor de un atributo
const srcImg3 = img1.getAttribute("src");
console.log(srcImg3);

// Modifica el atributo de un elemento
img2.setAttribute("src", 'hola');

// Obtiene la lista
const lista = document.getElementById("lista");
console.log(lista);

// Cambiar el estilo 
lista.style.color = "orange";

// CamelCase
lista.style.backgroundColor = "green";

// Obtiene el botón
const boton = document.getElementById("boton");

// Agrega una clase CSS al elemento
boton.classList.add("btn");
boton.classList.add("border");

// Elimina una clase CSS del elemento
boton.classList.remove("btn");