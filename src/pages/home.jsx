import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { TitleStyled } from "./styled"
import { TextStyled } from "./styled"

function Home() {
    return (
      <>
      <Header/>
      <TitleStyled>Camila Artigas de Prá</TitleStyled>
      <TextStyled>Sou formada em farmácia pela PUC PR há 17 anos e desde formada trabalho em dispensação, trabalhei em algumas redes e farmácias independentes. Após alguns anos na área resolvi mudar e fiz outra faculdade, gestão em tecnologia da informação, e segui com um MBA em Business Intelligence. Atualmente trabalho na farmácia Preço Popular como gerente farmacêutica, mas busco novas oportunidades na área de TI. Também faço um curso de desenvolvimento web no SENAI, que tem duração de 9 meses e estou no módulo de Front-end. Este Portfólio é um dos trabalhos que estou desenvolvendo no curso e na próxima semana estarei desenvolvendo um projeto maior, que será um ecommerce farmacêutico.
      </TextStyled>
      <Footer/>
      </>
    )
  }
  export default Home
  