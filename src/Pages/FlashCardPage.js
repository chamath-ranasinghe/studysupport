import FlashCardInput from "../Components/FlashCardInput";
import FlashCardTile from "../Components/FlashCardTile";
import FlashCardTileContainer from "../Components/FlashCardTilesContainer";
import Navbar from "../Components/NavBar";

function FlashCardPage() {
    return (
        <div>
            <Navbar/> 
            <FlashCardInput/>
            <FlashCardTile number={"1"}/>
            <FlashCardTile number={"2"}/>
            <FlashCardTile number={"3"}/>
            <FlashCardTileContainer/>
         
        </div>
    );
  }
  
  export default FlashCardPage;