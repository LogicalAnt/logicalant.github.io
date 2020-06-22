import anime from "animejs";
import React, { useEffect } from "react";
import "./styles/index.css";

export const Animation = () => {
  useEffect(() => {
    anime({
      targets: ".mainCircle",
      scaleX: [{ value: 1.05, duration: 1000 }],
      scaleY: [{ value: 1.05, duration: 500 }],
      loop: true,
      easing: "easeInOutQuad",
      direction: "alternate",
    });
  }, []);

  const animateJs = () => {
    anime({
      targets: ".js",
      translateX: {
        value: 250,
        duration: 20000,
      },
      translateY: { value: 100 },
      direction: "normal",
    });

    anime({
      targets: ".php",
      translateX: {
        value: -250,
        duration: 20000,
      },
      translateY: { value: -100 },
      direction: "normal",
    });

    anime({
      targets: ".laravel",
      translateX: {
        value: -310,
        duration: 20000,
      },
      translateY: { value: -100 },
      direction: "normal",
    });

    anime({
      targets: ".codeigniter",
      translateX: {
        value: -220,
        duration: 20000,
      },
      translateY: { value: -40 },
      direction: "normal",
    });

    anime({
      targets: ".mysql",
      translateX: {
        value: 150,
        duration: 18000,
      },
      translateY: { value: -150 },
      direction: "normal",
    });

    anime({
      targets: ".react",
      translateX: {
        value: 300,
        duration: 20000,
      },
      translateY: { value: 150 },
      direction: "normal",
    });

    anime({
      targets: ".nodejs",
      translateX: {
        value: 150,
        duration: 18000,
      },
      translateY: { value: 100, duration: 5000 },
      direction: "normal",
    });
    anime({
      targets: ".git",
      translateX: {
        value: -160,
        duration: 18000,
      },
      translateY: { value: 120, duration: 5000 },
      direction: "normal",
    });
  };

  return (
    <>
      <div className="parent">
        <div className="js">Javascript</div>
        <div className="php">php</div>
        <div className="laravel">Laravel</div>
        <div className="codeigniter">Codeigniter</div>
        <div className="mysql">MySql</div>
        <div className="react">React</div>
        <div className="nodejs">Nodejs</div>
        <div className="git">git</div>
        <div className="mainCircle" onMouseOver={animateJs}>
          Skills
        </div>
      </div>
    </>
  );
};
