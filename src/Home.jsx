import { buildQueries } from "@testing-library/react";
import pop from './img/logo.png'

function Home(){
    return(
        <><div className="ap">
            <div className="ap1"><img src={pop}></img></div>
            <div className="ap2">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">Search Job</a></li>
                    <li><a href="">Recruiters</a></li>
                    <li><a href="">Companies</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
            <div className="ap3">
                <a href="">Login Id</a>
            </div>
        </div><div className="aj">
            <div className="aj1">
                <label for="name">Name</label><br></br>
                <input className="input" type="text" placeholder="Name" autoFocus></input><br></br>
                <label   for="name">Password</label><br></br>
                <input className="input" type="text"placeholder="Password"></input><br></br>
                <label   for="name">confirm password</label><br></br>
                <input className="input" type="text"placeholder="Password"></input><br></br>
                <input className="submit" type="submit"></input>
            </div>
            <div className="end">
                {/* <div><h4>Subscribe Now </h4><AiFillAlipaySquare/></div> */}
                <div><p>There are many variations of passages of Lorem Ipsum available, but the majority have</p></div><br></br>
            </div>
            </div></>

            
    )
}
export default Home;


