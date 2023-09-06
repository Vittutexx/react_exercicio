import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'


function App() {
  //FAZENDO COM QUE O COMPONENTE App.jsx TRABALHE JUNTO COM O RouterProvider.
  
  //AJUSTANDO OS COMPONENTES REAPROVEITÁVEIS
    return (
      <>
        <Menu />
        <Outlet/>
        <Rodape />
      </>
    )
  }
  export default App
