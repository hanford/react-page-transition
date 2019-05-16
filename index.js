import * as React from "react";
import { animated, useSpring } from "react-spring";

export default ({
  children,
  value: index,
  onRequestChange,
  animationConfig = { tension: 190, friction: 20, mass: 0.4 },
  style,
  ...other
}) => {
  const [{ x }, set] = useSpring(() => ({
    x: index * -100,
    config: animationConfig
  }));

  React.useEffect(() => {
    // transition when  if our index changes
    set({ x: index * -100 });
  }, [index, set]);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          ...style
        }}
        {...other}
      >
        <animated.div
          style={{
            flexDirection: "row",
            // direction: "ltr",
            willChange: "transform",
            minHeight: 0,
            flex: 1,
            display: "flex",
            transform: x.interpolate(x => `translateX(${x}%)`)
          }}
        >
          {children.map((child, i) => {
            const props = {
              key: i,
              style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignSelf: "stretch",
                flexShrink: 0,
                overflow: "auto"
              },
              tabIndex: index === i ? 0 : -1,
              "aria-hidden": i !== index
            };

            if (typeof child === "function") {
              return child(props, index === i);
            }

            return <div {...props}>{child}</div>;
          })}
        </animated.div>
      </div>
    </React.Fragment>
  );
};
