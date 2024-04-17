import Navbar from "../Components/NavBar";
import CardContainer from "../Components/CardContainer";
import IntoCard from "../Components/IntroCard";
import FeaturetteContainer from "../Components/FeaturetteContainer";
import Chatbot from "../Components/Chatbot";


function Home() {
  return (
    <div>
    <Navbar isSignin={false}/>  
    <IntoCard/>
    <CardContainer/>
    <FeaturetteContainer/>
    <Chatbot/>
    </div>
  );
}

export default Home;