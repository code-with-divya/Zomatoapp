import Appdiv from "../../components/home/Appdiv/appdiv"
import Collectiondiv from "../../components/home/Collectionsdiv/collectiondiv"
import Herosection from "../../components/home/HeroSection/Herosection"
import Div3 from "../../components/home/div3/div3"
import Explore from "../../components/home/explore/explore"
import Footer from "../../components/home/footer/footer"
import Popularplace from "../../components/home/popularplace/popularplace"

// img hero
import Zomatologo from '..//../components/home/HeroSection/img/Zomatologo.avif';

// img div3
import dining from '../../components/home/div3/img/dining.avif'
import nightclub from '../../components/home/div3/img/nightclubs.avif'
import orderonline from '../../components/home/div3/img/orderonline.avif'

// collection
import rightarrow from '..//../components/home/Collectionsdiv/img/rightarrow.png'

// popularplace
import nextarrow from '..//../components/home/popularplace/nextarrow.png'

// appdiv
import mobile from '..//../components/home/Appdiv/img/mobile.avif'
import playstore from '..//../components/home/footer/img/playstore.webp'
import Applestore from '..//../components/home/footer/img/Applestore.webp'

// explore
import downarow from '..//../components//home/explore/downarrow.png'

// footer
import ZomatologoBlack from '..//../components/home/footer/img/ZomatologoBlack.avif'
import indianflag from '..//../components/home/footer/img/indianflag.webp'
import facebook from '..//../components/home/footer/img/facebook.png'
import instagramicon from '..//../components/home/footer/img/instagramicon.png'
import twittericons from '..//../components/home/footer/img/twittericons.png'
import youtube from '..//../components/home/footer/img/youtube.png'
import linkinicons from '..//../components/home/footer/img/linkedinicons.png'
import worldicon from '..//../components/home/footer/img/worldicon.png'

export default function Home(){
    return(
        <>
        <Herosection logo={Zomatologo}/>
        <Div3 img1={orderonline} img2={dining} img3={nightclub} />
        <Collectiondiv arrow={rightarrow}/>
        <Popularplace narrow={nextarrow} />
        <Appdiv appimg={mobile} play={playstore} apple={Applestore}/>
        <Explore darrow={downarow}/>
        <Footer play={playstore} apple={Applestore} flag={indianflag} ficon={facebook} iicon={instagramicon} ticon={twittericons} utub={youtube} licon={linkinicons} wicon={worldicon} zblack={ZomatologoBlack} />
        </>
    )
}