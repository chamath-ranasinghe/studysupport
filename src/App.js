import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Signin from "./Pages/Signin";

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </Router>
  );
}

export default App;
