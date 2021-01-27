import React from 'react'

export default ({ id, title, description }) => (
  <div key={id} className="coffee">
    {`${title} (${description})`}
  </div>
)
