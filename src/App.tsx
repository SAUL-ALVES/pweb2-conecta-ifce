import { Button } from './components/ui/button'

import NavBar from './components/shared/navbar'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <NavBar />
        <main className='flex-1'>Contéudo Principal</main>
        <footer>Rodapé</footer>
      </div>
    </>
  )
}

export default App
