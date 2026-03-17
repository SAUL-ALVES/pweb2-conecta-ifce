import Footer from '@/shared/components/footer'
import NavBar from '@/shared/components/navbar'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <NavBar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
