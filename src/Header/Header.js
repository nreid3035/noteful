import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
           <Link to="/" id="home-link">
             <h1>Noteful</h1>           
           </Link>
        </header>
    )
}