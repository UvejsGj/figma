import "./homepage.css";
import artboard from "../Foto/artboard.png"
import couch from "../Foto/couch.png"
import badge from "../Foto/badge.png"
import calendar from "../Foto/calendar.png"
import house from "../Foto/house.png"
import couch2 from "../Foto/couch2.png"
import kitchen from "../Foto/kitchen.png"
import bedroom from "../Foto/bedroom.png"
import livingroom from "../Foto/livingroom.png"
import office from "../Foto/office.png"

function HomePage() {
    return(
        <>
        <div className="topnav">
            <h3 className="h3"> Join as Design Expert </h3>
            <h3 className="h3"> Partner with LAND Interiors </h3>
            <img className="logo" src={artboard}/>
        </div>

        <div className="nav" >
            <ul>
                <li> About </li>
                <li> Projects </li>
                <li> Studio </li>
                <li> Blog </li>
                <li> Contact </li>
            </ul>
        </div>

        <div className="home">
        <img className="couch" src={couch}/>
        <div className="smalldiv">
            <h2 className="get"> Get personalized home interiors  </h2>
            <h1 className="in" > in just 50 day </h1>
            <button className="speak"> SPEAK WITH A ONLINE CONSULANT </button>
            </div>
            
        </div>

        <div className="whyus" >
            <h1 className="why"> Why LAND Interiors </h1>
            <div className="images">
            <img className="calendar" src={calendar}/> <p className="days"> 50 days or we <br/> we pay you rent </p>
            <img className="house" src={house}/> <p className="happy"> 1500+ happy <br/> customers </p>
            <img className="badge" src={badge}/> <p className="design"> 300+ design <br/> experties </p>
            </div> 
        </div>

            <div >
            <img className="sofa" src={couch2}/>
                <div className="outlinediv" >
                    <h1 className="make">  Make your dream interior in  </h1>
                    <h1 className="easy"> 3 easy steps </h1>
                    <h1 className="explore"> Explore </h1>
                    <p className="more"> Explore more than just modular design ideas with our experts. </p>
                    <h1 className="design"> Design  </h1>
                    <p className="with"> Complete the designs with painting, flooring and other decor solutions </p>
                    <h1 className="movein"> Move-in </h1>
                    <p className="move"> Move in with ease, with our hassle-free civil work and installation services. </p>
                </div>
            </div>

            <div className="what">
                <h1 className="whatwedo"> What we do? </h1>
                    <div className="images2">
                        <img className="kitchen" src={kitchen} />
                        <p className="kitchenp" > Modular Kitchen </p>
                        <img className="bedroom" src={bedroom} />
                        <p className="bedroomp"> Bedroom </p>
                        <img className="livingroom" src={livingroom} />
                        <p className="livingp"> Living Room </p>
                        <img className="office" src={office} />
                        <p className="officep"> Home Office </p>

                        <p></p>
                    </div>
            </div>

        </>
    )
}


export default HomePage;