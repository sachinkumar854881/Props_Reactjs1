import React from 'react'

const Child = (props) => {
    console.log(props)
    return(
            <div>
                Child Component here
                <div>
                    <h2>{props.message}</h2>
                </div>
            </div>
    )
}
export default Child;