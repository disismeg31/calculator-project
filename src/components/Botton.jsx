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
    <div className='btn w-full p-3 rounded-xl gap-2.5 bg-[#232c43]'>
        <div className='grid grid-cols-4'>
        <span className='span-num' onClick={()=>handleNumClick(7)}>7</span>
        <span className='span-num' onClick={()=>handleNumClick(8)}>8</span>
        <span className='span-num' onClick={()=>handleNumClick(9)}>9</span>
        <span className='span-req' onClick={handleDelete}>DEL</span>
        <span className='span-num' onClick={()=>handleNumClick(4)}>4</span>
        <span className='span-num' onClick={()=>handleNumClick(5)}>5</span>
        <span className='span-num' onClick={()=>handleNumClick(6)}>6</span>
        <span className='span-num' onClick={()=>handleNumClick(`+`)}>+</span>
        <span className='span-num' onClick={()=>handleNumClick(1)}>1</span>
        <span className='span-num' onClick={()=>handleNumClick(2)}>2</span>
        <span className='span-num' onClick={()=>handleNumClick(3)}>3</span>
        <span className='span-num' onClick={()=>handleNumClick(`-`)}>-</span>
        <span className='span-num' onClick={()=>handleNumClick(`.`)}>.</span>
        <span className='span-num' onClick={()=>handleNumClick(0)}>0</span>
        <span className='span-num' onClick={()=>handleNumClick(`/`)}>/</span>
        <span className='span-num' onClick={()=>handleNumClick(`*`)}>x</span>

        </div>
        
        <div className='grid grid-cols-2'>
          <span className='span-req' onClick={handleReset}>RESET</span>
        <span className='span-res' onClick={handleCalculation}>=</span>
        
        </div>
        

      
      
      {/* {
              numbers.map((num,i)=>(
                    <span className='num span' onClick={()=>handleNumClick(num)} key={i}>{num}</span>
                ))
        } */}

        {/* <span className='span' onClick={handleReset}>REset</span> */}
        {/* <span className='span' onClick={handleShowPrevVal}>Prev</span> */}
        {/* <span className='span' onClick={handleDelete} >DEL</span> */}
        
        {/* {
            operations.map((operator,i)=>(
                <span className='operator span' onClick={()=>handleOpClick(operator)} key={i}>{operator}</span>
            ))
        } */}
        {/* <span className='span' onClick={handleCalculation}>=</span> */}
         
    </div>
  )
}

export default Botton