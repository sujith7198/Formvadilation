import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './House';
import FormValidation from './Lib';


function WORK(){
    return(<Router>
        <Routes>
          <Route path="/" element={<FormValidation />} />
        </Routes>
      </Router>);
}
export default WORK