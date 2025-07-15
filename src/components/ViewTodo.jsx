import React, { useEffect, useState } from 'react'
import NavTodo from './NavTodo'
import axios from 'axios'

const ViewTodo = () => {
    const [todosdata, setTodos] = useState(
        {
            "todos": []
        }
    )
    const [isLoading, changeLoading] = useState(true)

    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then((Response) => {
            setTodos(Response.data)
            changeLoading(false)
        }).catch(() => {
            alert("something went wrong!")
        })
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavTodo />
            <br />
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table table-striped table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>User Id</th>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Completed Status</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="d-flex align-items-center">
                                        <strong role="status">Loading...</strong>
                                        <div class="spinner-border ms-auto" aria-hidden="true"></div>
                                    </div> : <tbody>
                                        {todosdata.todos.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.todo}</td>
                                                <td>{value.completed ?
                                                    (<span className="badge bg-success">Completed</span>) :
                                                    (<span className="badge bg-danger">Pending</span>)}</td>
                                            </tr>
                                        ))}
                                    </tbody>}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo
