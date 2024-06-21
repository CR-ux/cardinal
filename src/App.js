import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';

const App = () => {


  const icoso = {
    backgroundImage: `url(${
        process.env.PUBLIC_URL + "/assets/icoso.jpeg"
    })`,
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "none",
    backgroundPosition: "center",
};
  return (
    <div style={icoso}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/journal" element={<Journal />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
