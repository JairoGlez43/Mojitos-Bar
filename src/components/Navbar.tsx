import {navLinks} from '../../constants/index.ts';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

const NavBar = () => {
    
    useGSAP(()=>{
        const navTweens = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: 'bottom top',
            }
        })
        navTweens.fromTo('nav', 
            { backgroundColor: 'transparent' }, 
            { 
                backgroundColor: '#00000030', 
                backdropFilter: 'blur(10px)',
                duration: 1, 
                ease: 'power1.inOut' 
            },
        );
    })

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" />
                    <p>Velvet pour</p>
                </a>
                <ul>
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;