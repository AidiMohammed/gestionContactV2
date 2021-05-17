import React from 'react'
import {Link} from 'react-router-dom'
export default function PageNotFound() {
    return (
        <div>
            <h3>Page note found 404</h3>
            <Link to="/">Back to home page</Link>
        </div>
    )
}
