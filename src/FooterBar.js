import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'mdbreact/dist/css/mdb.css';

export default class FooterBar extends React.Component {
	render() {    
      return (
	<footer id="footer" className="page-footer text-center text-md-left font-small pt-4 ">
    <div className="container text-center text-md-left">
        <div className="row">

            <div className="col-md-6 pb-3">
                <h5 className="text-uppercase">Contact Me</h5>
                <p className="footer-body">For further information about my work, please contact me via the methods provided.</p>
            </div>

            <div className="col-md-6 pb-3">
                <h5 className="text-uppercase">Contact Information</h5>
                <ul id="footerList" className="list-unstyled">
                    <li>
                        Phone: (608) 609-0558
                    </li>
                    <li>
                        Email: russellbj@beloit.edu
                    </li>
                    <li>
                        LinkedIn: https://www.linkedin.com/in/benjamin-russell-beloit/
                    </li>
                    <li>
                        GitHub: https://github.com/russellbj
                    </li>
                </ul>
            </div>
   
        </div>
    </div>

    <div className="footer-copyright py-3 text-center">
    </div>
</footer>
)}}