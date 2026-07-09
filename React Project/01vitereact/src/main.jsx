import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

let username = 'riyyan'
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target :'_blank'},
    'click me ',
    username
)
// same as that in custom react.js file 

createRoot(document.getElementById('root')).render(

    // <App />
    reactElement

)
