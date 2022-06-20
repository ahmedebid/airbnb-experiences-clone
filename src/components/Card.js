export default function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {/* If badgeText has a value then display it, otherwise don't display it */}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.item.coverImg}`} alt="profile" />
            <p className="card-rating"><img src="../images/star.png" alt="star icon" />{props.item.stats.rating}&#160;<span>({props.item.stats.reviewCount}).{props.item.location}</span></p>
            <p className="card-title">{props.item.title}</p>
            <p className="card-cost"><span>From ${props.item.price}</span> / person</p>
        </div>
    )
}