import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../../Home/NavBar/NavBar';
import Footer from '../../Footer/Footer';

const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_z5qdv3h', e.target, 'user_7O611vZTujUDSZl97pgMC')
          .then((result) => {
            alert(" Email Send Successfully !");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <div style={{backgroundColor:'#1d293a',height:'650px'}}>
            <NavBar></NavBar>
            <form onSubmit={sendEmail}>
                <h1 className='text-success text-center'>Get in Touch</h1>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-success" value="Send Message"></input>
                        </div>
                    </div>
                </form>
  
                <div style={{marginTop:'1%'}}>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default ContactUs;