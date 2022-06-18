import starIcon from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt="profile" />
            <p className="card-rating"><img src={starIcon} alt="star icon" />{props.rating}&#160;<span>({props.reviewCount}).{props.country}</span></p>
            <p className="card-title">{props.title}</p>
            <p className="card-cost"><span>From ${props.price}</span> / person</p>
        </div>
    )
}