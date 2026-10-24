//npm stands for node package manager. It is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

//node_modules is a folder that contains all the dependencies (packages) that your project needs to run. When you install a package using npm, it gets downloaded and stored in the node_modules folder. This folder is created in the root directory of your project and can contain thousands of files and folders, depending on the number of packages and their dependencies. It is important to note that the node_modules folder should not be manually edited or deleted, as it is managed by npm. Instead, you should use npm commands to add or remove packages as needed.

//vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
// 1. A development server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
// 2. A build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

/*import {useState} from 'react'

import './App.css'

function App(){
  return(
    <>
    <div><p>Hello world</p></div>
    <div>
      <p>this is a react app</p>
    </div>
    <Text display="yo"/>
    <Text display="hello"/> 
    </>
  )
}
//a component is a reusable piece of code that represents a part of the user interface. It can be a function or a class that returns a React element, which is a lightweight representation of what to render on the screen. Components can accept inputs called props and manage their own state, allowing for dynamic and interactive UIs. They can be composed together to build complex interfaces in a modular and maintainable way. 
//only one root element is allowed in a component. This means that when you define a component, it must return a single React element that wraps all other elements. If you need to return multiple elements, you can wrap them in a parent element like a <div> or use React fragments (<></>) to group them without adding extra nodes to the DOM. This restriction helps maintain a clear and consistent structure in the component tree.

function Text({display}){
  return(
    <div>
      <p>{display}</p>
    </div>
  );
}

//props are the inputs to a React component. They are passed to the component in the form of an object, and can be accessed within the component using dot notation. Props allow you to customize the behavior and appearance of a component, making it more flexible and reusable. They can be used to pass data from a parent component to a child component, and can also be used to trigger events or actions within a component. Props are read-only, meaning that they cannot be modified by the child component, but can be updated by the parent component.

export default App*/

//conditional rendering is a technique in React that allows you to render different components or elements based on certain conditions. It is often used to show or hide content, display different UI states, or handle user interactions. Conditional rendering can be achieved using JavaScript operators like if statements, ternary operators, or logical && operators within the JSX code. This allows for dynamic and responsive user interfaces that can adapt to changing data or user input.

/*const movieNumber=2;
  

  return (
    <>
    {movieNumber === 1 ? (
  <MovieCard movie={{title:"12 Angry Men", release_date:"1957-04-10", url:"https://m.media-amazon.com/images/M/MV5BMjA4N2E3YzAtYjQyMi00ZDI0LWIxYjgtM2Q1ZDY1ZDE3YjI0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"}}/>
) : (
  <>
    <MovieCard movie={{title:"The Shawshank Redemption", release_date:"1994-09-23", url:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"}}/>
    <MovieCard movie={{title:"The Godfather", release_date:"1972-03-24", url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"}}/>
    <MovieCard movie={{title:"The Dark Knight", release_date:"2008-07-18", url:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"}}/>
  </>
)}

    </>*/

//a react state is 