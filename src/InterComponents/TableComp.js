import React, { Component } from 'react';
import './tablecmp.css';

var fil;
class TableComp extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                {name:'venkbvvvvvvvfdgd', age:26, id:1,addr: 'bengaluru'},
                {name:'harsha', age:25,addr: 'kadapa' ,id:2},
                {name:'koppolu', age:24,addr: 'ongole' ,id:3},
                {name:'buru', age:23,addr: 'visskapatnam' ,id:4},
                {name:'venkat', age:26,addr: 'Nellore' ,id:5}, 
                {name:'balaji', age:25,addr: 'visak' ,id:6},
                {name:'saiKumar', age:24,addr: 'ongole' ,id:7},
                {name:'Bandla Sreenu', age:23,addr: 'Bhadrachalam' ,id:8},
                {name:'Junnu', age:26,addr: 'unknown' ,id:9},
                {name:'akhil kandra', age:25,addr: 'Nellore' ,id:10},
                {name:'sowjanya', age:24,addr: 'Nandyal' ,id:11},
                {name:'buru', age:23,addr: 'bengaluru' ,id:12},
                {name:'venkat', age:26,addr: 'bengaluru' ,id:13},
                {name:'harsha', age:25,addr: 'bengaluru' ,id:14},
                {name:'koppolu', age:24,addr: 'bengaluru' ,id:15},
                {name:'buru', age:23,addr: 'bengaluru' ,id:16},
                {name:'venkat', age:26,addr: 'bengaluru' ,id:17},
                {name:'harsha', age:25,addr: 'bengaluru' ,id:18},
                {name:'koppolu', age:24,addr: 'bengaluru' ,id:19},
                {name:'buru', age:23,addr: 'bengaluru' ,id:20},
                {name:'koppolu', age:24,addr: 'bengaluru' ,id:21},
                {name:'buru', age:23,addr: 'bengaluru' ,id:22},
                {name:'venkat', age:26,addr: 'bengaluru' ,id:24},
                {name:'harsha', age:25,addr: 'bengaluru' ,id:25},
                {name:'koppolu', age:24,addr: 'bengaluru' ,id:26},
                {name:'buru', age:23,addr: 'bengaluru' ,id:27}
            ],
            one:[],
            pagination:true
        }
    }
    displaySix = (x) =>{
        switch(x){
            case 1 :
             fil = this.state.data.filter(function(val, ind){
                return ind<=5;
                   })
                   this.setState({one:fil, pagination:false})
            break;

            case 2 : 
            fil = this.state.data.filter(function(val, ind){
                        return ind>5&&ind<12;
                    })
                    this.setState({one:fil, pagination:false})
            break; 

            case 3 :
            fil = this.state.data.filter(function(val, ind){
                return ind>12&&ind<19;
                
            })
                 this.setState({one:fil, pagination:false})
            break; 
        
            case 4 :
            fil = this.state.data.filter(function(val, ind){
                return ind>19&&ind<26;
            })
                this.setState({one:fil, pagination:false})
            break; 
            // default :
            // return {...this.state}
        }

    }


    trailBy = () =>{
        console.log(this.state.two)
    }
  
    render() { 
        return ( <div>
            
                    <h1> Table Component </h1>
                   <div className='table'>
                   <div className="tr table-total stick">  
                        <div className="td th">
                             ID
                        </div>                       
                        <div className="td th">
                            Name
                        </div>
                        <div className="td th">
                            AGE
                        </div>  
                        <div className="td th">
                        Adress
                        </div>         
                  
                 </div>
                 <div >   
                        {   this.state.pagination ? 
                            this.state.data.map(el =>
                            ( <div className="tr table-total">
                              <div className="td">{el.id}  </div>
                              <div className="td">{el.name} </div>
                              <div className="td">{el.age} </div>
                              <div className="td">{el.addr}  </div>
                               </div>)
                           )
                           :
                           this.state.one.map(el =>
                            ( <div className="tr table-total">
                          <div className="td">{el.id}  </div>
                          <div className="td">{el.name} </div>
                          <div className="td">{el.age} </div>
                          <div className="td">{el.addr}  </div>
                           </div>)
                          )
                    }                       
               </div>
             </div>
             Pagination:
             <button className='li1' onClick={()=> this.displaySix(1)}>Prev</button>
             <button className='li1' onClick={()=> this.displaySix(1)}>1</button>
             <button className='li1' onClick={()=> this.displaySix(2)}>2</button>               
             <button className='li1' onClick={()=> this.displaySix(3)}>3</button>               
             <button className='li1' onClick={()=> this.displaySix(4)}>4</button>  
             <button className='li1' onClick={()=> this.displaySix(1)}>Next</button>



        </div>
    );
    }
}
 
export default TableComp;
