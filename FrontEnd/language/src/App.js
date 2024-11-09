import './App.css';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext.js';
import Signup from './pages/Signup';
import Home from './pages/Home.js';
import Language from './pages/Language.js';
import LangDetails from './pages/LangDetails.js';
import Questions from './pages/Questions.js';

function App() {
  const { user }=useAuthContext();
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/languagequery' element={<LangDetails />} />
            <Route path='user/login'
            element={!user? <Login />: <Navigate to='/' />}
            />
            <Route
              path='user/signup'
              element={!user ? <Signup />: <Navigate to='/' />}
            />
            <Route path='/language' element={<Language />} />
            <Route path='/question' element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
