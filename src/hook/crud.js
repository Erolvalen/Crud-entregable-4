import axios from 'axios'
import React, { useState } from 'react'


const crud = (path) => {
    const [response, setResponse] = useState()
    const Base_Url = 'https://users-crud.academlo.tech'
    
    //Leer
    const  readApi = () => {
       const url = `${Base_Url}${path}`
        axios.get(url)
        .then(res=> {
            // console.log(res.data)
            setResponse(res.data)
        })
        .catch(err=> console.log(err))
        
        
    }

    //Crear
    const createApi = (data) =>{
        const url = `${Base_Url}${path}`
        axios.post(url, data)
        .then(res => {
            // console.log(res.data)
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
    }

    //Eliminar
    const deleteApi = (id) => {
        const url = `${Base_Url}${path}${id}/`
        axios.delete(url)
        .then(res => {
            // console.log(res.data)
            setResponse(response.filter(element => element.id !== id))
        })
        .catch(err => console.log(err))
    }

    //Editar
    const updateApi = (id, data) => {
        const url = `${Base_Url}${path}${id}/`
        axios.put(url, data)
        .then(res => {
            // console.log(res.data)
            setResponse(response.map(elem => elem.id === id ? res.data : elem))
        })
        .catch(err => console.log(err))
    }

    
    return [response, readApi, createApi, deleteApi, updateApi]
}

export default crud
