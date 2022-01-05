import logo from './logo.svg';
import './App.css';
import MobileLayout from "./layout";
import {BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import ProfilePage from "./pages/profile/profile";
import HomePage from "./pages/home/home";
import ChatPage from "./pages/chat/chat";
import EventsPage from "./pages/events/events";
import GroupsPage from "./pages/groups/groups";
import LabelBottomNavigation from './components/Footer';
import NearYou from "./pages/events/near_you";
import EventDetail from "./pages/events/detail";
import GroupDetail from "./pages/groups/detail";
import GroupPostDiscussion from "./pages/groups/postDiscussion"
import CreateEvent from "./pages/events/create";
import AddPost from "./pages/home/add_post";
import PostDetail from "./pages/home/post_detail";

const footerStyle = {
  position: "absolute",
  bottom: "0px",
  // left: "500px",

}

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <MobileLayout>
            <div style={{
                width: '100%',
                height: '100%',
                marginBottom: 60,
                overflowY: 'auto',
            }}>
            <Routes>
                <Route path={'/profile'} element={<ProfilePage/>} />
                <Route path={'/chat'} element={<ChatPage/>} />
                <Route path={'/events'} element={<EventsPage/>}/>
                <Route path={'/events/near-you'} element={<NearYou/>}/>
                <Route path={'/events/create'} element={<CreateEvent/>}/>
                <Route path={'/events/:id'} element={<EventDetail/>}/>


                <Route path={'/groups'} element={<GroupsPage/>} />
                <Route path={'/home/add-post'} element={<AddPost/>} />
                <Route path={'/home/posts/:id'} element={<PostDetail/>}/>
                <Route path={'/groups/:id'} element={<GroupDetail/>}/>
                <Route path={'groups/postdiscussion'} element={<GroupPostDiscussion/>} />
                <Route path={'/home'} element={<HomePage/>} />
                <Route path="/" element={<Navigate to={"/home"}/>}/>


            </Routes>
            </div>
            <div style={footerStyle}>
                <LabelBottomNavigation />
            </div>

        </MobileLayout>

    </div>

      </BrowserRouter>
  );
}

export default App;
