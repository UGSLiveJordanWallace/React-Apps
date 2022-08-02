import './App.css';
import ChatApp from './components/ChatApp';
import FrontPage from './components/FrontPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/chat" element={<ChatApp />}/>
            <Route path="/" element={<FrontPage />}/>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
