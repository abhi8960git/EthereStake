import React from 'react'

type Buttontype={
    name:string
}

const Button = (props:Buttontype) => {
  return (
  
    <button className=' border-2 hover:bg-indigo-700 border-indigo-500 p-2.5 font-[700] rounded-r-full border-l-0 text-xl text-white bg-indigo-500'>
        {props.name}
    </button>
  
  )
}

export default Button