import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { sliderLists } from "../../constants";

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = sliderLists.length;
    const currentCocktail = sliderLists[currentIndex];
    const prevCocktail = sliderLists[(currentIndex - 1 + totalCocktails) % totalCocktails];
    const nextCocktail = sliderLists[(currentIndex + 1) % totalCocktails];

    const goToSlide = (index: number) => {
        setCurrentIndex((index + totalCocktails) % totalCocktails);
    };

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        });
        parallaxTimeline
            .from("#m-left-leaf", { x: -100, y: 100 }, 0)
            .from("#m-right-leaf", { x: 100, y: 100 }, 0);
    }, []);

    // Re-runs on every slide change: the drink slides in while the copy rises.
    useGSAP(() => {
        gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".details h2", { yPercent: 100, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".details p", { yPercent: 100, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        });
    }, [currentIndex]);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img
                src="/images/slider-left-leaf.png"
                alt=""
                aria-hidden="true"
                id="m-left-leaf"
            />
            <img
                src="/images/slider-right-leaf.png"
                alt=""
                aria-hidden="true"
                id="m-right-leaf"
            />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <div className="cocktail-tabs" role="tablist" aria-label="Cocktails">
                {sliderLists.map((cocktail, index) => (
                    <button
                        key={cocktail.id}
                        role="tab"
                        id={`tab-${cocktail.id}`}
                        aria-selected={index === currentIndex}
                        aria-controls="cocktail-panel"
                        onClick={() => goToSlide(index)}
                    >
                        {cocktail.name}
                    </button>
                ))}
            </div>

            <div className="content">
                {/* The asset filenames are inverted: right-arrow.png is the glyph
                    pointing left, and left-arrow.png points right. */}
                <div className="arrows">
                    <button
                        onClick={() => goToSlide(currentIndex - 1)}
                        aria-label={`Previous cocktail: ${prevCocktail.name}`}
                    >
                        <span aria-hidden="true">{prevCocktail.name}</span>
                        <img
                            src="/images/right-arrow.png"
                            alt=""
                            aria-hidden="true"
                            className="w-6 md:w-auto"
                        />
                    </button>

                    <button
                        onClick={() => goToSlide(currentIndex + 1)}
                        aria-label={`Next cocktail: ${nextCocktail.name}`}
                    >
                        <span aria-hidden="true">{nextCocktail.name}</span>
                        <img
                            src="/images/left-arrow.png"
                            alt=""
                            aria-hidden="true"
                            className="w-6 md:w-auto"
                        />
                    </button>
                </div>

                <div
                    className="cocktail"
                    id="cocktail-panel"
                    role="tabpanel"
                    aria-labelledby={`tab-${currentCocktail.id}`}
                >
                    <img src={currentCocktail.image} alt={currentCocktail.name} />
                </div>

                <div className="recipe">
                    <div className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
