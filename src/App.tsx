import React from "react";
import { createRoot } from 'react-dom/client';
import MyButton from "./MyButton";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <MyButton/>
  </div>
);

const appEl = document.getElementById("app")
const root = createRoot(appEl!);
root.render(<App/>);




