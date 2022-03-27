const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} tears old</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  
  console.log('Hello from component')
  return(
    
    <>
    <h1>Greting</h1>
    <Hello name="Maya" age = {26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
  </>
  )
  
}

export default App