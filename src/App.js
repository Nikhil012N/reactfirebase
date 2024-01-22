import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Image2pdf from './component/Image2pdf';
import UseRef from './component/UseRef';
import Usememo from './component/Usememo';
import Layout from './component/Layout';
import Protected from './component/Protected';
import DynamicForm from './component/DynamicForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/home" element={<Protected loggedWorking={Home} />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* 
            <Route exact path="home" element={<Home />} />
            <Route exact path="imgpdf" element={<Image2pdf/>} />
            <Route exact path="useref" element={<UseRef />} />
            <Route exact path="usememo" element={<Usememo/>} />
            <Route exact path="dynamic" element={<DynamicForm />} />
             */}
            <Route exact path="/imgpdf" element={<Protected loggedWorking={Image2pdf} />} />
            <Route exact path="/useref" element={<Protected loggedWorking={UseRef} />} />
            < Route exact path="/usememo" element={<Protected loggedWorking={Usememo} />} />
            <Route exact path="/dyamicform" element={<Protected loggedWorking={DynamicForm} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
