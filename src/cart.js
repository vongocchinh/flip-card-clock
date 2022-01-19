import * as React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";



export const FlipCard = ({ children }) => {
  const [currentNumber, setCurrentNumber] = React.useState(0);
  const previousNumber = usePrevious(currentNumber);
const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
      console.log(children);
    setCurrentNumber(children);
  }, [children]);

  const frontCardAnimation = useSpring({
    from: { transform: "rotateX(0deg)" },
    to: { transform: "rotateX(-180deg)" },
    delay: 0,
    config: config.slow,
    reset: true
  });

  const backCardAnimation = useSpring({
    from: { transform: "rotateX(180deg)" },
    to: { transform: "rotateX(0deg)" },
    delay: 0,
    config: config.slow,
    reset: true
  });
  React.useEffect(() => {
    if(currentNumber){
        setOpen(true)
    }else{
        setOpen(false);
    }
  }
  ,[currentNumber])
  return (
    <Container>
      <StaticCardTop>
        <span>{currentNumber}</span>
      </StaticCardTop>
      <StaticCardBottom>
        <span>{previousNumber}</span>
      </StaticCardBottom>

      {open ? (
        <>
          <AnimatedCardFront style={frontCardAnimation}>
            <span>{previousNumber}</span>
          </AnimatedCardFront>
          <AnimatedCardBack style={backCardAnimation}>
            <span>{currentNumber}</span>
          </AnimatedCardBack>
        </>
      ) : null}
    </Container>
  );
};

const usePrevious = (currentValue) => {
  const previousValue = React.useRef(0);
  React.useEffect(() => {
    previousValue.current = currentValue;
  }, [currentValue]);
  return previousValue.current;
};

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 24px;
  grid-template-rows: 12px 12px;
  grid-template-areas: "top" "bottom";
  width: 24px;
  height: 24px;
  perspective-origin: 50% 50%;
  background-color: black;
  border-radius: 3px;
`;

const StaticCardTop = styled("div")`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-area: top;
  overflow: hidden;
  background-color: black;
  border-radius: 3px;
  span {
    font-size: 15px;
    font-weight:300;color:white;
    transform: translateY(30%);
  }
`;

const StaticCardBottom = styled("div")`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-area: bottom;
  overflow: hidden;
  background-color: black;
  border-radius: 3px;

  span {
    font-size: 15px;
    font-weight:300;color:white;
    transform: translateY(-70%);
  }
`;

const AnimatedCardFront = styled(animated.div)`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 12px;
  overflow: hidden;
  transform-origin: center bottom;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateX(0deg);
  background-color: black;
  border-radius: 3px;

  span {
    font-size: 15px;
    font-weight:300;color:white;
    transform: translateY(30%);
  }
`;

const AnimatedCardBack = styled(animated.div)`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 12px;
  left: 0;
  background-color: white;
  width: 100%;
  height: 12px;
  overflow: hidden;
  transform: rotateX(180deg);
  transform-origin: center top;
  backface-visibility: hidden;
  background-color: black;
  border-radius: 3px;

  span {
    font-size: 15px;
    font-weight:300;color:white;
    transform: translateY(-70%);
  }
`;
