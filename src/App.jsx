import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Ruteo } from './app/utilidades/rutas/Ruteo'
import HeaderWrapper from './app/utilidades/rutas/HeaderWrapper'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <HeaderWrapper />
          <Ruteo /> 
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
