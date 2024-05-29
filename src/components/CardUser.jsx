import React from 'react'

const CardUser = ({user, deleteApi}) => {

  const handleDelete = () => {
    deleteApi(user.id)
  }

  return (
    <div>
        <hr />
      <h2>{user.first_name} {user.last_name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.birthday}</h3>
      <button onClick={handleDelete} >Eliminar</button>
    </div>
  )
}

export default CardUser
