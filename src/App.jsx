import Button from "./components/Botton.jsx";
import DisplayScreen from "./components/DisplayScreen.jsx";
import "./App.css";
import { Provider } from "react-redux";
import calculatorStore from "./store/index.js";
import ValueProvider from "./context/ValueProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Header from "./components/Header.jsx";
import { themeContext } from "./context/ThemeProvider.jsx";
import { useEffect,useContext } from "react";
function App() {
  const  {theme} = useContext(themeContext);
  useEffect(()=>{
    document.body.classList.remove('theme1', 'theme2', 'theme3');
    document.body.classList.add(theme);
  },[theme])

  return (
    <>
      <Provider store={calculatorStore}>
        <ThemeProvider>
          <ValueProvider>
            <div className="w-[400px] h-auto">
              <Header/>
              <DisplayScreen />
              <Button />
            </div>
          </ValueProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
{
  /* Online calculator, 
    SPA with reusable component, 
    maintain proper naming and folder strucute. 
    Should be scalable and maintanable.. 
    use redux to store prev result
    add , multiply , div
    sore the handling in context-api*/
}
