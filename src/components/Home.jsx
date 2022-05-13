import React from 'react'

export default function Home() {
  return (
    <div className="taskList p-5">
      <div className="col-lg-6 col-md-8 mx-auto text-center">
        <h1 className="fw-light name mb-5">Diogo Malagueta</h1>
        <p>API PORT 8080 INTERVAL 1 min</p>
        <ul className="socials">
          <li className="lead text-muted">
            <a href=" https://diogomalagueta.com" target="_blank">
            <i class="fa-solid fa-link"></i>
            </a>
          </li>
          <li className="lead text-muted mt-5">
            <a href=" https://www.linkedin.com/in/diogomalagueta/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="lead text-muted">
            <a href=" https://github.com/DMalagueta" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
