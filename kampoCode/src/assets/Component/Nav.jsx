


const Nav = () => {
    return (
        <header className="hero">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid bg-transparent d-flex justify-content-around" id="nav-space">
                    <a className="navbar-brand text-white" href="#">KampoCode</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-white"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;