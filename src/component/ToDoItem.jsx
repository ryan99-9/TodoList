import React from "react";
import {
    Button,
    FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getData, completedData, deleteData,addData } from "../redux/actions";

class ToDoItem extends React.Component {
    ambilData = () => {
        return this.props.getData()
    }
    componentDidMount() {
        this.ambilData()
    }
    rubahData = (id) => {
        return this.props.completedData(id)
    }
    hapusData = (id) => {
        return this.props.deleteData(id)
    }
    tambahData = () => {
       let ambilTeks =  this.refs.todo.value
       let obj = {
           name : ambilTeks,
           isCompleted : false
       }
        this.props.addData(obj)

        this.refs.todo.value = ""
    }
    render() {
        console.log(this.props.list)
        return (
            <div>
                {this.props.list.map((item) =>
                    <div style={styles.container}>
                        <p style={styles.p}> ID {item.id}, {item.name}
                            {/* {this.props.ayam.id}, 
                {this.props.ayam.name} */}
                        </p>
                        <div>
                            <Button variant="success"
                                onClick={() => this.hapusData(item.id)}
                                className="me-2">Delete</Button>
                            <Button variant="primary"
                                onClick={() => this.rubahData(item.id)}
                                disabled={item.isCompleted}
                            >
                                {item.isCompleted ? "Finished" : "Completed"}
                            </Button>
                        </div>
                    </div>
                )}
                <div style={styles.input}>
                    <FormControl
                        placeholder="Input New Todo"
                        ref="todo"
                    />
                    <Button variant="info" onClick={this.tambahData} classname="ml-2">Add</Button>
                    {/* dua ini merender input dan button add */}
                </div>
            </div>


        )
    }
}
const styles = {
    container: {
        backgroundColor: 'salmon',
        width: '25vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    p: {
        margin: '0px'
    }
}
const mapStateTo = (take) => {
    return {
        list: take.todo.activities
    }
}

export default connect(mapStateTo, { getData, completedData, deleteData,addData })(ToDoItem)