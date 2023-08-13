import { ButtonStyled } from "./styled";

function Button({text, onClick}) {
    return (
        
        <ButtonStyled onClick={onClick}>
            {text}
        </ButtonStyled>
      
    );
  }
  
  export { Button };