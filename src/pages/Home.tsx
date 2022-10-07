import Navel from '../components/Navel'

const Home = () => {
  return (
    <div className="App">
        <section className="on-load">
            {/* <img src="KoperIncLogoPng.png" alt="Logo"/> */}
        </section>
        <nav>
            <ul className='nav'>
                <Navel link="/sklep">
                    <span className='lettter'>s</span>
                    klep
                </Navel>
                <Navel link="/">
                    <span className='logo-name'>
                        <span>
                            <span className='lettter'>K</span>
                            oper
                        </span>
                        <span>
                            <span className='lettter'>I</span>
                            nc
                        </span>
                        <span className='lettter'>.</span>
                    </span>
                </Navel>
                <Navel link="#kontakt">
                    <span className='lettter'>k</span>
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
            <section className='contact' id='contact'></section>
        </main>
    </div>
  )
}

export default Home