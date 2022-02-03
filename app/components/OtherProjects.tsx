import { gsap, ScrollTrigger } from "gsap/all";
import * as React from "react";
import styled from "@emotion/styled";

interface Props {}

const OtherProjects: React.FC<Props> = ({}) => {
  // TODO: Double check this information

  //   const images = [0, 1, 2, 3, 4, 5, 6];
  //   const margin = 100;
  //   const padding = 100;
  //   const totalSpacing = margin * images.length + padding;

  //   const MainContainer = styled.div`
  //     width: 100%;
  //     height: 100vh;
  //     position: relative;
  //     overflow: hidden;
  //   `;

  //   const SliderContainer = styled.div`
  //     width: 100%;
  //     height: 100vh;
  //     display: flex;
  //     padding: ${padding + "px"};
  //   `;

  //   const BoxContainer = styled.div`
  //     margin-right: ${margin + "px"};
  //   `;

  //   const Box = styled.div`
  //     width: 800px;
  //     height: 400px;
  //     background: plum;
  //   `;
  //   const sliderRef = React.useRef<HTMLDivElement>(null);
  //   const tl = gsap.timeline();

  //   const addAnimation = () => {
  //     const slider = sliderRef.current;

  //     if (slider) {
  //       const totalScroll =
  //         slider.scrollWidth + totalSpacing - slider.offsetWidth;
  //       const imagesOnSlider = slider.getElementsByClassName(
  //         "slider-image-container"
  //       );

  //       /* Determine value to animate */
  //       let proxy = { skew: 0 };
  //       /* Set values to nodes. Returns a function */
  //       let skewSetter = gsap.quickSetter(imagesOnSlider, "skewX", "deg");
  //       /* Don't let the skew go beyond those values */
  //       let clamp = gsap.utils.clamp(-20, 20);

  //       /* Add animation to timeline */
  //       tl.add(
  //         gsap.to(slider, {
  //           x: () =>
  //             -totalScroll /* Aplly negative value of available scroll so it starts to the left */,
  //           ease: "none" /* No velocity */,
  //           /* This animation needs to be controlled based on the scroll */
  //           scrollTrigger: {
  //             id: "1",
  //             trigger: slider /* Pass the node */,
  //             pin: true /* Node like position sticky, it adds padding bottom as you scroll and not lose sight of node */,
  //             scrub: 1 /* Scroll on the y-axis is applied correlatively on the x-axis */,
  //             markers:
  //               true /* Show where animation starts and finish for debugging */,
  //             start:
  //               "top " +
  //               slider.offsetTop /* Animation starts on top of viewport */,
  //             end: () =>
  //               "+=" + totalScroll /* End when there's no more to scroll */,
  //             /* Every time it updates on scroll start function for skew */
  //             onUpdate: (self) => {
  //               /* Get velocity of scroll */
  //               let skew = clamp(self.getVelocity() / -300);
  //               /* Do animation if the skew is more severe */
  //               if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //                 proxy.skew = skew;
  //                 gsap.to(proxy, {
  //                   skew: 0,
  //                   duration: 0.8,
  //                   ease: "power3.easeInOut",
  //                   overwrite: true,
  //                   onUpdate: () => skewSetter(proxy.skew),
  //                 });
  //               }
  //             },
  //           },
  //         })
  //       );
  //     }
  //     ScrollTrigger.refresh();
  //   };

  //   /* Remove animation when unmounts */
  //   const removeAnimation = () => {
  //     tl.kill();
  //     ScrollTrigger.getById("1").kill(true);
  //   };

  //   /* On mount register animation - On unmount remove animation  */
  //   React.useEffect(() => {
  //     addAnimation();
  //     return removeAnimation;
  //   }, []);

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
