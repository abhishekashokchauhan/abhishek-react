import React from "react";
import ReactDOM from "react-dom/client";

// Learning the JSX right now.
// Creating the React Element using the JSX
const JsxHeading = <h1 id="heading"> Hello Abhishek from the JSX</h1>;

// React component
// 2 types, Classbased and functional component.
// Classbased is the old way of writing the code
// Functional component is the new way

// What is the react functional component ?
// Is just a JS function which returns the JSX.
// First Letter has to be capital

const HeadingComponent = () => {
  return <h1>Hello From the functional component</h1>;
};

const number = 100;

const HeadingComponent2 = () => (
  <div>
    {JsxHeading}
    {number}
    <h1>Hello From the functional component</h1>
  </div>
);

// React.createElement is the javascript object
// When you render it , it becomes the HTML element
// Below is the way we can create it, but soon react developer realised that this
// is not developer friedly and hence they created something called is JSX.
// React can be developed without the JSX as well.

// Below is the way to create the react element only.
// const header = React.createElement("h1", { className : 'greeting' } , "Hello world abhishek!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render would replace the content in the DOM.
root.render(<HeadingComponent2 />);