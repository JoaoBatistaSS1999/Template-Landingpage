import ReactDOM from "react-dom/client";
import App from "./App";
import { UseContextProvider } from "./context/appContext";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UseContextProvider>
    <GlobalStyle />
    <App />
  </UseContextProvider>
);
