//Components
import CartContainer from "./components/cart/CartContainer"
import NavBar from "./components/navbar/NavBar"
import Modal from "./components/Modal"

//Redux
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//Reducers
import { calculateTotals } from "./features/cart/cartSlice"


const App = () => {
  //Obtiene acceso a los items del cart
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    // Recalcula totales cada vez que cambia cartItems
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
    { isOpen && <Modal />}
      
      <NavBar />
      <CartContainer />
    </>
  )
}

export default App
