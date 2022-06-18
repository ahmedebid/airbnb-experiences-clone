import heroImage from "../images/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero-sec">
            <img className="hero-image" src={heroImage} alt="a grid of photos for people doing various activities like playing music, swimming, ... etc." />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}