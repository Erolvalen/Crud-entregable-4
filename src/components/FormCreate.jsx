import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormCreate = ({createApi, userSelected, updateApi, setUserSelected}) => {
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
      reset(userSelected)

    }, [userSelected])

    const onSubmit = data => {        
      if(userSelected){
        updateApi(userSelected.id, data)
        setUserSelected()
      } else{
        createApi(data)
      }
      reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:''
      })
    }  

    console.log(userSelected)

  return (
   <form className='form' onSubmit={handleSubmit(onSubmit)}>

   <label>
    <span className='span-label'>Email </span>
    <input {...register('email')} type="email" placeholder='example@gmail.com'/>
   </label>

   <label>
    <span className='span-label'>Password </span>
    <input {...register('password')} type="password" placeholder='*******'/>
   </label>

   <label>
    <span className='span-label'>First Name </span>
    <input {...register('first_name')} type="text" placeholder='pepito'/>
   </label>
   
   <label>
    <span className='span-label'>Last Name </span>
    <input {...register('last_name')} type="text" placeholder='perez' />
   </label>

   <label>
    <span className='span-label'>Birthday </span>
    <input {...register('birthday')} type="date" />
   </label>

   <button className='form__btn'>Enviar</button>
   
   </form>
  )
}

export default FormCreate
