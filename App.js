import React from "react";
import  ReactDOM  from "react-dom/client";

const Header=()=>{
    return(
        <div className="header-container">
          
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlz25QIlCMRKVQialJlbT93VwxoopTDqlXQ&usqp=CAU" className="image"/>
            </div>
             
               
             <div className="nav-items">
             <ul>Home</ul>
                <ul>about</ul>
                <ul>contact-us</ul>
                <ul>cart</ul>
             </div>
        </div>
       
    )
}

const RestrauntCard=()=>{
    return(

        <div className="res-container">
 <div className="res-card">
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2023/02/Restaurant-Logo-Design-2-scaled.jpg" alt=""/>
        <h4>Name</h4>
        <h4>asian/south-indian</h4>
        <h4>rating</h4>
        <h4>Delivery time</h4>
        
    </div>
        </div>
       
    )
}

const Applayout=()=>{
   return(<div>
    <Header/>
    <RestrauntCard/>
   </div>)
}

let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
