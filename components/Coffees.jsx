import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  return (
    <div className="page">
      <div className="title">Choose the Coffees</div>
      <div className="subtitle">A searchable list of all your favorite coffees</div>
      <input type="text" name="search" onChange={event => setSlug(event.target.value)} />
      <div className="slug">{slug}</div>
    </div>

  )
}
