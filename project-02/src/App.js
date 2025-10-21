import Expenses from "./components/Expenses";
import React,{Fragment} from "react";
function App(props) {
  return (
    <Fragment >
      <Expenses id = {props.id}></Expenses>
    </Fragment>
  );
}

export default App;
