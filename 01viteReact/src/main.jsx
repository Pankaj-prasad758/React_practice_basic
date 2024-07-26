import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.youtube.com",
//       target: "_blank"
//   },
//   children: "Click to visit youtube"
// }

const reactElement = React.createElement(
'h1',
  {},
  "game is on"
)


ReactDOM.createRoot(document.getElementById('root')).render(

<> 
<App />

</>
)



