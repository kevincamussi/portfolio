import { Container, EstiloGlobal } from './styles'
import { Projetos } from './containers/Projetos'
import { Sidebar } from './containers/Sidebar'
import { Sobre } from './containers/Sobre'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
