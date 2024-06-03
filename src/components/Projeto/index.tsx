import { Titulo } from '../Titulo'
import { Paragrafo } from '../Paragrafo'
import { Card, LinkBotao } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com vue js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
