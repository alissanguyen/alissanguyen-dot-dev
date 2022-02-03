import * as React from "react";
import styled from "@emotion/styled";

interface Props {}

const OtherProjects: React.FC<Props> = ({}) => {
  

  return (
    <div className="others-wrapper">
      <fieldset>
        <legend>Other side projects</legend>
      </fieldset>
      {/* <MainContainer>
        <SliderContainer ref={sliderRef}>
          {images.map((index) => {
            return (
              <BoxContainer key={index} className="slider-image-container">
                <Box></Box>
              </BoxContainer>
            );
          })}
        </SliderContainer>
      </MainContainer> */}
    </div>
  );
};

export default OtherProjects;
