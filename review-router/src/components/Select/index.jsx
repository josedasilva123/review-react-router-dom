import React from 'react'

const Select = ({ children, register }) => {
  return (
    <fieldset>
        <label htmlFor=""></label>
        <select name="" id="" {...register}>
            {children}
        </select>
        <p></p>
    </fieldset>
  )
}

export default index