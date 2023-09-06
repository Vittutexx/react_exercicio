import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//IMPORTANTO OS ELEMENTOS DO ROUTER E AS PAGINAS NO MAIN.JSX
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProduto from './routes/EditarProduto/index.jsx'
//CONFIGURANDO AS ROTAS 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto />
      }
    ]
  }
])
  



//CRIANDO O CONTROLE DE RENDERIZAÇÃO DAS PAGINAS NO reactDOM, PASSANDO O ROUTER COMO ATRIBUTO
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
