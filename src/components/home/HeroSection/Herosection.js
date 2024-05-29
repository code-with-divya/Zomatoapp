import './Herosection.css'
import Zomatologo from './img/Zomatologo.avif'

function Herosection(){
    return(
        <>
        <section class = "hero__section">
			<header>
				<nav class = "navbar">
					<a href = "#">Get the App</a>
					<div class = "navbar__menu_container">
						<a href = "#" class = "link" >Investor Relations</a>
						<a href = "#" class = "link" >Add Restaurants</a>
						<a href = "#" class = "link" >Login</a>
						<a href = "#" class = "link" >Sign Up</a>
						<a href = "#" class = "user_icon"><i class="fa-solid fa-user"></i></a>
					</div>
				</nav>
			</header>
			<div class = "hero__section_container">
				<img src ={Zomatologo} alt = "Zomato Logo" class = "hero__section_logo" />
				<h1 class = "hero__section_heading">Discover the best food & drinks in Pune</h1>
				<div class = "hero__section_container_input">
					<i class="fa-sharp fa-solid fa-location-dot" id = "location_icon"></i>
					<select class = "hero__section_input_location">
						<option>Pune</option>
						<option>Mumbai</option>
						<option>Banglore</option>
						<option>Delhi</option>
					</select>
					<i class="fa-solid fa-magnifying-glass" id = "search_icon"></i>
					<input class = "hero__section_input_search" type = "text" placeholder = "Search for a restaurant, cuisine or a dish" />
				</div>
			</div>
		</section>
        </>
    )
}
export default Herosection;