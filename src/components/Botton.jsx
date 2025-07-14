/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { valContext } from '../context/ValueProvider';
import './Button.style.css'
function Botton() {
    const {numbers,operations,handleNumClick,handleOpClick,handleCalculation,handleReset,handleShowPrevVal,handleDelete} = useContext(valContext)
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
    <div className='btn w-full py-3 rounded-xl gap-2.5 flex flex-wrap justify-center items-center bg-[#232c43]'>
      {
              numbers.map((num,i)=>(
                    <span className='num span' onClick={()=>handleNumClick(num)} key={i}>{num}</span>
                ))
        }
        <span className='span' onClick={handleReset}>C</span>
        <span className='span' onClick={handleShowPrevVal}>Prev</span>
        <span className='span' onClick={handleDelete} >DEL</span>
        
        {
            operations.map((operator,i)=>(
                <span className='operator span' onClick={()=>handleOpClick(operator)} key={i}>{operator}</span>
            ))
        }
        <span className='span' onClick={handleCalculation}>=</span>
         
    </div>
  )
}

export default Botton