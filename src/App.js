
import './App.css'
import UseRandomJoke from './UseRandomJoke'

export default function App() {

   const joke = UseRandomJoke("daniel","martha");
return (
  <div>
      <form>
        <center>
          <h2>{joke}</h2>
     
          <input type="text"
          
          />

          <button>Generate Joke</button>
        </center>
      </form>
     
    </div>
)
}
