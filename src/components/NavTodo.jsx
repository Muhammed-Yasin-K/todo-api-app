import React from 'react'

const NavTodo = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TODO-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">Delete Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">View All Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavTodo
