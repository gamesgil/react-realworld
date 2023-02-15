import { Link, NavLink } from 'react-router-dom';


export function Header() {
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html">conduit</a>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            {/* Add "active" class when you're on that page"  */}
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""> <i className="ion-compose"></i>&nbsp;New Article </a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link" ><i className="ion-gear-a"></i>Settings</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" >Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/login?type=new" className="nav-link">Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}