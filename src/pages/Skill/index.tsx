import anime from "animejs";
import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Animation } from "./animation";
export const Skill = () => {
  useEffect(() => {
    anime({
      targets: ".polymorph",
      points: [
        {
          value: [
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
            "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369",
          ],
        },
        {
          value:
            "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369",
        },
        {
          value:
            "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369",
        },
        {
          value:
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
        },
      ],
      translateX: 250,
      easing: "easeOutQuad",
      direction: "alternate",
      duration: 10000,
      loop: true,
    });
  });

  anime({
    targets: "#tas",
    translateX: 50,
    direction: "alternate",
    delay: 1400,
  });

  return (
    <>
      <Navbar />
      {/* <div className="mo">
        <svg className="svg" width="100%" height="300px">
          <polygon
            className="polymorph"
            strokeWidth="1"
            stroke="currentColor"
            points="70 32.29163918302938 118.82281030905631 59.6178103090563 108.40808660038066 128.89884536415545 55.62998350981763 92.84174019885802 29.13436081697062 62.35948247245042 "
          />
        </svg>
      </div> */}
      <Animation />
    </>
  );
};
