import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Axioscmp from './Axioscmp';
import Child from './child'
import './navigation.css'
import ChildToParent from './ChildToParent';
import AxiosCmp from './interview/AxiosGetCmp'
import AxiosPostCmp from './interview/AxiosPostCmp'
import AxiosDelCmp from './interview/AxiosDelCmp'
import PureComp from './interview/PureComp';
import ControlledCmp from './interview/controlled'
import UnControlledCmp from './interview/uncontrolled'

class NavigationCmp extends Component {
    render() { 
        return ( 
            <div> 

            <Router>
            <div>
            <div  className="sidebar">
                <ul className='nav'>
                    <li><Link to = {'/'} style={{ textDecoration: 'none' }}>Axioscmp</Link></li>
                    <li><Link to = {'/Child'} style={{ textDecoration: 'none' }}>Child</Link></li>
                     <li><Link to = {'/ChildToParent'} style={{ textDecoration: 'none' }}>ChildToParent</Link></li>  
                     <li><Link to = {'/FormComp11'} style={{ textDecoration: 'none' }}>FormComp11</Link></li>  
                     <li><Link to = {'/AxiosCmp'} style={{ textDecoration: 'none' }}>AxiosCmp</Link></li>  
                     <li><Link to = {'/AxiosPostCmp'} style={{ textDecoration: 'none' }}>AxiosPostCmp</Link></li>
                     <li><Link to = {'/AxiosDelCmp'} style={{ textDecoration: 'none' }}>AxiosDelCmp</Link></li>  
                     <li><Link to = {'/AxiosDelCmp'} style={{ textDecoration: 'none' }}>FormValid</Link></li> 
                     <li><Link to = {'/ControlledCmp'} style={{ textDecoration: 'none' }}>Controlled</Link></li> 
                     <li><Link to = {'/UnControlledCmp'} style={{ textDecoration: 'none' }}>UnControlled</Link></li>  
                     <li><Link to = {'/PureComp'} style={{ textDecoration: 'none' }}>PureComp</Link></li>  

                                

                </ul>
             </div>
                <Switch>
                <div className="display">
                    <Route exact path = '/' component={Axioscmp}/>
                    <Route exact path = '/Child' component={Child}/>   
                    <Route exact path = '/ChildToParent' component={ChildToParent}/>
                    <Route exact path = '/AxiosCmp' component={AxiosCmp}/>
                    <Route exact path = '/AxiosPostCmp' component={AxiosPostCmp}/>
                    <Route exact path = '/AxiosDelCmp' component={AxiosDelCmp}/>
                    <Route exact path = '/PureComp' component={PureComp}/>
                    <Route exact path = '/ControlledCmp' component={ControlledCmp}/>
                    <Route exact path = '/UnControlledCmp' component={UnControlledCmp}/>
                    
                    
                </div>
                </Switch>
            </div>
           </Router>
           </div>
         );
    }
}
 
export default NavigationCmp;
