import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {contactButtonPressed} from './contactButton.js'
import {menuButtonPressed} from './menuButton.js'

const page = document.querySelector('#app')

const div = document.createElement('div')
const header = document.createElement('header')
const h1 = document.createElement('h1')
const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')
h1.innerHTML = "Restaurant"
page.appendChild(div)
div.appendChild(h1)
div.appendChild(header)
 
const mainDiv = document.createElement('main')
const p = document.createElement('h2')
p.innerHTML = `Best pasta in town. <br>Since 1992. `
mainDiv.appendChild(p)
div.appendChild(mainDiv)

let img = new Image()
img.src = './public/pasta-kitchen_FFGSEEZ3OU.jpg'
img.alt = "Image of pasta."
mainDiv.appendChild(img)

button1.className = "button-64"
const span1 = document.createElement('span')
span1.className = "text"      
span1.innerHTML = 'Home'  
span1.id = 'home'                                                                            
button1.appendChild(span1)
header.appendChild(button1)

button2.className = "button-64"
button2.id = 'menu'
const span2 = document.createElement('span')
span2.innerHTML = 'Menu'                                                                              
span2.className = "text"                                                                                    
button2.appendChild(span2)
header.appendChild(button2)

button3.className = "button-64"
button3.id = "contact"
const span3 = document.createElement('span')
span3.innerHTML = 'Contact'                                                                              
span3.className = "text"                                                                                    
button3.appendChild(span3)
header.appendChild(button3)


button1.addEventListener('click', homeButtonPressed)


button2.addEventListener('click', menuButtonPressed)

button3.addEventListener('click', contactButtonPressed)


function homeButtonPressed() { 
  
  const mainDiv = document.querySelector('main')
  mainDiv.replaceChildren()
  
  const p = document.createElement('h2')
  p.innerHTML = `Best pasta in town. <br>Since 1992. `
  mainDiv.appendChild(p)
  div.appendChild(mainDiv)
  
  let img = new Image()
  img.src = './public/pasta-kitchen_FFGSEEZ3OU.jpg'
  img.alt = "Image of pasta."
  mainDiv.appendChild(img)
 
  
}





  

