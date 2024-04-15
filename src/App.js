import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import FlashCardPage from "./Pages/FlashCardPage";

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/flashcardpage" element={<FlashCardPage />} />
            </Routes>
        </Router>
  );
}

export default App;
