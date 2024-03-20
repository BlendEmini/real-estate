import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Header from "./components/Header";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
