import Navbar from "./Components/NavBar";
import CardContainer from "./Components/CardContainer";
import IntoCard from "./Components/IntroCard";
import Card from "./Components/Card";
import Featurette from "./Components/Featurette";


function App() {
  return (
    <div className="App">
    <Navbar/>  
    <IntoCard/>
    <CardContainer/>
    <Featurette/>
    </div>
  );
}

export default App;
