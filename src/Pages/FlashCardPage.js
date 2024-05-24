import { useContext } from "react";
import FlashCardInput from "../Components/FlashCardInput";
import FlashCardTile from "../Components/FlashCardTile";
import FlashCardTileContainer from "../Components/FlashCardTilesContainer";
import Navbar from "../Components/NavBar";
import { DataContext } from '../routes/UserRoute';

function FlashCardPage() {
    const data = useContext(DataContext);
    return (
        <div>
            <Navbar/> 
            <FlashCardInput items={data} />
            <FlashCardTile number={"1"}/>
            <FlashCardTile number={"2"}/>
            <FlashCardTile number={"3"}/>
            <FlashCardTileContainer/>
         
        </div>
    );
  }
  
  export default FlashCardPage;