import React from 'react'
import Child from './Child'
function Parent(){
    const data = "hi!! i am a Parent Companent"
    return(
        <div>
            Parent Component here
            <Child message ={data}/>
        </div>
    )
}
export default Parent;