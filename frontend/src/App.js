import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages and components
import Home from './page/Home.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classname="app">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
