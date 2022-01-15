import {
  BrowserRouter,
  Routes,
  Route
//componentes do react para configurar as rotas

} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>  
    {/* iniciar a configuração das rotas */}

      <Navbar />
      {/* toda pag vai ter o navbar */}

      <Routes>
        {/* aqui eu configuro rota por rota */}
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          
          {/* subrota passando o parametro do filme escolhido com o id */}
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
