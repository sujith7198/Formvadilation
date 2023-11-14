import Card from 'react-bootstrap/Card';
import pop from './img/img1.png'
import pop1 from './img/img3.png'
import pop2 from './img/img4.png'
import pop3 from './img/img5.png'
import pop4 from './img/img6.png'
import Carousel from 'react-bootstrap/Carousel';
import { CiAlarmOn } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import Button1 from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';


function End(){
    const [open, setOpen] = useState(false);

    return(
        <><><div className='end'><h4>Subscribe Now</h4></div>
            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Submit</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack></><>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                >
                    Toggle text
                </Button>
                <Fade in={open}>
                    <div id="example-fade-text">
                    About:
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Fade>
            </></>
    );
}
export default End;