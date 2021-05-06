import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="link">
        <Link to='/'>goto display</Link>
        <Link to='/d2'>ABOUT ME</Link>
      </ul>
    </footer>
  )
}

export default Footer