import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cardElements = data.map(item =>  
        <Card 
            key={item.id} 
            item={item} 
        />
    )
    
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <div className="container">
                    {cardElements}
                </div>
            </main>
        </>
    )
}