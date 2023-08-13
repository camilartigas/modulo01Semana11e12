import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ErrorStyled } from "./styled"
import { Button } from "../components/button"


function NotFound() {

  const handleBack = () => {
    window.history.back(); // Navegar para a página anterior
};  


    return (
      <>
      <Header/>
      <ErrorStyled>
        <img src="/img/erro.png" alt="" />
      </ErrorStyled>
      <Button text="Voltar" onClick={handleBack} />
      <Footer/>
      </>
    )
  }
  export default NotFound