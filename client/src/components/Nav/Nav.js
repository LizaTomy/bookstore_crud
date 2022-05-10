import { Link } from 'react-router-dom'



const Nav = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand text-dark" to="#">Bookstore App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/getbooks">Books</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/admin">Dashboard</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/addbook">Add Book</Link>
          </li>

         
          

          
          
        
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark  text-white btn-outline-light" type="submit">Search</button>
        </form>
      </div> 
    </div>
  </nav>
      </>

    );


}

export default Nav;