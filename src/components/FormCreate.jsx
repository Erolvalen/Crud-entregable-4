import React from 'react'
import { useForm } from 'react-hook-form'

const FormCreate = ({createApi}) => {
    const {register, handleSubmit, reset} = useForm()
    const onSubmit = data => {
        createApi(data)
        reset({
          email:'',
          password:'',
          first_name:'',
          last_name:'',
          birthday:''
        })
    }  

  return (
   <form className='form' onSubmit={handleSubmit(onSubmit)}>

   <label>
    <span>Email </span>
    <input {...register('email')} type="email" placeholder='example@gmail.com'/>
   </label>

   <label>
    <span>Password </span>
    <input {...register('password')} type="password" placeholder='*******'/>
   </label>

   <label>
    <span>First Name </span>
    <input {...register('first_name')} type="text" placeholder='pepito'/>
   </label>
   
   <label>
    <span>Last Name </span>
    <input {...register('last_name')} type="text" placeholder='perez' />
   </label>

   <label>
    <span>Birthday </span>
    <input {...register('birthday')} type="date" />
   </label>

   <button className='form__btn'>Enviar</button>
   
   </form>
  )
}

export default FormCreate
