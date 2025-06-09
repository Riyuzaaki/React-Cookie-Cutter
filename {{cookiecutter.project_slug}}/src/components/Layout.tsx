import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 