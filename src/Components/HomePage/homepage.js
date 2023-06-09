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
import dining from "../Foto/dining.png"
import table from "../Foto/table.png"
import whitetable from "../Foto/whitetable.png"
import woodtable from "../Foto/woodtable.png"
import modernroom from "../Foto/modernroom.png"
import garden from "../Foto/garden.png"
import greytable from "../Foto/greytable.png"
import guestroom from "../Foto/guest.png"
import hallway from "../Foto/hallway.png"

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
                    <h1 className="design1"> Design  </h1>
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

                        <p className="lorem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla </p>
                    </div>
            </div>

            <div className="ourprojects">
                <div className="images3">
                    <img className="dining" src={dining} />
                    <img className="table" src={table} />
                    <img className="whitetable" src={whitetable} />
                    <img className="woodtable" src={woodtable} />
                </div>
                <div className="whitebox">
                    <h1 className="ourprojectsh"> Our Projects </h1>
                    <p className="loremp"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla </p>
                    <p className="magnap">  magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla </p>
                    <button className="viewall"> View all </button>
                </div>
            </div>    

            <div>
                <h1 className="blogs"> Blogs </h1>
                <div className="blogimages">
                    <img className="modernroom" src={modernroom} /> <h1 className="modernh"> Modern Room </h1>
                    <img className="garden" src={garden} /> <h1 className="exteriorh"> Exterior Project </h1>
                    <img className="greytable" src={greytable} /> <h1 className="greyh"> Grey Beauty </h1>
                    <img className="guestroom" src={guestroom} /> <h1 className="plantationh"> Plantation interior </h1>
                    <img className="hallway" src={hallway} />  <h1 className="roleh"> Role of furnitures </h1>
                    <button className="viewall2"> View all </button>
                </div>
            </div>                                                                                                

            <div>
                <h1> Our Interior Design Products </h1>
            </div>

        </>
    )
}


export default HomePage;