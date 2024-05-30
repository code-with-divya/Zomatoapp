import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import zomato_logo from'./img/zomato_logo.webp'




export function Navbar(){

    return(
    <>
    <div class="navv">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <img src ={zomato_logo} alt = "Zomato Logo" class = "logo" />
    <a class="navbar-brand" href="#">| Investors Relstions</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Financials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Announcement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Governance</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ESG
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">ESG Initiatives</a></li>
            <li><a class="dropdown-item" href="#">ESG Microsite</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </>

    )
}