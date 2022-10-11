import Navel from '../components/Navel'
import '../Home.css';
import { useState, useEffect } from 'react'

const Home = () => {
    const [gSend, setGSend] = useState(false);
    //const [bSend, setBSend] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = (e: any) => {
            if(window.scrollY >= 100){
                setScrolled(true);
                console.log(scrolled)
            } else if(window.scrollY < 100){ 
                setScrolled(false);
                console.log(scrolled)
            }
        };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])


    const handleSubmit = (e: any) => {
        e.preventDefault();

        setTimeout(() => {
            setGSend(false);
        }, 2000);
        setGSend(true);
        console.log(true);
    }

    return (
        <div className="App">
            <section className="on-load">
                <img src={"/assets/KoperIncLogoPng.png"} alt="Logo"/>
            </section>
            <nav className={(window.scrollY >= 100) ? 'scrolled' : ''}>
                <ul className={(window.scrollY >= 100) ? 'scrolled nav' : 'nav'}>
                    <Navel link="/sklep">
                        <span className={(window.scrollY >= 100) ? 'scrolled-letter lettter' : 'lettter'}>s</span>
                        klep
                    </Navel>
                    <Navel link="/">
                        <span className='logo-name'>
                            <span>
                                <span className={(window.scrollY >= 100) ? 'scrolled-letter lettter' : 'lettter'}>K</span>
                                oper
                            </span>
                            <span>
                                <span className={(window.scrollY >= 100) ? 'scrolled-letter lettter' : 'lettter'}>I</span>
                                nc
                            </span>
                            <span className={(window.scrollY >= 100) ? 'scrolled-letter lettter' : 'lettter'}>.</span>
                        </span>
                    </Navel>
                    <Navel link="#kontakt">
                        <span className={(window.scrollY >= 100) ? 'scrolled-letter lettter' : 'lettter'}>k</span>
                        ontakt
                    </Navel>
                </ul>
            </nav>
            <main>
                <section className='landing-page'>
                    <div className="hero-text">
                        <span className='lettter'>S</span>prawdź naszą ofertę już teraz!
                    </div>
                    <a className="button" href="/sklep">
                        <span>
                            Odwieź sklep
                        </span>
                    </a>
                    {/* <img src="KoperIncLogoPng.png" alt="Logo"/> */}
                </section>
                <section className='contact' id='kontakt'>
                    <div className="bg"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <label htmlFor="name">Imię</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="text">
                            <label htmlFor="text">Wiaddomość</label>
                            <textarea className="text" name="text" id="text" cols={30} rows={20} >
                            </textarea>
                        </div>
                        <div className="status">
                            {gSend && "Wyslano"}
                        </div>
                        <button type="submit" className="submit">Wyslij</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Home