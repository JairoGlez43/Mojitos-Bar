import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists } from "../../constants";
import { mockTailLists } from "../../constants";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTweens = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTweens
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  });
  return (
    <section id="cocktails">
      <div className="noisy" />
      <img
        src="/images/cocktail-left-leaf.png"
        alt="Cocktail Leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="Cocktail Leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>-{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Loved Mocktails:</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>-{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;