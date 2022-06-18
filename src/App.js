import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Card />
            </main>
        </>
    )
}