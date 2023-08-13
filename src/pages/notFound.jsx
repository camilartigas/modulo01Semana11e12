
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ErrorStyled } from "./styled"

function NotFound() {
    return (
      <>
      <Header/>
      <ErrorStyled><img src="/img/erro.png" alt=""></img></ErrorStyled>
      <Footer/>
      </>
    )
  }
  export default NotFound