import React, { useState, useEffect } from "react";
import { useSprings } from "react-spring";
import { useGesture } from "react-with-gesture";
import Card from "./Card";
import "../styles/Deck.css"


const cards = [1, 2, 3, 4];
// the following will be changed once i get it working
const objs = 
[
  {
    pics: [
      "https://cdn.shopify.com/s/files/1/0663/2355/articles/should-dogs-wear-clothes-insight-on-the-controversial-topic-809351.jpg?v=1563678666"
    ],
    name: "Chloe",
    age: 18,
    distance: "1 mile away",
    text: "The C and the L are silent."
  },
  {
    pics: [
      "https://pbs.twimg.com/profile_images/782816301064548352/oxfkAyxo_400x400.jpg"
    ],
    name: "Sarah",
    age: 24,
    distance: "5 miles away",
    text:
      "It's tough being a single mom. Or so I'm told, I wouldn't know; I don't have kids."
  },
  {
    pics: [
      "https://cdn.shopify.com/s/files/1/0553/8116/4240/products/CPNRCC580090-0001.jpg?v=1631113273"
    ],
    name: "Savannah",
    age: 29,
    distance: "3 miles away",
    text: "A little known fact is that I cover about 40% of Africa."
  },
  {
    pics: [
      "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/03/hawaiian-dog-shirt-main-768x512.jpg",
      "https://cdn.shopify.com/s/files/1/0271/5009/0295/products/doghawaiianshirtsblue_11_320x.jpg?v=1657009480"
    ],
    name: "Jane",
    age: 22,
    distance: "2 miles away",
    text:
      "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife."
  }
];

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
//   rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;
      // If you flick hard enough it should trigger the card to fly out

      const dir = xDir < 0 ? -1 : 1;
      // Direction should either point left or right
      //make state for id of card; if -1 run no fetch call with id
      //else
      

      if (!down && trigger) gone.add(index);
      // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

      set(i => {
        if (index !== i) return;
        // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        // When a card is gone it flys out left or right, otherwise goes back to zero

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        // How much the card tilts, flicking it harder makes it rotate faster

        const scale = down ? 1.1 : 1;
        // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    
    <Card className="Entity"
      i={i}
      x={x}
      y={y}
    //   rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
    />
  ));
}


export default Deck;



/*Things to accomplish with Nick----
-------------------------------------

-fix overscroll
-change images to read database
 */