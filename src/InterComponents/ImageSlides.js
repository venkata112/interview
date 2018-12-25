import React, { Component } from 'react';
var clear;
class ImageSlides extends Component {
    state = { 
        images:[
            'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
            'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=beautiful-blur-bright-326055.jpg&fm=jpg',
            'https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif',
            'https://www.gettyimages.in/gi-resources/images/Homepage/Hero/US/SEP2016/prestige-476863311.jpg'
        ],
        index:0
     }

     handleNext = () =>{
         if(this.state.index<3){
         this.setState({index:this.state.index+1})
         }
         else{
         this.setState({index:0})

         }
     }
     handlePrev = () =>{
         if(this.state.index<=0){
         this.setState({index:3})
         }
         else{
         this.setState({index:this.state.index-1})

         }
    }

    slideImages = () =>{
       clear =  setInterval( ()=>{
            this.handleNext()
        },1000)
    }
    stopSlide = () =>{
        clearInterval(clear)
    }

    render() { 
        return ( 
            <div>
                <h2>This is Image Sliding Component </h2>
                <div>
                <button onClick = {this.handlePrev}>Prev</button>
                
                    <img src = {this.state.images[this.state.index]}  style = {{height:'300px',width:'450px'}}/>
                
                <button onClick = {this.handleNext}>Next</button>
                </div>
                <button onClick = {this.slideImages}>Slide Images</button>
                <button onClick = {this.stopSlide}>Stop Slide </button>


            </div>
         );
    }
}
 
export default ImageSlides;