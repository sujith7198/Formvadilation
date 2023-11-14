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



function Body(){
    return(
    <div className="bj">
            <div className='bj1'><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form></div>
        </div>


           
    );
}
export default Body;