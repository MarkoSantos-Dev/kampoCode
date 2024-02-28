const Nav = () => {
    return (
        <header className="hero">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid d-flex justify-content-around mt-3" id="nav-space">
                        <a className="navbar-brand text-white" href="#">KampoCode</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-5" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        Courses
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <div className="container text-white text-center  mt-5">
                <h5 className="hero-content">
                    Lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet,
                    consectetur.  lorem ipsum dolor sit am Lorem
                </h5>
                <button className="btn text-white mt-3">Learn More</button>
                </div>
                <img src="./images/hero.png" className="img-fluid mx-auto d-block" alt="Hero image" />
            </div>
        </header>

    );
};

export default Nav;
