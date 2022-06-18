import profilePhoto from "../images/katie-zaferes.png";
import starIcon from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePhoto} alt="profile" />
            <p className="card-rating"><img src={starIcon} alt="star icon" />5.0&#160;<span>(6).USA</span></p>
            <p className="card-title" >Life lessons with Katie Zaferes</p>
            <p className="card-cost" ><span>From $136</span> / person</p>
        </div>
    )
}