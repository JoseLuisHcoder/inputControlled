import React, { useState } from 'react'

const InputNoControlado = () => {
    const [formInfo, setFormInfo] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        const obj = {}
            obj.name = e.target.name.value
            obj.lastname = e.target.lastname.value
            obj.email = e.target.email.value
        
        setFormInfo(obj)
    }
    console.log(formInfo);
    return (
        <form onSubmit={handleSubmit} >
            <ul>
                <li>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" placeholder='name' />
                </li>
                <li>
                    <label htmlFor="lastname">Apellido</label>
                    <input type="text" id="lastname" placeholder='lastname' />
                </li>
                <li>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='email' />
                </li>
            </ul>

            <button>Submit</button>            

        </form>
    )
}

export default InputNoControlado