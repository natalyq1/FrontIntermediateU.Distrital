
const Boton2 = () => {
const clickHandler = (event) => {
    console.log('hicieron clic', event);
}

  return (
    <button onClick={clickHandler}>Cilc here</button>
  )
}

export default Boton2