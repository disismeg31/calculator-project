/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { valContext } from '../context/ValueProvider';
import './Button.css'
function Botton() {
    const {numbers,operations,handleNumClick,handleOpClick,handleCalculation,handleReset,handleShowPrevVal} = useContext(valContext)
    // const numbers = [0,1,2,3,4,5,6,7,8,9];
    // const operations = ['+','-','/','*'];
    // let expression = ``;
    // const handleNumClick= (val) =>{
    //      console.log(val);
    //      expression+=val
    // } 
    // const handleOpClick= (op) =>{ 
    //      console.log(op)
    //      expression+=`${op}`
    // } 
    // const handleCalculation=()=>{
    //      let  result = eval(expression)
    //      console.log(result)
    // }


  return (
    <div className='btn'>
        <span onClick={handleReset}>C</span>
        <span onClick={handleShowPrevVal}>Prev</span>
        {
              numbers.map((num,i)=>(
                    <span className='num' onClick={()=>handleNumClick(num)} key={i}>{num}</span>
                ))
        }
        {
            operations.map((operator,i)=>(
                <span className='operator' onClick={()=>handleOpClick(operator)} key={i}>{operator}</span>
            ))
        }
        <span onClick={handleCalculation}>=</span>
         
    </div>
  )
}

export default Botton