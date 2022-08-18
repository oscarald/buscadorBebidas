import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriaProvider } from './context/CategoriaProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'

function App() {

  return (
    <CategoriaProvider>
      <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>
          <Container className='my-5'>
            <Formulario/>
            <ListadoBebidas/>
            <ModalBebida/>
          </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App
