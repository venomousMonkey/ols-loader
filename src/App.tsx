import './App.css'
import CardSkeleton from './components/CardSkeleton'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  return (
    <>
      <h1 className="blink">OLS is Loading</h1>
      <div>
        <CardSkeleton />
      </div>
      <div className="card">
        <BackgroundMusic />
      </div>
    </>
  )
}

export default App
