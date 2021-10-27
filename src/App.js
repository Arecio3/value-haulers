import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ReviewSection from './Components/ReviewSection';
import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layouts";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ReviewSection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}
const MainStyled = styled.main``;


export default App;
