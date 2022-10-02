import React from 'react'
import "./formInput.styles.scss"
export const FormInput = ({label,changeHandler,value,name,type}) => {
  return (
    <div className='group'>
    <input 
         className='form-input'
         onChange={changeHandler}
         name={name} 
         type={type}
         required 
         value={value} />
    {label && ( 
        <label className={`${value.length?"shrink":""} form-input-label`}>{label}</label>)}
    </div>
  )
}
