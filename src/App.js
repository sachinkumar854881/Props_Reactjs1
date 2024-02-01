import React,{Fragment} from 'react'
import Parent from './Parent'

const styles={
    color:'red',
    fontSize:'30px'
}
function App(){
    return(
        <Fragment>
            <div style={styles}>
                <h2>Internal style here</h2>
            </div>
            <div style={{color:'blue',fontSize:'30px'}}>
                <h2>Inline Style here</h2>
            </div>
            <Parent/>
        </Fragment>
    )
}
export default App;
