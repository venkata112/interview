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
import TableComp from './InterComponents/TableComp'
import Pyramid from './InterComponents/Pyramid'
import Button from './InterComponents/Button'
import Modal from './InterComponents/Modal'
import HOC from './InterComponents/HOC'
import FormValid from './InterComponents/FormValid'
import ImageSlides from './InterComponents/ImageSlides'






class NavigationCmp extends Component {
    render() { 
        return ( 
            <div> 

            <Router>
            <div>
            <div  className="sidebar">
                <ul className='nav'>
                    <li><Link className='nav' to = {'/'} style={{ textDecoration: 'none' ,color:'white'}}>Axioscmp</Link></li>
                    <li><Link className='nav' to = {'/Child'} style={{ textDecoration: 'none' ,color:'white'}}>Child</Link></li>
                     <li><Link className='nav' to = {'/ChildToParent'} style={{ textDecoration: 'none' ,color:'white'}}>ChildToParent</Link></li>  
                     <li><Link className='nav' to = {'/FormComp11'} style={{ textDecoration: 'none',color:'white' }}>FormComp11</Link></li>  
                     <li><Link className='nav' to = {'/AxiosCmp'} style={{ textDecoration: 'none' ,color:'white'}}>AxiosCmp</Link></li>  
                     <li><Link className='nav' to = {'/AxiosPostCmp'} style={{ textDecoration: 'none' ,color:'white'}}>AxiosPostCmp</Link></li>
                     <li><Link className='nav' to = {'/AxiosDelCmp'} style={{ textDecoration: 'none' ,color:'white'}}>AxiosDelCmp</Link></li>  
                     <li><Link className='nav' to = {'/FormValid'} style={{ textDecoration: 'none' ,color:'white'}}>FormValid</Link></li> 
                     <li><Link className='nav' to = {'/ControlledCmp'} style={{ textDecoration: 'none' ,color:'white'}}>Controlled</Link></li> 
                     <li><Link className='nav' to = {'/UnControlledCmp'} style={{ textDecoration: 'none' ,color:'white'}}>UnControlled</Link></li>  
                     <li><Link className='nav' to = {'/PureComp'} style={{ textDecoration: 'none' ,color:'white'}}>PureComp</Link></li>  
                     <li><Link className='nav' to = {'/TableComp'} style={{ textDecoration: 'none' ,color:'white'}}>TableComp</Link></li>  
                     <li><Link className='nav' to = {'/Pyramid'} style={{ textDecoration: 'none' ,color:'white'}}>Pyramid</Link></li>
                     <li><Link className='nav' to = {'/Button'} style={{ textDecoration: 'none' ,color:'white'}}>Button</Link></li>
                     <li><Link className='nav' to = {'/Modal'} style={{ textDecoration: 'none' ,color:'white'}}>Modal</Link></li>
                     <li><Link className='nav' to = {'/HOC'} style={{ textDecoration: 'none' ,color:'white'}}>HOC</Link></li>
                     <li><Link className='nav' to = {'/ImageSlides'} style={{ textDecoration: 'none' ,color:'white'}}>ImageSlides</Link></li>
                                   
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
                    <Route exact path = '/TableComp' component={TableComp}/>                  
                    <Route exact path = '/Pyramid' component={Pyramid}/>  
                    <Route exact path = '/Button' component={Button}/>                  
                    <Route exact path = '/Modal' component={Modal}/>                  
                    <Route exact path = '/HOC' component={HOC}/>     
                    <Route exact path = '/FormValid' component={FormValid}/>     
                    <Route exact path = '/ImageSlides' component={ImageSlides}/>     
                    
                    </div>
                </Switch>
            </div>
           </Router>
           </div>
         );
    }
}
 
export default NavigationCmp;
