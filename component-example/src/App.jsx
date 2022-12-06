import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// terinary operation 
// condition ? true code here: fose conde here

// let num =10;

// num > 10? console.log("Greater than 10"): console.log("less than or equal to 10")

// const isNumGreaterThan10 = num > 10 ? num - 10: num; 

function ConditionalComponent(props){
  return (
    <div>
      {props.showComponent1 ? 
        <div>Component 1</div>
      :
        <div>Component 2</div>
      }
    </div>
  )
}

function YoutubeComponent(props){
  return(
    <div className="container">
      <img src={props.thumbnailImg} />
        <div className="content">
          <p>{props.videoTitle}</p>
          <p>{props.uploader}</p>
          <p>{props.videouploaded}</p>
          <p>{props.views}</p>
        </div>
    </div>
  )
}


function App() {
 
  const listOfViews = [
    {
      thumbnailImg:"https://via.placeholder.com/600x400",
      videoTitle:"Why a cheesburger?",
      uploader:"Mark",
      videouploaded:"11/30/2022",
      views:10000 + " views"
  },
  {
    thumbnailImg:"https://via.placeholder.com/600x400",
    videoTitle:"Luis' big break",
    uploader:"Luis",
    videouploaded:"11/30/2022",
    views:20000 + " views"
},
{
  thumbnailImg:"https://via.placeholder.com/600x400",
  videoTitle:"How to make a taco",
  uploader:"CookingFoods",
  videouploaded:"11/30/2022",
  views:30000 + " views"
}

]

  return (
    <div className="app-container">
      {listOfViews.map((e) => {
        return (
        <YoutubeComponent thumbnailImg={e.thumbnailImg} 
        videoTitle={e.videoTitle} 
        uploader={e.uploader}
        videouploaded={e.videouploaded}
        views={e.views}  />
        )})}
    </div>
  )
}

export default App

// function App() {
//   const listOfPokemon = [
//     "pikachu",
//     "squirtle",
//     "munchlax"
//   ];


//   return (
//     <div className="app-container">
//       {/* the app contaier will  displayed next to each other b/c we used display:flex*/}
   
//         <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
//         videoTitle="Why a cheesburger?"
//         uploader="Mark"
//         videouploaded="11/30/2022"
//         views="10000 views"/>

//         <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
//         videoTitle="Luis' big break"
//         uploader="Luis"
//         videouploaded="11/30/2022"
//         views="20000 views"/>
        
//         <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
//         videoTitle="How to make a taco"
//         uploader="CookingFoods"
//         videouploaded="11/28/2022"
//         views="30000 views"/>

//         <ul>
//           <li>{listOfPokemon.find(pokemon => 
//             pokemon == "pikachu")}
//           </li>
        
//         {listOfPokemon.map(pokemon=>(
//           <li>{pokemon}</li>
//         ))}

//         </ul>
//         <ConditionalComponent showComponent1 = {false} />
//     </div>
//   )
// }

// export default App
