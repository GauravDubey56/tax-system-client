import React from 'react'

function AccDashboard() {
  return (
    <div>
      <h2>Role: Accountant</h2>
      <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
        <a role="button" className="btn btn-secondary" href="../new">Create New Tax Due</a>
        <a role="button" className="btn btn-secondary">Edit current dues</a>
        <a role="button" className="btn btn-secondary">View payers</a>
        <a role="button" className="btn btn-secondary">View tax dues</a>
      </div>
    </div>
  )
}

export default AccDashboard