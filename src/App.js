import {useState, useRef}  from "react"
import './App.css'
import UseRandomJoke from './UseRandomJoke'

export default function App() {

const firstNameRef = useRef(null)
const lastNameRef = useRef(null)

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")

   const joke = UseRandomJoke(firstName,lastName);




   function jokeGenerator(event){
    event.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
   }

return (
  <div>
      <form>
        <center>
          <h2>{joke}</h2>
     
          <input type="text"
          name="firstName"
          placeholder="First Name"
          ref={firstNameRef}
          />
     
          <input type="text"
          name="lastName"
          placeholder="Last Name"
          ref={lastNameRef}
         
          />

          <button onClick={jokeGenerator}>Generate Joke</button>
        </center>
      </form>
     
    </div>
)
}
