import React from 'react'
import NavigationBar from './component/Navbar.jsx'
import ToDoItem from './component/ToDoItem.jsx'
// import TodoPages from './pages/TodoPages'



class App extends React.Component {
  render () {
    return(
      <div>
        <NavigationBar />
        <ToDoItem />
        {/* <TodoPages/> */}
      </div>
    )
  }
}

export default App