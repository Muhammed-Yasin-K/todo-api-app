import React from 'react'
import NavTodo from './NavTodo'

const SearchTodo = () => {
  return (
    <div>
        <NavTodo/>
        <br />
       <h1 className="text-center">Search Todo</h1>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Enter title:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="button btn btn-secondary">Search</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchTodo
