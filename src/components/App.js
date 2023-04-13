import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(props){
  console.log(props.bio)
  return(
    <div id="about">
      <h1>About</h1>
      <p>{props.bio}</p>
    </div>
  )
}

// function Parenetcompont (){
//   return <Links url = "https://github.com/nwelchj"/>
// }
//   // const gitHub ="https://github.com/nwelchj"
//   const linkedIn = "https://www.linkedin.com/"


// function Links(props){
//   return(
//     <div>
//       <h3>Links</h3>
//       <a href={props.url}>Users Github link</a>
//       <a href={linkedIn}>User's LinkedIn link</a>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      
    </div>
  );
}

export default App;
