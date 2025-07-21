import React, { useState } from "react";

function Header() {
  const [toggleTheme, setToggleTheme] = useState({
    theme1: true,
    theme2: false,
    theme3: false,
  });
  const handleToggleClick = (e) => {
    const {name} = e.target;
    console.log("clicked",name)
    // setToggleTheme((t)=>({...t,[name]:!name}))
    setToggleTheme({
      theme1: name === "theme1",
      theme2: name === "theme2",
      theme3: name === "theme3",
    });
  };

  console.log(toggleTheme)
  return (
    <>
      <div className="flex justify-between h-14">
        <p className="text-4xl font-bold">calc</p>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex items-baseline-last px-8">
                <span className="font-semibold text-xs">THEME</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between text-xs mb-0.5 px-2">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="bg-[#232c43] w-16 h-[25px] p-1 rounded-2xl flex items-center">
                  <div className="flex w-full">
                    {toggleTheme.theme1 ? 
                     <button
                      name="theme1"
                      onClick={handleToggleClick}
                      className={`translate-x-0.1 transition duration-350 ease-in bg-[#d03f2f] w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    :
                     <button
                      name="theme1"
                      onClick={handleToggleClick}
                      className={` bg-transparent w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    }
                   
                  </div>
                  <div className="flex justify-center w-full">
                    {toggleTheme.theme2 ?
                    <button
                      name="theme2"
                      onClick={handleToggleClick}
                      className={`translate-x-0.1 duration-350 ease-in bg-[#d03f2f] w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    :
                    <button
                      name="theme2"
                      onClick={handleToggleClick}
                      className={` bg-transparent w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    }
                    
                  </div>
                  <div className="flex justify-end w-full">
                    {toggleTheme.theme3 ?
                    <button
                      name="theme3"
                      onClick={handleToggleClick}
                      className={`translate-x-0.1 duration-350 ease-in bg-[#d03f2f] w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    :
                    <button
                      name="theme3"
                      onClick={handleToggleClick}
                      className={` bg-transparent w-3 p-2 h-3 rounded-full cursor-pointer` }
                    ></button>
                    }
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
  );
}

export default Header;
