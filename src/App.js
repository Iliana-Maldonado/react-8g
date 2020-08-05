import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import FunctionGreet from "./FunctionGreet";
import ClassGreet from "./ClassGreet";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet />
        <ClassGreet />
      </header>
      <Post
        title="Why, As A Mixed-Race Woman, I Struggle with My Whiteness"
        subtitle="by Sarah Valentine, Ph.D. in COSY"
        text="I grew up in Pittsburgh in a white family who taught me to identify as white."
        image="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
      />
    </div>
  );
}

export default App;
