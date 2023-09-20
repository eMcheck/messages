import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import cls from './App.module.css';

import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';


function App() {
  return (
    <div className={cls.main}>
      <Router>
        <Header></Header>

        <Routes>
          <Route exect path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route exect path='/note/' element={<Note />} />
          <Route exect path='/note/:noteURL' element={<Note />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
