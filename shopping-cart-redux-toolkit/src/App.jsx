//Components
import CartContainer from "./components/cart/CartContainer"
import NavBar from "./components/navbar/NavBar"
import Modal from "./components/Modal"

//Redux
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//Reducers
import { calculateTotals, getCartItems } from "./features/cart/cartSlice"


const App = () => {
  //Obtiene acceso a los items del cart
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  //Obtiene los items del backend
  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  useEffect(() => {
    // Recalcula totales cada vez que cambia cartItems
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  if (isLoading) {
    return <h4>Loading</h4>
  }

  return (
    <>
      {isOpen && <Modal />}

      <NavBar />
      <CartContainer />
    </>
  )
}

export default App
