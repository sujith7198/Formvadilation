import pop from './img/img1.png'
import pop1 from './img/img3.png'
import pop2 from './img/img4.png'
import pop3 from './img/img5.png'
import pop4 from './img/img6.png'
import Carousel from 'react-bootstrap/Carousel';
import { CiAlarmOn } from "react-icons/ci";

function Slide(){
    return(
        <div className='ca1'>
                <h2>OUR COFFEE OFFER</h2>
                <div className='ed'>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block  w-100"
                                src={pop2}
                                alt="First slide" />
                            <Carousel.Caption>
                                <h5>TYPES OF COFFEE</h5>
                                <p className='cl2'>looking at its layout. The point of.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={pop3}
                                alt="Second slide" />
                            <Carousel.Caption>
                                <h5>BEAN VARIETIES</h5>
                                <p className='cl3'>looking at its layout. The point of.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block  w-100"
                                src={pop4}
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h5>COFFEE & PASTRY</h5>
                                <p className='cl4'>
                                    looking at its layout. The point of.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
    );
}
    export default Slide;