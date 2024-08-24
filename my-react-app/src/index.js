import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);  // Render the JSX element to the DOM

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<p>Hello</p>);

// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );

// const myelement = (
//     <>
//       <h1>I am a Header.</h1>
//       <h1>I am a Header too.</h1>
//     </>
//   );

// const myElement = <input type="text" />;


//react JSX
// const x = 5;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);

//JSX conditions
// const x = 54;
// const myElement = <h1>{(x) < 10 ? "true" : "false"}</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//react component
// function Car() {
//     return <h2>Hi, I am a Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


//props 
// function Car(props) {
//     return <h2>I am a {props.color} Car!</h2>;
// }

// root.render(<Car color="blue" />);  


// function Car() {
//     return <h2>I am a Car!</h2>;
// }

// function Garage() {
//     return (
//         <>
//             <h1>Who lives in my Garage?</h1>
//             <Car />
//         </>
//     );
// }

// root.render(<Garage />);


//components in files
//importing from the Car.js

// root.render(<Car />);   

//classes in react  
// class Caar extends React.Component {
//     render() {
//         return <h2>Hi, I am a Car!</h2>
//     }
// }

// const container = document.getElementById('root');
// root.render(<Caar />);  

//react component

// class Carr extends React.Component {
//     render() {
//         return <h2>This is a React Component using Class</h2>
//     }
// }

// root.render(<Carr />);  

//component constructor
// class Carrr extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"};
//     }
//     render() {
//         return <h2>I am a {this.state.color} Car!</h2>;
//     }
// }

// root.render(<Carrr />);

//props
class Acr extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}

root.render(<Acr color="orange"/>);         