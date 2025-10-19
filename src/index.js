import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from "./file"
import './style/style.css'


const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<App />)
