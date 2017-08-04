import React from 'react'
import { Link } from 'react-router'


class MainMenu extends React.Component {
    render() {
        return <nav id="main-menu">
            <ul className="container">
                <li>
                    <Link to="/">
                        Strona główna
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        O mnie
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    }
}

export default MainMenu
