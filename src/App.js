import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css';
import Notes from './components/Notes'
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import { AuthContextProvider } from './components/context/Authcontext';
import Profile from './components/Profile';
import Home from './components/Home';
function App() {
  return (

      <AuthContextProvider>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/notes' element={<Notes/>}></Route>
        <Route  path='/profile' element={<Profile/>}></Route>
        <Route  path='/blogs' element={<Blogs/>}></Route>
          <Route path='/*' element={<>
            <h1 className='mx-auto text-center text-red-500 font-bold'>Oops , Didn't match the adress you entered..</h1>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="404" className='mx-auto flex text-center top-4-10  w-60 h-60'></img>
        </>}>
          </Route>
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      
  );
}

export default App;
