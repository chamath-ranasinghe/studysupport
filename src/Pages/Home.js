import Navbar from "../Components/NavBar";
import CardContainer from "../Components/CardContainer";
import IntoCard from "../Components/IntroCard";
import FeaturetteContainer from "../Components/FeaturetteContainer";


function Home() {
  return (
    <div>
    <Navbar/>  
    <IntoCard/>
    <CardContainer/>
    <FeaturetteContainer/>
    </div>
  );
}

export default Home;