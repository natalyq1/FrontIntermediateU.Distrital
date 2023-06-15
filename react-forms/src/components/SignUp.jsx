
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useContext } from "react";
import SignContext from "../context/SignContext";
import { signUpSchema } from "../schemas/signUpSchema";

//Inicializacion de valores del form
const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirm: '',
    framework: '',
    terms: false
}

const onSubmit = () => {
    console.log('Submitted');
}

const SignUp = () => {

    const { setStep } = useContext(SignContext)
    return (
        <main>
            <h3>Welcome, join us!</h3>
            <div className="card">
                <Formik initialValues={
                    initialValues}
                    validationSchema={signUpSchema}
                    onSubmit={onSubmit}
                >
                    <Form autoComplete="off">
                        <fieldset>
                            <label htmlFor="fullName">Full name</label>
                            <Field type="text" id="fullName" name="fullName" autoFocus />
                            <ErrorMessage 
                            name="fullName" 
                            component="p" 
                            className="error-message" />
                        </fieldset>
                        <fieldset>

                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email"
                                component="p"
                                className="error-message" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password"
                                component="p"
                                className="error-message" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirm">Confirm password</label>
                            <Field type="password" id="confirm" name="confirm" />
                            <ErrorMessage name="confirm"
                                component="p"
                                className="error-message" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="framework">Favorite framework</label>
                            <Field as='select' id="framework" name="framework">
                                <option value="">Select your framework</option>
                                <option value="react">React</option>
                                <option value="vue">Vue</option>
                                <option value="angular">Angular</option>
                            </Field>
                            <ErrorMessage name="framework"
                                component="p"
                                className="error-message" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="terms">
                                <Field type="checkbox" id="terms" name="terms" />
                                Accept terms and conditions
                            </label>
                            <ErrorMessage name="terms"
                                component="p"
                                className="error-message" />
                        </fieldset>
                        <button type="submit">register</button>
                    </Form>
                </Formik>
            </div>
            <p>
                Already have an account? <span onClick={() => {
                    setStep('signin')
                }}>Sign in</span>
            </p>
        </main>
    );
};

export default SignUp;