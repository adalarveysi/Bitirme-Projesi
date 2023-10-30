
import './App.css'
import { WeatherProvider } from './Context/WeatherContext'
import Province from './components/Province'
import Weather from './components/Weather'

function App() {

  return (
    <>
      <WeatherProvider>
      <Province/>
      <Weather/>
      </WeatherProvider>
    </>
  )
}

export default App
