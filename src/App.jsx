import PageTitle from './components/Title'
import Footer from './components/Footer'
import Hobbies from './components/hobbies/Hobbies'
import './App.css'

function App() {
  return (
    <div className="page-layout">
      <PageTitle />
      <Hobbies />
      <Footer />
    </div>
  )
}
export default App