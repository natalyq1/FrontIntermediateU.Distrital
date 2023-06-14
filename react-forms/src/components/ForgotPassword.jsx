import { useContext } from "react";
import { useFormik } from "formik";
import SignContext from "../context/SignContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {

  const { setStep } = useContext(SignContext)

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    //simula el envio de datos a un backend
    await new Promise((resolve) => setTimeout(resolve, 2000))

    //tiene acceso a los datos del formulario
    console.log('%cError!', 'color:YellowGreen', `Password sent to ${values.email}!`
    );
    actions.resetForm()
  }

  //Limpia el formulario
  

  //Hook useFormik que permite manejar la info. del form
  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit
  })

  return (
    <main>
      <h3>Forgot password?</h3>
      <div className="card">
        <form
          onSubmit={handleSubmit}
          autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              className={errors.email ? "error-forgot-input" : ''}
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>)}
          </fieldset>
          {isSubmitting && <small>Sending...</small>}
          <button
            disabled={isSubmitting}
            type="submit">Remember me!</button>
        </form>
      </div>
      <p>
        Already have an account? <span onClick={() => {
          setStep('signin')
        }}>Sign in!</span>
      </p>
    </main>
  );
};

export default ForgotPassword;