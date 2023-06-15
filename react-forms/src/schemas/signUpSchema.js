import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .required('Full name is required'),

    email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            'Password must contain at least one number, one uppercase and lowercase letter')
        .required('Password is required'),

    confirm: Yup.string()
        //Con ref es con referencia a la propiedad password, segundo parametro un error
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),

    framework: Yup.string()
        .oneOf(['angular', 'react', 'vue'], 'Framework must be one of the following: Angular, React, Vue')
        .required('Framework is required'),

    terms: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions')
})
