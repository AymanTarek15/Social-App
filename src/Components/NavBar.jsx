function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-dark">
            <div className="container-fluid nav-comp">
                <div className="nav-brand">
                    <a className="navbar-brand" href="#">
                        <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <form className="d-flex" role="search here">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav icons-middle">
                        <li className="nav-item">
                            <a href="#"> <i title="Home" className="fa-solid fa-house fa-xl"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i title="Friends" className="fa-solid fa-user-group fa-xl"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i title="Video" className="fa-solid fa-video fa-xl"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i title="Marketplace" className="fa-solid fa-shop fa-xl"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="right-icons collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-bars fa-xl"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-facebook-messenger fa-xl"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-bell fa-xl"></i></a>
                        </li>
                    </ul>

                </div>
                
            </div>
            <li className="nav-item">
                <a className="nav-link small-size-nav" href="#"><i className="fa-solid fa-bars fa-xl"></i></a>
            </li>
        </nav>)
}
export default NavBar