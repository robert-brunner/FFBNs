import React from "react";
import { animated, interpolate } from "react-spring/";
import Carousel from "nuka-carousel";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];

    return (
    
      <animated.div className="OuterBox"
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div className="InnerBox"
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel className="Carousel">
              {pics.map(pic => (
                <img src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 className="DisplayName">{name},</h2>
            <h2 className="Age">{age}</h2>
            <h5 className="Loc">{distance}</h5>
            <h5 className="FillerBody">{text}</h5>
          </div>
        </animated.div>
      </animated.div>
      
    );
  }
}

export default Card;
