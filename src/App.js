import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ReviewSection from './Components/ReviewSection';
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import { OuterLayout } from "./styles/Layouts";
import { Fade } from "react-awesome-reveal";
// import Story from "./Components/Story";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade duration={1000} direction="right">
          <CardSection />
          </Fade>
          <Fade cascade='true' duration={1000}>
          <ReviewSection/>
          </Fade>
          <Fade duration={1000} direction="left">
          <Contact />
          </Fade>
        </MainStyled>
      </OuterLayout>
          <Footer />
    </div>
  );
}
const MainStyled = styled.main``;


export default App;
