import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatScreen from './pages/ChatScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat' element={<ChatScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App