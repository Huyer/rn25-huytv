import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Components/Detail";
import List from "./Components/List";
import Form1 from "./Components/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  List
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
