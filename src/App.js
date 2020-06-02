/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // main function which gets called in comment - "Adjust bottomBar............" 
function updateBottomHeight(){
  const gooeyMessage = document.getElementById("Gooey-Message");
  const bottomNav = document.getElementById("bottomNav");
  const topNav=document.getElementById("myTopnav");
  
  const messageHeight = parseInt(parseInt((window.getComputedStyle(gooeyMessage).height))+parseInt(parseInt(window.getComputedStyle(gooeyMessage).padding)*parseInt(2))+parseInt(parseInt(window.getComputedStyle(gooeyMessage).border)*parseInt(2)))+ "px";
  const bottomNavHeight=bottomNav.style.height;
  
  
  bottomNav.style.height = messageHeight;
  
  }
  
  
  // Adjust bottomBar according to gooey message on mobile devices.

  
  function adjustUserChatDiv(){

    if(screen.width<600){ 
      updateBottomHeight();
      }  
  
  document.getElementById("User-Message-Div").style.height= parseInt(parseInt(parseInt(window.scrollY) + parseInt(document.querySelector('#bottomNav').getBoundingClientRect().top))-parseInt(document.getElementById("myTopnav").style.height))+'px' ; 
  
  
  
  }
  
  function NavBarResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  


  return (    
  <>
      <div className="cover-img">
        <div className="container pruple-tint">
        
          <div className="topnav" id="myTopnav">
            <a className="active">Home</a>
            <a >Link 1</a>
            <a >Link 2</a>
            <a >About</a>
            <a style={{margin:"0",padding:"0"}}><img src={"./Journey-Site/img/logo.png"} style={{maxWidth:"220px", padding:"0",margin:"0"}}></img></a>

            <a href="javascript:void(0);" className="icon" onClick="NavBarResponsive()">
              <div ><b>|||</b></div>
            </a>
            <a style={{float:"right", background:"#fff", color:"#000000"}}>Start Journey</a>
          </div>


          <div id="User-Message-Div" style={{border:"solid 3px", borderColor:"#fff"}}>
            <a style={{color:"#fff", fontSize:"200%", height:"100px"}}>User image and scrollable chat content will be here..........</a>
             </div>


          <div className="bottomNav" id="bottomNav" style={{height:"230px", padding:"5px"}}>


            <img className="Gooey" src={"./Journey-Site/img/Gooey.svg"} ></img>

            <div className="Gooey-Message" id="Gooey-Message">
              Hey there I am gooey! Welcome to MovingBlcoks Tutorial Jounrey! I will be guiding you to know terasology better.terasology ttttttttt :)

</div>
          </div>

        </div>

      </div>
     
    {/* {adjustUserChatDiv} */}
    </>
  );
}

export default App;
