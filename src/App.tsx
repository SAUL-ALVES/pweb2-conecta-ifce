import { Button } from './components/ui/button'

import NavBar from './components/shared/navbar'
import Footer from './components/shared/footer'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <NavBar />
        <main className='flex-1'>Contéudo Principal</main>
        <Footer/>
      </div>
    </>
  )
}

export default App
