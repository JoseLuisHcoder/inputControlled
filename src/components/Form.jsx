import React, { useState } from 'react'

const Form = () => {
    const [search, setSearch] = useState()

    const handleInput = e => {
        setSearch(e.target.value)
        
    }
    console.log(search);
  return (
    <form>
        <h2>Form</h2>
        <input type="text" onChange={handleInput} value={search}/>
    </form>
  )
}

export default Form