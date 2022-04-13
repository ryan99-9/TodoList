// export default App;
import React from "react"
import {
  FormControl,
  Button
} from 'react-bootstrap'
//import component
import ToDoItem from '../component/ToDoItem'
import { getData,deleteData,completedData,addData } from '../redux/actions'
import { connect } from 'react-redux'



class TodoPages extends React.Component {
  fetchData = () => {
    this.props.getData()
  }

  componentDidMount() {
    this.fetchData()
  }

  onDelete = (id) => {
    this.props.deleteData(id)
  }

  onComplete = (id) => {
    this.props.completedData(id)
  }

  showData = () => {
    return (
      this.props.listActivity.map(item => {
        return (<ToDoItem
          ayam={item}
          key={item.id}
          delete={() => this.onDelete(item.id)}
          complete={() => this.onComplete(item.id)}
        />)
      })
    )
  }

  onAdd = () => {
    let newTodo = this.refs.todo.value

    let obj = {
      name: newTodo,
      isCompleted: false
    }
    this.props.addData(obj)

    this.refs.todo.value = ''
  }


  render() {
    return (
      <div style={styles.container}>
        <h1>To Do List</h1>
        {this.showData()}
        <div style={styles.input}>
          <FormControl
            placeholder="Input New Todo"
            ref="todo"
          />
          <Button variant="info" onClick={this.onAdd} classname="ml-2">Add</Button>
        </div>
      </div>
    )
  }
}
const styles = {
  container: {
    padding: '15px'
  },
  input: {
    width: '25vw',
    display: 'flex'
  }
}

const mapStateToProps = (state) => {
  return {
    listActivity: state.todo.activities,
  }
}
export default connect(mapStateToProps, { getData,deleteData,completedData,addData })(TodoPages)