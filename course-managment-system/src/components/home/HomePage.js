import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>This is the HomePage</h1>
      <p>React, Router, Redux and Bootstrap for ultra-responsive web app</p>
      <Link to='/about' className="btn btn-primary btn-lg">
        learn more
      </Link>
    </div>
  )
}

export default HomePage
