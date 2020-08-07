import React from "react";
import "./App.css";

//Components
import FunctionGreet from "./FunctionGreet/Greet";
import ClassGreet from "./ClassGreet";
import Post from "./Post";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
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
