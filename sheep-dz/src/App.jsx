import Header from './components/header'
import Sidebar from './components/sidebare'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="app-content">
          {/* Ton contenu principal */}
        </div>
      </div>
    </div>
  )
}

export default App