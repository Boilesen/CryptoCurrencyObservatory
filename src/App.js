import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css";
import Charts from "./Components/Charts";
import Lista from "./Components/Lista";

const App = (props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/charts" component={Charts} />
      </Switch>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>thomas</h1>
//       </header>
//       <Charts />
//       <Lista />
//     </div>
//   );
// }

// export default App;