import { Titulo } from '../../components/Titulo'
import { Paragrafo } from '../../components/Paragrafo'
import { GithubSecao } from './styles'

export const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ipsa
      excepturi pariatur reprehenderit tenetur magni voluptatibus inventore,
      consequatur dolore ratione nobis officiis rerum explicabo cum quae
      consectetur quidem iure neque.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=kevincamussi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kevincamussi&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
