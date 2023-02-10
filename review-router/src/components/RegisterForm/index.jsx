import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema";

const RegisterForm = ({registerUser}) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      watch
   } = useForm({
    resolver: yupResolver(registerFormSchema)
   });

   const submit = (formData) => {
    registerUser(formData);
    reset();
   }

   const name = watch("name");

   return (
      <form onSubmit={handleSubmit(submit)} noValidate>
        {name}
         <Input label="Nome" type="text" placeholder="Digite o seu nome" register={register("name")} error={errors.name} />

         <Input label="Email" type="email" placeholder="Digite o seu email" register={register("email")} error={errors.email} />

         <Input label="Senha" type="password" placeholder="Crie uma senha" register={register("password")} error={errors.password} />

         <Input label="Confirmação de Senha" type="password" placeholder="Confirme a senha" register={register("confirmPassword")} error={errors.confirmPassword} />

         <button type="submit">Cadastrar</button>
      </form>
   );
};

export default RegisterForm;
