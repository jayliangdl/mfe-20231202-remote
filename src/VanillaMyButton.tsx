import React from "react";
import MyButton from "./MyButton";

import { createRoot } from 'react-dom/client';

export default (domElement: Element)=>{
  const root = createRoot(domElement);
  root.render(<MyButton/>);
}