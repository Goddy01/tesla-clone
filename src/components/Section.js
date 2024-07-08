import React from 'react';
import styled from 'styled-components';
// import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


function Section({ title, description1, description2, supValue1, supValue2, leftButton, rightButton, backgroundImagePath, overlayImagePath, textColor, fontSize, textDecoration }) {
  return (
    <Slide>
    <Wrap bgImage={backgroundImagePath}>
      <ItemText itemTextColor={textColor} itemTextFontSize={fontSize}>
        <h1>{title}</h1>
        <Desc textDecor = {textDecoration}>
          <p>
            {description1}
            <sup>{supValue1}</sup>
          </p>
          <p>
            {description2}
            <sup>{supValue2}</sup>
          </p>
        </Desc>
      </ItemText>
      {overlayImagePath && <OverlayImage src={`/images/${overlayImagePath}`} />}
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftButton}
          </LeftButton>
          { 
            rightButton &&  
            <RightButton>
              {rightButton}
            </RightButton>
          }
        </ButtonGroup>
        {/* <DownArrow src="/images/down-arrow.svg" /> */}
      </Buttons>
    </Wrap>
    </Slide>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // for vertical
  align-items: center; // for horizontal;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  position: relative;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    color: ${props => props.itemTextColor};
    ${'' /* font-size: ${props => props.itemTextFontSize}; */}
    font-size: 37px;
    font-weight: 600;
  }

  p {
    color: ${props => props.itemTextColor};
    font-size: 24px;
    font-weight: 500;
  }

  sup {
    font-size: 16px;
    color: ${props => props.itemTextColor};
    font-weight: 500;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 100px;
  cursor: pointer;
  margin: 8px;
  padding: 15px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.8;
  color: black;
`;

// const DownArrow = styled.img`
//   margin-top: 20px;
//   height: 40px;
//   animation: animateDown infinite 1.5s;
// `;

const Buttons = styled.div``;

const Desc = styled.div`
  margin-top: 7px;

  p {
    text-decoration: ${props => props.textDecor}
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 10%;
  ${'' /* left: 10%; */}
  width: 40%;
  height: auto;
  pointer-events: none;
  justify-content: center;
`