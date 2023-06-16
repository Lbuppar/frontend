import contact from '../assets/contact.png'
const ContactUs = () => {
    return (
        <section className="contactus">

            <article className='contact-image'>
                <img src={contact} alt="Contact image" />
            </article>

            <article>
                <div>

                    <p> <u>Email id : </u><br /> <a href="mailto:laxmi.b.uppar@gmail.com">laxmi.b.uppar@gmail.com</a></p>
                </div>

                <div>
                    <p> <u>Mobile no : </u> <br /> <a href="tel:+91 6360626362">+91 6360626362</a></p>

                </div>

                <div>
                    <p> <u>Address : </u> <br />
                        Digital Life Shrinivasa nagara
                        489, 1st Cross Rd, 1st Block, SBM Colony, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050</p>

                    <p> <u>Location : </u> <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.0291273058338!2d77.5573491383984!3d12.94200330346628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f26c5319541%3A0xf8e9842b7bd2233c!2sShrinivasa%20nagara!5e0!3m2!1sen!2sin!4v1686028556529!5m2!1sen!2sin" width="600" height="200" loading="lazy" ></iframe>
                    </p>
                </div>

            </article>



        </section>
    )
}
export default ContactUs