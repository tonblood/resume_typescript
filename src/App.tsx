import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './Components/Resume/Resume';
import Loginpage from './Components/Login/Loginpage';
import TodoList from './Components/todominiProject/TodoList';
import PrivateRoute from './Components/PrivateRoute';
import Feedpost from './Components/Postaxios/Feedpost';
import Flashcard from './Components/Flashcard/Flashcard';
import ChartJS from './Components/ChartJS/ChartJS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Loginpage />} />
        <Route path="/" element={<PrivateRoute />} > */}
          <Route path='/' element={<Resume />} />
          {/* <PostContext.Provider value={{post,setPost}} > */}
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/feedpost' element={<Feedpost />} />
          <Route path='/flashcard' element={<Flashcard/>}/>
          <Route path='/chart' element={<ChartJS total={10} complete={0} uncomplete={10}/>} />
          {/* </PostContext.Provider> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
