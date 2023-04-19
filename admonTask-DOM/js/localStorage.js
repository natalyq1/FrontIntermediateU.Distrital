console.log("Storage");

//verificar si tenemos el local storage
if (typeof Storage !== "undefined") {
  console.log("%cLocal Storage Soportado", "color:green");
} else {
  console.log("%cLocal Storage Soportado", "color:red");
}
//Obtiene los botones
const botonGuardar = document.querySelector("#botonGuardar");
const botonObtener = document.querySelector("#botonObtener");

botonGuardar.addEventListener("click", () => {
  // Guarda un valor en local Storage

  //si no existe un valor con el key, lo crea
  //si existe un valor con el key, lo modifica

  //parametro: key, value
  localStorage.setItem("Fecha", new Date());
});

botonObtener.addEventListener("click", () => {
    // obtiene un valor de local Storage
    const univ =localStorage.getItem("Fecha");
    if (univ) {
        alert(univ)
    } else {
        console.error('No hay info')
    }

    //falsy values => null, undefined, 0
    const cantidad = 20
    if (cantidad > 0) {
        console.log('Hay datos');
    } else {
        console.log('No hay datos');
    }
  });


  const botonGuardarObjeto = document.querySelector("#botonGuardarObjeto");
const botonObtenerObjeto = document.querySelector("#botonObtenerObjeto");

botonGuardarObjeto.addEventListener('click', () =>{
    const movieObject = {
        title: 'Star Wars',
        year: 1977,
        genres: ['action', 'sci-fi', 'futuristic']
    }
    //no se puede guaradar el objeto directamente
    //localStorage.setItem('movie',movieObject);

    //transforma a cadena de caracteres
    const cadena = JSON. stringify(movieObject)
    //console.log(movieObject);// {title: 'Star Wars', year: 1977, genres: Array(3)}
    //console.log(cadena); //{"title":"Star Wars","year":1977,"genres":["action","sci-fi","futuristic"]}

    //guarda la cadena JSON en localStorage
    localStorage.setItem('movie', cadena)
})

botonObtenerObjeto.addEventListener('click', () =>{
    //obtiene el item de localStorage con el Key requerido
    const cadena=  localStorage.getItem('movie')
    console.log(cadena); //{"title":"Star Wars","year":1977,"genres":["action","sci-fi","futuristic"]}

    //convierte un string en JSON object
    const movieJSON = JSON.parse(cadena)
    console.log(movieJSON); // {title: 'Star Wars', year: 1977, genres: Array(3)}
    console.log(`El año de la pelicula es ${movieJSON.year}`);//El año de la pelicula es 1977
})

  