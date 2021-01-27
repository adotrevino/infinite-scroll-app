import React, { useEffect } from "react"

function Error({error}) {
  return (
    <div className="columns mt-4 tag is-danger title">
      {error}
    </div>
  )
}

export default Error