//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        TS Amazona
      </header>
      <main>
        <ul>
        {
        
        sampleProducts.map( (product) => (
        <li key ={product.slug}>
          <img src={product.image} alt={product.name} className ="product-image"></img>
          <h2>{product.name}</h2>
          <h2>${product.price}</h2>
        </li>
        ))}
        </ul>

      </main>
      <footer>
        All right reserved
      </footer>
    </div>
  )
}

export default App
