import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button1 from 'react-bootstrap/Button';
import pop from './img/img1.png'
import pop1 from './img/img3.png'
import pop2 from './img/img4.png'
import pop3 from './img/img5.png'
import pop4 from './img/img6.png'
import Carousel from 'react-bootstrap/Carousel';
import { CiAlarmOn } from "react-icons/ci";

function Cards(){
    return( 
    <div className='cd1'>
        <h3>OUR BLOG</h3>

    <div className='cd2'>
        <div className='bx'></div>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={pop} />
            <Card.Body>
                <Card.Title>PREP TECHNIQUES COFFEE</Card.Title>
                <Card.Text>
                    <p>Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
                </Card.Text>
                <Button variant="danger">READ MORE</Button>
            </Card.Body>
        </Card></div>


    <div className='cd3'><Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={pop1} />
        <Card.Body>
            <Card.Title>PREP TECHNIQUES COFFEE</Card.Title>
            <Card.Text>
                <p className='cl1'>Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
            </Card.Text>
            <Button variant="primary">READ MORE</Button>
        </Card.Body>
    </Card></div>

</div>

);
}
export default Cards
