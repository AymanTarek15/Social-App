import './App.css';
import NavBar from './Components/NavBar';
import Applications from './Components/Applications';
import Posts from './Components/Posts'
import Friends from './Components/Friends'

function App() {
  return (
    <div className="parent">
      <NavBar />
      <div className="container-fluid text-center">
        <section className="row">
          <Applications />
          <Posts />
          <Friends />
        </section>
      </div>
    </div>
  )
}

export default App;
