import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import profilePhoto from "./images/katie-zaferes.png";

export default function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Card 
                    img={profilePhoto}
                    rating={5}
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
            </main>
        </>
    )
}