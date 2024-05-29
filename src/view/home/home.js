import Appdiv from "../../components/home/Appdiv/appdiv"
import Collectiondiv from "../../components/home/Collectionsdiv/collectiondiv"
import Herosection from "../../components/home/HeroSection/Herosection"
import Div3 from "../../components/home/div3/div3"
import Explore from "../../components/home/explore/explore"
import Footer from "../../components/home/footer/footer"
import Popularplace from "../../components/home/popularplace/popularplace"

export default function Home(){
    return(
        <>
        <Herosection/>
        <Div3/>
        <Collectiondiv/>
        <Popularplace/>
        <Appdiv/>
        <Explore/>
        <Footer/>
        </>
    )
}