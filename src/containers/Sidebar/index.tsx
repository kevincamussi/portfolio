import { Avatar } from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import { Titulo } from '../../components/Titulo'
import { AsideSection, BotaoTema, Descricao, SidebarContainer } from './styles'

export const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </AsideSection>
)
