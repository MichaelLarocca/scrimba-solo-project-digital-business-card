import soloPhoto from '../img/Han-Solo.png'
export default function Photo() {
    return (
        <div id="ctn-image">
            <img src={soloPhoto} ></img>
            <p id="attribution"><em>Photo credit: Lucasfilm Ltd. (2015) - "Star Wars: The Force Awakens"</em></p>
        </div>
    );
}