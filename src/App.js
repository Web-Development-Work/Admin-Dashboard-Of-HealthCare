import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader';
import HomeStatus from './components/HomeStatus';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TodoList from './components/TodoList';
import LogList from "./components/LogList"
import AddServiceUser from './components/AddServiceUser';
import UserList from './components/UserList';
import AddDocument from './components/AddDocument';
import DocumentList from './components/DocumentList';
import Login from './components/Login';
import UserChart from './components/UserChart';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <>
    <Router>
    
        {/* <Preloader /> */}

        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<HomeStatus/>}/>
            <Route exact path="/todolist" element={<TodoList/>}/>
            <Route exact path="/logs" element={<LogList/>}/>
            <Route exact path="/adduser" element={<AddServiceUser/>}/>
            <Route exact path="/userlist" element={<UserList/>}/>
            <Route exact path="/userchart" element={<UserChart/>}/>
            <Route exact path="/userdetails" element={<UserDetails/>}/>
            <Route exact path="/adddocument" element={<AddDocument/>}/>
            <Route exact path="/documentlist" element={<DocumentList/>}/>
        </Routes>
    </Router>
    </>
  );
}
export default App;
