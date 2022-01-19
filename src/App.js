import * as React from "react";
import { render } from "react-dom";
import { FlipCard } from "./cart";

const number1 = 10;
const number2 = 35;
function App() {
  const [number, setNumber] = React.useState(59);
  const [number2, setNumber2] = React.useState(35);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setNumber((number) => number - 1);
    }, 1000);
    if (number === -1) {
      setNumber(59);
      setNumber2((state) => state - 1);
    }
    if (number2 === -1) {
    }
    return () => {
      clearInterval(timer);
    };
  }, [number]);

  function getTime() {
    var t = new Date();
    return {
      Total: t,
      Hours: t.getHours() % 12,
      Minutes: t.getMinutes(),
      Seconds: t.getSeconds(),
    };
  }
  function getTimeRemaining() {
    var t = Date.parse( new Date(Date.parse(new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000)))) - Date.parse(new Date());
    return {
      Total: t,
      Days: Math.floor(t / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((t / 1000 / 60) % 60),
      Seconds: Math.floor((t / 1000) % 60),
    };
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection:'column'
      }}
    >
      <div style={{width:"100vh",display:'flex',flexDirection:'row',marginBottom:30}}>
        <React.Fragment>
          <FlipCard>{getTime().Hours}</FlipCard>
        </React.Fragment>
        <div
          style={{
            margin: "0px 5px ",
            color: "black",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: 10,
          }}
        >
          :
        </div>
        <React.Fragment>
          <FlipCard>{getTime().Minutes}</FlipCard>
        </React.Fragment>
        <div
          style={{
            margin: "0px 5px ",
            color: "black",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: 10,
          }}
        >
          :
        </div>
        <React.Fragment>
          <FlipCard>{getTime().Seconds}</FlipCard>
        </React.Fragment>
      </div>
      <div style={{width:"100vh",display:'flex',flexDirection:'row'}}>
        <React.Fragment>
          <FlipCard>{getTimeRemaining().Hours}</FlipCard>
        </React.Fragment>
        <div
          style={{
            margin: "0px 5px ",
            color: "black",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: 10,
          }}
        >
          :
        </div>
        <React.Fragment>
          <FlipCard>{getTimeRemaining().Minutes}</FlipCard>
        </React.Fragment>
        <div
          style={{
            margin: "0px 5px ",
            color: "black",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: 10,
          }}
        >
          :
        </div>
        <React.Fragment>
          <FlipCard>{getTimeRemaining().Seconds}</FlipCard>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
