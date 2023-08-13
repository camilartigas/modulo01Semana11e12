import { Link } from "react-router-dom";
import { HeaderStyled, NavStyled, ProfileImage } from "./styled";

function Header() {
  const pages = [ 
    { route: "/", description: "Home" },
    { route: "/aboutMe", description: "Sobre Mim" },
    { route: "/portfolio", description: "Portfolio" }]

    
    return ( 
        <HeaderStyled>
          <ProfileImage src="https://avatars.githubusercontent.com/u/130904525?v=4" alt="Profile Image" />
          
              
              <NavStyled>
                { pages.map(({route, description}) => {
                    return (<Link key={route} to={route}>{description}</Link>)
                  })}
              </NavStyled>
        </HeaderStyled>
        );
        }

        export { Header };
        