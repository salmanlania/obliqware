"use client";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedProgressBar = ({ progress, title, text, service }) => {

  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };




  return (
    <div className={`${service === "service" ? "service-details__skill" : service === 'about' ? "about-three__content__skill" : "skill-one__content__skill"
      }`}>
      <div className='progress-box' >
        <VisibilitySensor
          offset={{ top: 10 }}
          delayedCall={true}
          onChange={onVisibilityChange}
        >

          {({ isVisible }) => (
            <div className="graph-outer">
              <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar
                  value={countStart ? progress : 0}
                  styles={buildStyles({
                    textSize: "30px",
                    pathTransitionDuration: 0.5,
                    pathColor: "#3d72fc",
                    textColor: "#39484a",
                    backgroundColor: "#c8c8c8",
                  })}
                />
              </div>

              <div className="inner-text count-box">
                <span className="count-text">
                  <CountUp
                    start={0}
                    end={isVisible ? progress : 0}
                    duration={1}
                  />
                </span>
                <span className="count-Parsent">{progress.countPercent}%</span>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div >
      <h5 className={`${service === 'about' ? "about-three__content__skill__title" : "skill-one__content__skill__title"}`}>{title}</h5>
      <p className={`${service === 'about' ? "about-three__content__skill__text" : "skill-one__content__skill__text"}`}>{text}</p>
    </div >
  );
};

export default AnimatedProgressBar;
