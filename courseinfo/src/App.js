import { Content } from "./Content/Content"
import { Header } from "./Header/Header"
import { Total } from "./Total/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
     <Header course = {course} />
     <Content 
      // part1 = {parts[0]}
      // part2 = {parts[1]}
      // part3 = {parts[2]}
      parts={course.parts} 
     
     />
      
     <Total 
    //  exercises1 = {parts[0].exercises}
    //  exercises2 = {parts[1].exercises}
    //  exercises3 = {parts[2].exercises}
    parts={course.parts} 
     
     />
    
    </>
   
    
  )
}

export default App