import {useContext } from 'react';
import {useSelector} from 'react-redux';
import './DisplayScreen.css';
import { valContext } from '../context/ValueProvider';

function DisplayScreen() {
    const {expression,res,hidden,lastEntered} = useContext(valContext)
    const  defaultVal = useSelector(state=>state.val.prev)
     
  return (
    <div className='display-result-container'>
        {
        
            expression ? <span className='flex items-center h-[10px] !my-2.5 w-full text-[25px] border-none text-[gray] entered-val'>{expression}</span> :
            hidden? <span className='flex items-center h-[10px] !my-2.5 w-full text-[25px] border-none text-[gray]  entered-val'>{lastEntered}</span> :
            // hidden? <span className='entered-val'>{prevVal}</span> :
            <span className='flex items-center h-[10px] !my-2.5 w-full text-[25px] border-none text-[gray]  entered-val'>{defaultVal}</span>
        }
        <div className=' flex items-center justify-end h-[50px] text-[50px] font-semibold'>
            {
                defaultVal=== null ? '0':res
            }
        </div>
         
    </div>
  )
}

export default DisplayScreen