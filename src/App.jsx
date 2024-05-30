import React, { useEffect } from 'react'
import './App.css'
import crud from './hook/crud'
import FormCreate from './components/FormCreate'
import './components/FormCreate.css'
import CardUser from './components/CardUser'
import { useState } from 'react'

const App = () => {
  const [ users, getUsers, createApi, deleteApi, updateApi ] = crud('/users/')
  
  const [userSelected, setUserSelected] = useState()
  

    useEffect(() => {
        getUsers()    
    }, [])

    // console.log(users)
  return (
    <div>
      <h1>Crud Erol</h1>
      <FormCreate 
       createApi={createApi}       
       userSelected={userSelected}
       updateApi={updateApi}
       setUserSelected={setUserSelected}
       />

        {
          users?.map(user => (
            <CardUser
            key = {user.id}
            user={user}
            deleteApi={deleteApi}
            setUserSelected={setUserSelected}
            />
          ))
        }    
    </div>
  )
}

export default App
