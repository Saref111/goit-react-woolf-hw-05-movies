
import { Home } from "pages/Home/Home";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route/> */}
      </Routes>
    </div>
  );
};
