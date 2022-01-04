import logo from './logo.svg';
import './App.css';
import MobileLayout from "./layout";
import BottomNavbar from "./components/navbar";
import {BrowserRouter, Routes,Route, r } from "react-router-dom";
import ProfilePage from "./pages/profile/profile";
import HomePage from "./pages/home/home";
import ChatPage from "./pages/chat/chat";
import EventsPage from "./pages/events/events";
import GroupsPage from "./pages/groups/groups";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <MobileLayout>
            <div style={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
            }}>
            <Routes>
                <Route path={'/profile'} element={<ProfilePage/>} />
                <Route path={'/chat'} element={<ChatPage/>} />
                <Route path={'/events'} element={<EventsPage/>} />
                <Route path={'/groups'} element={<GroupsPage/>} />
                <Route path={'/home'} element={<HomePage/>} />
                <Route path={'/'} element={<HomePage/>} />


            </Routes>
            </div>
            <BottomNavbar/>

        </MobileLayout>
    </div>
      </BrowserRouter>
  );
}

export default App;
