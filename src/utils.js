import {keyframes} from "styled-components";

export const generateCustomWidthKeyframe = (animationBreakpoints) => {
  let customAnimationString = `0% {
    width: 0%;
  }`;

  animationBreakpoints.forEach(
    // O(n) time n = number of breakpoints
    (animationBreakpoints, index) => {
      if (index === animationBreakpoints.length - 1) {
        customAnimationString += `100% {
          width: ${animationBreakpoints}%;
        }`;
      } else {
        customAnimationString += `${animationBreakpoints}% {
          width: ${animationBreakpoints}%;
        }`;
      }
    },
  );

  return keyframes`
    ${customAnimationString}
  `;
};
