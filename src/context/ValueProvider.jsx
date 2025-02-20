/* eslint-disable react/prop-types */
import { createContext ,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { resetVal, setPrevVal } from '../store/actions/calculatorActions';
export const valContext = createContext();

function ValueProvider({children}) {

    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const operations = ['+','-','/','*'];
    const [hidden,setHidden]=useState(false)
    const [expression,setExpression] = useState("");
    const [res,setRes]=useState(0);
    const  dispatch = useDispatch();
    const prevVal = useSelector(state => state.val.prev);
    const [lastEntered,setLastEntered] = useState("")
    // const [defaultVal,setDefaultVal] = useState(0) 
    const handleNumClick= (val) =>{
         console.log(val);
         setExpression((e)=>e+val)
    } 
    const handleOpClick= (op) =>{ 
         console.log(op)
         setExpression((e)=>e+op)
    } 
    const handleCalculation=()=>{
         let  result = eval(expression);
         console.log(result);
         setRes(result);
         dispatch(setPrevVal(result))
    }

    const handleReset=()=>{
        setExpression(``);
        setRes("");
        setLastEntered(prevVal);
        setHidden(false);
        dispatch(resetVal(null))
    }

    const handleShowPrevVal = () =>{
        setHidden(true)
        console.log(prevVal)
    }

    const handleDelete=() =>{
        setExpression((e) => e.slice(0, -1));
    }

     const value = {
        numbers,
        operations,
        handleNumClick,
        handleOpClick,
        handleCalculation,
        expression,
        res,
        prevVal,
        handleReset,
        hidden,
        handleShowPrevVal,
        lastEntered,
        handleDelete
        // defaultVal
     }
  return (
    < valContext.Provider value={value}>
        {children}
    </valContext.Provider>
  )
}

export default ValueProvider