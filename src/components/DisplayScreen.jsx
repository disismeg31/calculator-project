import { useState,useContext } from 'react';
import {useSelector} from 'react-redux';
import './DisplayScreen.css';
import { valContext } from '../context/ValueProvider';

function DisplayScreen() {
    const {expression,res,prevVal,hidden,lastEntered} = useContext(valContext)
    // const [dispalay,setDisplay] = useState(0)
    const  defaultVal = useSelector(state=>state.val.prev)
     
  return (
    <div className='display-container'>
        {
        
            expression ? <span className='entered-val'>{expression}</span> :
            hidden? <span className='entered-val'>{lastEntered}</span> :
            // hidden? <span className='entered-val'>{prevVal}</span> :
            <span className='entered-val'>{defaultVal}</span>
        }
        {/* <span className='entered-val'>{dispalay}</span> */}
        <div className='display-result'>
            {
                defaultVal=== null ? '0':res
            }
        </div>
    </div>
  )
}

export default DisplayScreen