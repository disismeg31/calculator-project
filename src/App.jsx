import Button from "./components/Botton.jsx";
import DisplayScreen from "./components/DisplayScreen.jsx";
import "./App.css";
import { Provider } from "react-redux";
import calculatorStore from "./store/index.js";
import ValueProvider from "./context/ValueProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

function App() {
  return (
    <>
      <Provider store={calculatorStore}>
        <ThemeProvider>
          <ValueProvider>
            <div className="w-[400px] h-auto bg-[#DC143C]">
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
