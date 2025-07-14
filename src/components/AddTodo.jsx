import React from 'react'
import NavTodo from './NavTodo'

const AddTodo = () => {
  return (
    <div>
        <NavTodo/>
        <br />
        <h1 className="text-center">Add Todo</h1>
        <br />
      <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">User Id:</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Id:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Title:</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Completed:</label>
                                   <select name="" id="" className="form-control">
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                   </select>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddTodo
