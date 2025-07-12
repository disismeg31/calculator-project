import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between h-14'>
    <p className='text-4xl font-bold'>calc</p>
    <div className='flex'>
    
    <div className='flex flex-col'>
        
        <div className='flex'>
            <div className='flex items-baseline-last px-8'>
            <span className='font-semibold text-sm'>THEME</span>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between text-sm px-1'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
            <div className='bg-[#232c43] w-14 h-[20px] p-1 rounded-2xl flex items-center'>
                <div className='flex w-full'>
                    <button className='bg-[#d03f2f] w-3 p-1 h-3 rounded-full cursor-pointer'></button>
                </div>
                <div className='flex justify-center w-full'>
                    <button className='bg-[#d03f2f] w-3 p-1 h-3 rounded-full cursor-pointer'></button>
                </div>
                <div className='flex justify-end w-full'>
                    <button className='bg-[#d03f2f] w-3 p-1 h-3 rounded-full cursor-pointer'></button>
                </div>
                {/* on click on specific div(button inside) apply the corresponding div button
                 from hidden block along with: the div-> justify center justify end classes
                   */}
            </div>
            </div>
            
        </div>
        
        
    </div>
    </div>
    </div>
    </>
  )
}

export default Header