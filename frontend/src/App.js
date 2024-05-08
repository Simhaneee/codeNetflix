import "./App.css";
import Register from "./Components/Home/SignUp/register";
import SignIn from "./Components/Home/SignIn/signIn";
import HomeScreen from "./Components/Home/LandingPage/homeScreen";
import PathNotFound from "./NotFound/pathNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import AddMovie from "./Admin/AddMovie";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<PathNotFound />} />
          <Route path="/userDashboard" element={<Dashboard />} />
           <Route path="/userProfile"  element={<UserProfile/>}/>
           <Route path="/addMovie"  element={<AddMovie/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
