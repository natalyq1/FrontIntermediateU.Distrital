import ForgotPassword from "./components/ForgotPassword";
import { useState } from "react";
import SignUp from "./components/SignUp";
 import SignIn from "./components/SignIn";
import SignContext from "./context/SignContext";

function App() {
  const [step, setStep] = useState('signin')
  return (
    <SignContext.Provider value = {{step, setStep}} >
    <div className="container">
      {step === 'signin' && <SignIn /> }
      {step === 'signup' && <SignUp />}
      {step === 'forgot' && <ForgotPassword />}
     
    </div>
    </SignContext.Provider>
  );
}

export default App;