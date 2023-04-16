// Obtiene referencia al elemento
const area = document.getElementById("area");

// Obtiene los hijos del elemento
const hijos = area.children;
console.log(hijos);

// Recorre la lista de hijos
for (const hijo of hijos) {
  console.log(hijo.textContent);
}
console.log(`La cantidad de hijos del div es ${hijos.length}`);

// Obtiene el primer hijo
const primerHijo = area.firstElementChild;
console.log(primerHijo);

// Obtiene el último hijo
const ultimoHijo = area.lastElementChild;
console.log(ultimoHijo);//span

// Obtiene un hijo dada la posición
const algunHijo = hijos[1];
console.log(algunHijo);
console.log(area.children[2]); //<span>Texto</span>

// Obtiene la referencia a los elementos
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

console.log(titulo);
console.log(parrafo);

// Obtiene el padre de un elemento
const padre = titulo.parentElement;
console.log(padre);

// Obtiene el ultimo hijo del padre
console.log(padre.lastElementChild);

// Chaining invocación de propiedades
console.log(parrafo.parentElement.lastElementChild);

// Obtiene el articulo
const articulo = document.querySelector("article");
console.log(articulo);

// Obtiene el padre del padre (chaining)
const abuelo = articulo.parentElement.parentElement;
console.log(abuelo);



////////////create, add, delete elements of the DOM tree

const aside = document.querySelector("aside");

// Crear un elemento DOM
// <article></article>
const article = document.createElement("article");
const article2 = document.createElement("article");

// <article>Nuevo artículo</article>
article.textContent = "Nuevo artículo";
article2.textContent = "Otro artículo";

// Agrega el nuevo elemento a un elemento elemento existente
aside.appendChild(article);
aside.appendChild(article2);

// Agrega código HTML plano
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `<h1>Titulo</h1><p>parrafo</p><span>texto</span>`;
aside.appendChild(nuevoElemento);

// Crea 2 elementos
const h2 = document.createElement("h2");
h2.textContent = "Soy un H2";
const h3 = document.createElement("h3");
h3.textContent = "Soy un H3";

// Agrega varios elementos a la vez
aside.append(h2, h3);

// Crea 2 elementos
const titulo1 = document.createElement("h2");
titulo1.textContent = "Soy el titulo 1";
const titulo2 = document.createElement("h3");
titulo2.textContent = "Soy el titulo 2";

// Arreglo de elementos
const titulos = [titulo1, titulo2];

// Desestructuración de elementos de un arreglo
aside.append(...titulos);

// Eliminar un elemento
const primerH2 = document.querySelector("h2");
primerH2.remove();