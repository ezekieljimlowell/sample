import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';
import SignupForm from './Components/Signup/SignupForm';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const loginInfo = useSelector(state => state?.reducer?.userList)
  console.log(loginInfo);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/adduser" element={<SignupForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
