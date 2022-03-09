import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/header/Navbar";
import { Container } from "@mui/material";
import Body from "./component/body/Body";

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />
        <Body />
      </Container>
    </div>
  );
}

export default App;
