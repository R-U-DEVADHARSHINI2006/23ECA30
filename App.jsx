import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div>
          <h1 className='h'>CAMPUS NOTIFICATION MICROSERVICES</h1>
        </div>
        
      </section>
      <div><form>
        <label>Name:</label>
        <input type='text'></input><br></br>
     
        <label>Roll Number:</label>
        <input type='text'></input><br></br>
     
        <label>Department:</label>
       <select id="Departmrnt" name="Department">
    <option value="ece">Electronics and  Engineering</option>
    <option value="cse">Computer Science Engineering</option>
    <option value="aids">Artificial Intelligence and Data Science</option>
    <option value="it">Information Technology</option>
</select><br></br>
     
        <label>Mail Id:</label>
        <input type='text'></input><br></br>
      
        <label>Password:</label>
        <input type='password'></input><br></br>
        <button className='button'>Login</button>
      </form></div>
      
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          
          
         
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
           
          </svg>
         <hr></hr> <h2>Connect with our campus</h2>
          
          <ul>
            <li>
              <a href="https://www.kgkite.ac.in/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  
                </svg>
              Home
              </a>
            </li>
            <li>
              <a href="https://www.kgkite.ac.in/about-kgisl-institute-of-technology/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  
                </svg>
                About
              </a>
            </li>
            <li>
              <a href="https://www.kgkite.ac.in/programs/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  
                </svg>
                Acadamics
              </a>
            </li>
            <li>
              <a href="https://www.kgkite.ac.in/contact-us/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                 
                </svg>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
