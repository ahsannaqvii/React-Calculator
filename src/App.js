import "./App.css";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [result, setResult] = useState("");
  const onClickHandler = (event) => {
    setResult(result.concat(event.target.name));
  };
  const clearResult = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0,result.length -1));
  };
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error");
      // setResult("");
    }
    
  };
  return (
    <div className="container">
      <form>
        <input className="inputform" type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clearResult} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={backSpace} id="backspace">
          C
        </button>
        <button className="highlight" name="/" onClick={onClickHandler}>
          &divide;
        </button>
        <button name="7" onClick={onClickHandler}>
          7
        </button>
        <button name="8" onClick={onClickHandler}>
          8
        </button>
        <button name="9" onClick={onClickHandler}>
          9
        </button>
        <button className="highlight" name="*" onClick={onClickHandler}>
          &times;
        </button>
        <button name="4" onClick={onClickHandler}>
          4
        </button>
        <button name="5" onClick={onClickHandler}>
          5
        </button>
        <button name="6" onClick={onClickHandler}>
          6
        </button>
        <button className="highlight" name="-" onClick={onClickHandler}>
          &ndash;
        </button>
        <button name="1" onClick={onClickHandler}>
          1
        </button>
        <button name="2" onClick={onClickHandler}>
          2
        </button>
        <button name="3" onClick={onClickHandler}>
          3
        </button>
        <button className="highlight" name="+" onClick={onClickHandler}>
          +
        </button>
        <button name="0" onClick={onClickHandler}>
          0
        </button>
        <button name="." onClick={onClickHandler}>
          .
        </button>
        <button className="highlight" onClick={calculate} id="result">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
