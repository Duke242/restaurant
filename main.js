import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

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
 
const mainDiv = document.createElement('div')
mainDiv.className = "main-div"
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


// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Restaurant</h1>
//     <header class="header">
//     <button class="button-64" role="button"><span class="text">Home</span></button>
//     <button class="button-64" role="button" id="menu"><span class="text">Menu</span></button>
//     <button class="button-64" role="button"><span class="text">Contact</span></button>
//     </header>
//     <div class='main-div'> 
//       <h2>Best pasta in town. <br> Since 1904</h2> 
//       <img src="./public/pasta-kitchen_FFGSEEZ3OU.jpg" alt="notifications">
//     </div>
//   </div>
    
// `

function resetPage() {
  // div.removeChild(h1)
  // div.removeChild(header)
  // div.removeChild(mainDiv)

}

let menuButton = document.querySelector('#menu').addEventListener('click', () => {
  menuButtonPressed()
})

let contactButton = document.querySelector('#contact').addEventListener('click', () => {
  contactButtonPressed()
})

let homeButton = document.querySelector('#home').addEventListener('click', () => {
  homeButtonPressed()
  console.log("home button pressed")
})


function homeButtonPressed() { 
  document.body.replaceChildren()

  const page = document.createElement('div')
  document.body.appendChild(page)
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
  const mainDiv = document.createElement('div')

  mainDiv.className = "main-div"
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

  let menuButton = document.querySelector('#menu').addEventListener('click', () => {
    menuButtonPressed()
  })
  
  let contactButton = document.querySelector('#contact').addEventListener('click', () => {
    contactButtonPressed()
  })
  
  let homeButton = document.querySelector('#home').addEventListener('click', () => {
    homeButtonPressed()
  })
  
}

function menuButtonPressed() { 
  document.body.replaceChildren()
  const div1 = document.createElement('div')
  document.body.appendChild(div1)
  const div = document.createElement('div')
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  const button1 = document.createElement('button')
  const button2 = document.createElement('button')
  const button3 = document.createElement('button')
  h1.innerHTML = "Restaurant"
  div1.appendChild(div)
  div1.appendChild(h1)
  div1.appendChild(header)
  const menuDiv = document.createElement("div")
  const pDiv2 = document.createElement('div')
  pDiv2.className = 'pDiv2'
  menuDiv.className = "menuButtonDiv"
  let menuImg = new Image()
  menuImg.className = 'menuImg'
  menuImg.src = './public/istockphoto-1388417457-612x612.jpg'
  menuImg.alt = "Image of pasta."
  const menuP = document.createElement('p')
  menuP.innerHTML = "Spaghetti topped with your choice of homemade marinara (V) or meat sauce prepared fresh daily."
  const menuh2 = document.createElement("h2")
  menuh2.innerHTML = "Spaghetti"
  const pContainer = document.createElement('div')
  pContainer.className = 'pContainer'
  pContainer.appendChild(menuh2)
  pContainer.appendChild(menuP)
  pDiv2.appendChild(menuImg)
  pDiv2.appendChild(pContainer)
  menuDiv.appendChild(pDiv2)
  div1.appendChild(menuDiv)


  const menuDiv2 = document.createElement("div")
  menuDiv2.className = 'menuDiv2'
  const pDiv = document.createElement('div')
  let menuImg2 = new Image()
  menuImg2.className = 'menuImg2'
  menuImg2.src = './public/istockphoto-1325172440-612x612.jpg'
  menuImg2.alt = "Image of pasta."
  const menuP2 = document.createElement('p')
  menuP2.innerHTML = "Spaghetti topped with your choice of homemade marinara (V) or meat sauce prepared fresh daily."
  const menuh22 = document.createElement("h2")
  menuh22.innerHTML = "Spaghetti"
  menuDiv.appendChild(menuDiv2)
  pDiv.appendChild(menuh22)
  pDiv.appendChild(menuP2)
  menuDiv2.appendChild(pDiv)
  menuDiv2.appendChild(menuImg2)

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
  let menuButton = document.querySelector('#menu').addEventListener('click', () => {
    menuButtonPressed()
  })
  
  let contactButton = document.querySelector('#contact').addEventListener('click', () => {
    contactButtonPressed()
  })
  
  let homeButton = document.querySelector('#home').addEventListener('click', () => {
    homeButtonPressed()
    console.log("home button pressed")
  })
  

}

function contactButtonPressed () { 
  document.body.replaceChildren()
  const div1 = document.createElement('div')
  document.body.appendChild(div1)
  const div = document.createElement('div')
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  const button1 = document.createElement('button')
  const button2 = document.createElement('button')
  const button3 = document.createElement('button')
  h1.innerHTML = "Restaurant"
  div1.appendChild(div)
  div1.appendChild(h1)
  div1.appendChild(header)
  const menuDiv = document.createElement("div")
  const pDiv2 = document.createElement('div')
  pDiv2.className = 'pDiv2'
  menuDiv.className = "menuButtonDiv"
  
  const menuP = document.createElement('p')
  menuP.innerHTML = "Phone: (123)456-7890 <br> Email: abc123@gmail.com"
  const menuh2 = document.createElement("h2")
  menuh2.innerHTML = "Contact Us"
  const pContainer = document.createElement('div')
  pContainer.className = 'pContainer'
  pContainer.appendChild(menuh2)
  pContainer.appendChild(menuP)
  pDiv2.appendChild(pContainer)
  menuDiv.appendChild(pDiv2)
  div1.appendChild(menuDiv)


  const menuDiv2 = document.createElement("div")
  menuDiv2.className = 'menuDiv2'
  const pDiv = document.createElement('div')
  menuDiv.appendChild(menuDiv2)
  menuDiv2.appendChild(pDiv)


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
  let menuButton = document.querySelector('#menu').addEventListener('click', () => {
    menuButtonPressed()
  })
  
  let contactButton = document.querySelector('#contact').addEventListener('click', () => {
    contactButtonPressed()
  })
  
  let homeButton = document.querySelector('#home').addEventListener('click', () => {
    homeButtonPressed()
    console.log("home button pressed")
  })
  

}


// function contactButtonPressed () {
//   document.querySelector('#app').innerHTML = `
  
//   `
// }

// setupCounter(document.querySelector('#counter'))
