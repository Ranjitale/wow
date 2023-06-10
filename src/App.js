import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import { AuthContextProvider } from './components/context/Authcontext';
import Profile from './components/Profile';
import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';
import BlogDetails from './components/BlogDetail';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route
            path="/*"
            element={
              <>
                <h1 className="mx-auto text-center text-red-500 font-bold">
                  Oops, the address you entered doesn't match any routes.
                </h1>
                <img
                  src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
                  alt="404"
                  className="mx-auto flex text-center top-4-10 w-60 h-60"
                ></img>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
