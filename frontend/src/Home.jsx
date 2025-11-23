import AboutUs from './components/organisms/AboutUs.jsx'
import Header from './components/organisms/Header.jsx'
import HeroSection from './components/organisms/HeroSection.jsx'
import ProductsSection from './components/organisms/ProductsSection.jsx'
import ProcessDiagram from './components/organisms/ProcessDiagram.jsx'
import AnalyticsDiagram from './components/organisms/AnalyticsDiagram.jsx'
import ContactSection from './components/organisms/ContactSection.jsx'

function Home(){
    return (
        <main className='snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth'>
            <Header />
            <HeroSection />
            <ProductsSection />
            <AboutUs />
            <ProcessDiagram />
            <AnalyticsDiagram />
            <ContactSection />
        </main>
    )
}

export default Home