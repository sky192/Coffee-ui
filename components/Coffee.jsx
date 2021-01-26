import React from 'react'

export default ({ id, title, description }) => (
  <div key={id}>
    {`${title} (${description})`}
  </div>
)
