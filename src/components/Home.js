import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title='Model 3'
        description1='$7,500 Federal Tax Credit Available'
        description2='From $33,990 After Est. Savings'
        supValue1='1'
        supValue2='2'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='model-3.jpg'
        textColor='#171A20'
      />
      <Section 
        title='Model Y'
        description1='From $31,490'
        description2='After Est. Savings'
        supValue1='3'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='model-y.jpg'
        textColor='#171A20'
      />
      <Section 
        title='Model X'
        description1='From $63,990'
        description2='After Est. Savings'
        supValue1='4'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='model-x.jpg'
        textColor='#171A20'
      />
      <Section 
        title='Model S'
        description1='From $66,490'
        description2='After Est. Savings'
        supValue1='5'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='model-s.jpg'
        textColor='#FFFFFF'
      />
      <Section 
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='cybertruck.jpg'
        overlayImagePath='cybertruck.svg'
        textColor='red'
      />
      <Section 
        title = 'Solar Panels'
        description1='Schedule a Virtual Consultation'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='home.jpg'
        textColor='#FFFFFF'
        textDecoration = 'underline'
      />
      <Section 
        title = 'Solar Roof'
        description1='Produce Clean Energy From Your Roof'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='solar-roof.jpg'
        textColor='#171A20'
        // textDecoration = 'underline'
      />
      <Section 
        title = 'Powerwall'
        leftButton='Order Now'
        rightButton='Demo Drive'
        backgroundImagePath='powerwall.jpg'
        textColor='#171A20'
        // textDecoration = 'underline'
      />
      <Section 
        title = 'Accessories'
        leftButton='Shop Now'
        backgroundImagePath='accessories.jpg'
        textColor='#171A20'
        // textDecoration = 'underline'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
