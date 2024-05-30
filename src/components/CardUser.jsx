import React from 'react'

const CardUser = ({user, deleteApi, setUserSelected}) => {

  const handlerDelete = () => {
    deleteApi(user.id)
  }

  const handlerEdit = () => {
    setUserSelected(user)
  }

  return (
    <div className='card'>
      <h2>{user.first_name} {user.last_name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.birthday}</h3>
      <button className='btn-eliminar' onClick={handlerDelete} >Eliminar</button> <span>  </span>
      <button className='btn-editar' onClick={handlerEdit} >Editar</button>
    </div>
  )
}

export default CardUser
