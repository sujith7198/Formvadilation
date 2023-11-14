import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import pop3 from './img/img5.png';



function Sug(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  

    return (
        <div className='sug'>
            <><div className='sug-1'>
                <Button onClick={handleShow}>
                    suggestion
                </Button>
                <Button variant="primary" onClick={handleShow}>
          Toggle static offcanvas
        </Button>
        </div>


                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>coffee</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Full cleaning and housekeeping services for companies and households.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
                        <Image src={pop3} roundedCircle />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
            
           
   
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            I will not close if you click outside of me.
          </Offcanvas.Body>
        </Offcanvas>
     
      </div>    
    );
}
export default Sug;