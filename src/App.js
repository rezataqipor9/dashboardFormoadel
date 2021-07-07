import React from "react";
import Main from "./component/main";
import { FaBlackTie } from "react-icons/fa";
import "./App.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import FeaturesComponent from "./pages/features";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const routes = [
  {
    path: "/",
    id:1,
    exact: true,
    sidebar: () => <div className='sidebar-text'><AiOutlineHome style={{fontSize:'1.5rem'}}/> Home!</div>,
    main: () => <h2 >Home</h2>
  },
  {
    path: "/features",
    id:1,
    sidebar: () => <div className='sidebar-text'><FaBlackTie style={{fontSize:'1.5rem'}}/>Features!</div>,
    main: () => <h2><FeaturesComponent/></h2>
  },
  {
    path: "/Setting",
    id:1,
    sidebar: () => <div className='sidebar-text'><IoSettings style={{fontSize:'1.5rem'}}/>Setting!</div>,
    main: () => <h2>Setting</h2>
  }
];
const App = () => {
  return (
    <Router>
    <Navbar/>
    <div style={{ display: "flex" }}>
        <div 
        
          style={{
            padding: "10px",
            width: "20vw",
            height:'100vh',
            
            
          }}
          className='side-bar'
        >
          <ul  style={{ listStyleType: "none", padding: 0,color:'white' }}>
            <li>
              <Link style={{width:'100%'}} to="/">Home</Link>
            </li>
            <li>
              <Link to="/Features">Features</Link>
            </li>
            <li>
              <Link to="/Setting">Setting</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.sd
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
            
          </Switch>
        </div>

        <div style={{ padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
