 import Button from './components/Botton.jsx'
 import DisplayScreen from './components/DisplayScreen.jsx'
import './App.css'
import { Provider } from 'react-redux'
import calculatorStore from './store/index.js'
import ValueProvider from './context/ValueProvider.jsx'

function App() {
   

  return (
    <>
    <Provider store={calculatorStore}>
    <ValueProvider>
    <div className='main-container'>
      <DisplayScreen/>
      <Button/>
    </div>
    </ValueProvider>
    </Provider>    
    </>
  )
}

export default App
{/* Online calculator, 
    SPA with reusable component, 
    maintain proper naming and folder strucute. 
    Should be scalable and maintanable.. 
    use redux to store prev result
    add , multiply , div
    sore the handling in context-api*/}