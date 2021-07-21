import {generateCustomWidthKeyframe} from "./utils";

describe("utils", () => {
  describe("generateCustomWidthKeyframe", () => {
    it("generates custom width keyframe rules correctly", () => {
      const testAnimationBreakPoints = [30, 60, 90];
      const expectedCondensedKeyframeRules = `0%{width:0%;}30%{width:30%;}60%{width:60%;}90%{width:90%;}`;

      const generatedKeyframe = generateCustomWidthKeyframe(
        testAnimationBreakPoints,
      );

      expect(generatedKeyframe.rules.replace(/\s/g, "")).toEqual(
        expectedCondensedKeyframeRules,
      );
    });
  });
});
