
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import AddPost from "./pages/AddPost"
import EditPost from "./pages/EditPost"
import Login from "./pages/Login"
import { Box } from '@mui/material';
import { Nav, Topbar } from "./components/index";
import { createMedia } from '@artsy/fresnel';
import Category from './pages/Category';
import Users from './pages/Users'
function App() {
  let user = true;



  const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      sm: 0,
      md: 550,
      lg: 1024,

    },
  })
  return (
    <div className='bg-light' style={{ height: "100vh", width: "100vw" }}>


      <Router>




        <MediaContextProvider>
          <Media at='sm'>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {user && <Topbar />}
              <Routes>
                {user && <Route path='/' element={<Home />} />}
                {user && <Route path='/add' element={<AddPost />} />}
                {user && <Route path='/edit' element={<EditPost />} />}
                {user && <Route path='/posts' element={<Blogs />} />}
                {user && <Route path='/users' element={<Users />} />}
                {user && <Route path='/categories' element={<Category />} />}
                {!user && <Route path='/login' element={<Login />} />}

              </Routes>
            </Box>

          </Media>
          <Media at='md'>
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              {user && <Nav active={false} />}
              <Routes>
                {user && <Route path='/' element={<Home />} />}
                {user && <Route path='/add' element={<AddPost />} />}
                {user && <Route path='/edit' element={<EditPost />} />}
                {user && <Route path='/posts' element={<Blogs />} />}
                {user && <Route path='/users' element={< Users />} />}
                {user && <Route path='/categories' element={<Category />} />}
                {!user && <Route path='/login' element={<Login />} />}

              </Routes>
            </Box>
          </Media>
          <Media at='lg'>
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              {user && <Nav active={true} />}
              <Routes>
                {user && <Route path='/' element={<Home />} />}
                {user && <Route path='/add' element={<AddPost />} />}
                {user && <Route path='/edit' element={<EditPost />} />}
                {user && <Route path='/posts' element={<Blogs />} />}
                {user && <Route path='/users' element={<Users/>} />}
                {user && <Route path='/categories' element={<Category />} />}
                {!user && <Route path='/login' element={<Login />} />}

              </Routes>
            </Box>
          </Media>
        </MediaContextProvider>












      </Router>
    </div>
  );
}

export default App;
