import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório')
});

export default schema