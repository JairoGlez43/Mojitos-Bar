import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { openingHours, socials, storeInfo } from "../../constants";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.inOut",
        });

        timeline
            .from(titleSplit.words, {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02,
            })
            .from("#contact h3, #contact p", {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02,
            })
            .to("#f-right-leaf", { y: -50, duration: 1, ease: "power1.inOut" }, "-=0.5")
            .to("#f-left-leaf", { y: -50, duration: 1, ease: "power1.inOut" }, "<");
    }, []);

    return (
        <footer id="contact">
            <img
                src="/images/footer-left-leaf.png"
                alt=""
                aria-hidden="true"
                id="f-left-leaf"
            />
            <img
                src="/images/footer-right-leaf.png"
                alt=""
                aria-hidden="true"
                id="f-right-leaf"
            />

            <div className="content">
                <h2>{storeInfo.heading}</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>{storeInfo.address}</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>
                        <a href={`tel:${storeInfo.contact.phone.replace(/[^\d+]/g, "")}`}>
                            {storeInfo.contact.phone}
                        </a>
                    </p>
                    <p>
                        <a href={`mailto:${storeInfo.contact.email}`}>
                            {storeInfo.contact.email}
                        </a>
                    </p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <ul className="flex-center gap-5">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <img src={social.icon} alt="" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="colophon">
                    &copy; {new Date().getFullYear()} Haze. Drink responsibly.
                </p>
            </div>

            <img
                src="/images/footer-drinks.png"
                alt=""
                aria-hidden="true"
                className="drink-img"
            />
        </footer>
    );
};

export default Contact;
