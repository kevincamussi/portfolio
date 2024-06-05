import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { AsideSection, BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <AsideSection>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kevin Camussi </Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        kevincamussi
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </AsideSection>
)

export default Sidebar
