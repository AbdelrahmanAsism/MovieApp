import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router/Router.jsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
