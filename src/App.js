import React from 'react';
import './App.css';
import Logo from './img/logo.svg';
import { Link, browserHistory } from 'react-router'
import FaLeftArrow from 'react-icons/lib/fa/arrow-left';


class App extends React.Component {
    render() {
      return (
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6">
                          <Link to="/reactstasapp"><img className="middle img-responsive" alt="logo" src={Logo} style={{width: 300}} /></Link>
                      </div>
                      {/*<div className="col-sm-6">*/}
                          {/*<FaLeftArrow size={24} style={{marginTop: 100, float: "right"}} onClick={browserHistory.goBack} />*/}
                      {/*</div>*/}
                      <div>
                          <button id="hirebutton">HIRE ME</button>
                      </div>
                  </div>
                  {/*<div className="">*/}
                      {/*<FaLeftArrow size={24} style={{margin: 50}} onClick={browserHistory.goBack} />*/}
                  {/*</div>*/}
                  <div>
                      {this.props.children}
                  </div>
                  <div>
                      <div className="text-center">
                          <FaLeftArrow size={24} style={{margin: 50}} onClick={browserHistory.goBack} />
                      </div>
                  </div>
              </div>
        )
      }
}
export default App;

