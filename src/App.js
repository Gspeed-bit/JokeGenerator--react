import {useState}  from "react"
import './App.css'
import UseRandomJoke from './UseRandomJoke'

export default function App() {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")

   const joke = UseRandomJoke("daniel","martha");




   function jokeGenerator(event){
    event.preventDefault();
  
   }

return (
  <div>
      <form>
        <center>
          <h2>{joke}</h2>
     
          <input type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e)=>setFirstName(e.target.value)}
          />
     
          <input type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e)=>setLastName(e.target.value)}
          />

          <button onClick={jokeGenerator}>Generate Joke</button>
        </center>
      </form>
     
    </div>
)
}
