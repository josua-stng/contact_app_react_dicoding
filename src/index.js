import React from 'react';
import {createRoot} from  'react-dom/client';
import MyComponent from './class/Class';
import { ContactApp } from './components/ContactApp';
import MyForm from './form/MyForm';


// styling
import './style/style.css'

const root = createRoot(document.querySelector('#root'));

// Class App Render
// root.render(
// <div>
// <MyComponent name='Josua'/>
// <MyComponent name='Nicho'/>
// <MyComponent name='Risky'/>
// </div>

// )

// Contact App Render
root.render(<ContactApp/>)

// Form App Render
// root.render(<MyForm/>)