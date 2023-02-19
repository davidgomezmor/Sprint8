import { WelcomeContainer, WelcomeButton, Container } from "./styled";
import { Link } from "react-router-dom";


export const Welcome = () => {
  return (
    <Container>
      <WelcomeContainer>
        <h1>WELCOME TO STAR WARS STARSHIPS!</h1>
          <div>
            <WelcomeButton>
              <Link to="/Starships"><h1>ENTER</h1></Link>
            </WelcomeButton>
          </div>
      </WelcomeContainer>
    </Container>
  );
};

export default Welcome;