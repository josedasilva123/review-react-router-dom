import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().required("O email é obrigatório").email("O email digitado é inválido."),
    password: yup.string().required("A senha é obrigatória").min(8, "A senha precisa ter pelo menos oito caracteres"),
    confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas não correspondem"),
})