import React, { useEffect } from 'react'
import './App.css'
import crud from './hook/crud'
import FormCreate from './components/FormCreate'
import './components/FormCreate.css'
import CardUser from './components/CardUser'

const App = () => {
  const [ users, getUsers, createApi, deleteApi ] = crud('/users/')

    useEffect(() => {
        getUsers()    
    }, [])

    console.log(users)
  return (
    <div>
      <h1>Crud Erol</h1>
      <FormCreate 
       createApi={createApi}
       />

        {
          users?.map(user => (
            <CardUser
            key = {user.id}
            user={user}
            deleteApi={deleteApi}
            />
          ))
        }    
    </div>
  )
}

export default App
