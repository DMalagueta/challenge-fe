import React from 'react'

export default function Tasks({data}) {
    const { id, text, completed } = data;

  return (
     <> 
        <li className={completed ? 'alert alert-success' : 'alert alert-danger'} id={id}>
           <h5>{text} </h5>
           <span>Completed: {completed ? '✅' : '❌'}</span>
         </li>
     </>
  )
}
