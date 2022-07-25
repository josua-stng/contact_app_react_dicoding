import React from 'react';
import {createRoot} from  'react-dom/client';
import MyComponent from './class/Class';
import { ContactApp } from './components/ContactApp';


// styling
import './style/style.css'

const root = createRoot(document.querySelector('#root'));

root.render(
<div>
<MyComponent name='Josua'/>
<MyComponent name='Nicho'/>
<MyComponent name='Risky'/>
</div>

)
// root.render(<ContactApp/>)