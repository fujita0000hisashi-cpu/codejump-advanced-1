import './style.css'
import { Header } from './components/Header'

import { Pickup } from './components/Pickup'
import { MainLayout } from './components/MainLayout'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='page'>
      <Header />
      <Pickup />
      <MainLayout />
      <Footer />
    </div>
  )
}

export default App
