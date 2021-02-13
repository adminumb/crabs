import React from 'react'



const PageResult=({id,result,status})=>{


    return (
        <div>
           <p> ____________________________________</p>
          <p>ПОРЯДКОВЫЙ НОМЕР: {id}</p>
            <p>РЕЗУЛЬТАТ: {result}%</p>
            <p>ЗВАНИЕ: {status}</p>

        </div>
    )
}
export default PageResult