import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import {Flex} from "./styles/Flex.styled"

// Created the header component
export default function Header(){
    return (
        <StyledHeader>
          <Container>
            <Nav>
               <Logo src='./images/logo.svg' alt=""/>
               <Button> Try it Free</Button>
            </Nav>
            <Flex>
              <div>
                <h1>Build the community your fans will love</h1>
                <p>
                   Have you ever wondered how innovate in building communities? 
                   Yes a place where you have a voice and so does your audience. Create connections with your user as
                   you engage in genuine discussion.
                </p>
                <Button bg='#ff0099' color= '#fff'> Start Your Free Trial  </Button>
              </div>
              <Image src='./images/illustration-mockups.svg'/>
            </Flex>
          </Container>
        </StyledHeader>
    )
}