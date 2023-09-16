import React from "react";
import { createRoot } from 'react-dom/client';
import { Config } from "./config";

// styles
// - @rmwc
import '@rmwc/radio/styles';

function ReactApp() {
    return (<Config/>);
}


const domNode = document.createElement('div');
domNode.id = 'react-app';
const root = createRoot(domNode);

function loadReactApp() {
    document.body.appendChild(domNode);
    root.render(<ReactApp />);
}

export { root, loadReactApp };

