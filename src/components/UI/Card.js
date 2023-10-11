import "../../index.css";

function Card(props) {
    return (
    <ul id="concepts">{props.children}</ul>
    );
}

export default Card;