
import './App.css';
import React from 'react'; 

class App extends React.Component {
  constructor(){
    
   super();
   this.state = {
   fullName: "Ben Henia Amal",
   bio:"From theoretical physics to web development",
   imgSrc:"me.jpg",
   profession:"Astrophysics and Condensed Matter Physics graduate student",
   show:true,
   interval:null,
   count:0
 };
}
componentDidMount(){ 
  this.setState({
     interval: setInterval(()=>{
     this.setState({count: this.state.count+1});
 
     },1000),
   });
 }

 visibility=()=>{
  this.setState({
    show: !this.state.show
  })

}
render(){
return (
  <>
  <div className="profile">
     {this.state.show ?
        (<><img src={this.state.imgSrc} alt="Myphoto"></img>
        <h2>{this.state.fullName}</h2>
        <p>{this.state.bio}</p>
        <p className="prof">{this.state.profession}</p>
        <div className ="logos">
            <a href="https://github.com/Amal-benhenia">
                <img  src="github.png" alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/amal-ben-henia-a081a2215/" >
                <img  src="linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://www.facebook.com/amal.benhenia.39/" ><img  src="facebook.png" alt="facebook"></img></a>
                </div>
                <h3>{this.state.count}</h3>
                </>) : (<h2>Click button to show profile</h2>)
} 
      </div>
      <button onClick={this.visibility}>{this.state.show ? "Hide profile" : "Show profile" }</button> 
      </>
);
}
}






export default App;