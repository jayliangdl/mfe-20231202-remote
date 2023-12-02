
import ReactDOM from "react-dom/client";
import MyButton from "./MyButton";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <MyButton/>
  </div>
);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(<App/>)
