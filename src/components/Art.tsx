import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Art = () => {
    
    const isMobile = useMediaQuery({maxWidth: 767});
    
    useGSAP(()=>{
        const start = isMobile? 'top 7%': '15% top';

        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: true,
                pin: true,
            }
        })

        maskTimeline
        .to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut',
        })
        .to('.masked-img', {
            scale: 1.2, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'
        })
        .to('#masked-content', {
            opacity: 1, duration: 1, ease: 'power1.inOut'
        })

    })

    return (
        <div id="art">
            <div className='container mx-auto min-h-full'>
                <h2 className='will-fade'>Art</h2>
                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature, index)=>(
                            <li key={index} className='flex items-center gap-2'>
                                <img src='/images/check.png' alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='cocktail-img'>
                        <img src='/images/under-img.jpg' alt="cocktail" className='abs-center masked-img size-full object-contain'/>
                    </div>
                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((feature, index)=>(
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <img src='/images/check.png' alt="check" />
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='masked-container md:mt-50'>
                    <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                    <div id='masked-content'>
                        <h3>Made with Craft, poured with Passion</h3>
                        <p>Elevate your drinking experience with our handcrafted cocktails, each a masterpiece of flavor and presentation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Art;