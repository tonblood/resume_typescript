import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './Components/Resume/Resume';
import Loginpage from './Components/Login/Loginpage';
import TodoList from './Components/todominiProject/TodoList';
import PrivateRoute from './Components/PrivateRoute';
import Feedpost from './Components/Postaxios/Feedpost';
import Flashcard from './Components/Flashcard/Flashcard';
import GoServiceForm from './Components/GoForm/GoServiceForm';
import Test from './Components/Test';
import ChartJS from './Components/ChartJS/ChartJS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/" element={<PrivateRoute />} >
          
          <Route path='/resume' element={<Resume />} />
          {/* <PostContext.Provider value={{post,setPost}} > */}
          <Route path='/resume/todolist' element={<TodoList />} />
          <Route path='/resume/feedpost' element={<Feedpost />} />
          <Route path='/resume/flashcard' element={<Flashcard/>}/>
          <Route path='/goserviceform' element={<GoServiceForm/>} />
          <Route path='/resume/test' element={<Test/>} />
          <Route path='/resume/chart' element={<ChartJS total={10} complete={0} uncomplete={10}/>} />
          {/* </PostContext.Provider> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
