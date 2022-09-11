import Topbar from './components/topbar/Topbar';
import HomePage from './pages/homepage/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const currntUser = true;
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/posts" element={<HomePage />} />
          <Route
            path="/register"
            element={currntUser ? <HomePage /> : <Register />}
          />
          <Route
            path="/login"
            element={currntUser ? <HomePage /> : <Login />}
          />
          <Route path="post/:id" element={<Single />} />
          <Route path="/write" element={currntUser ? <Write /> : <Login />} />
          <Route
            path="/setting"
            element={currntUser ? <Settings /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
