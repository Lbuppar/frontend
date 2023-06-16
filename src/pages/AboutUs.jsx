import vision from "../assets/vision.png"
import mission from "../assets/mission.png"

const AboutUs = () => {
    return (
        <section className="aboutus">

            <article className="mission">
                <h1>Mission</h1>

                <div>

                    <img src={mission} alt="" />
                    <p>
                        Our mission at Digital Life is to revolutionize the vlogging instrument industry by providing vloggers and content creators with a seamless shopping experience. We aim to empower them with the best tools, including cameras, tripods, gimbals, lights, headphones, microphones, bags, and more, to enhance their creativity and passion for vlogging.

                    </p>


                </div>
            </article>

            <article className="vision">
                <h1>Vision</h1>
                <div>
                    <p>
                        Our vision is to become the go-to destination for vlogging instruments, recognized for our exceptional product range and unparalleled customer service. We envision a vibrant community of vloggers who trust us to provide them with the latest and most innovative equipment, enabling them to create captivating content and connect with their audiences on a deeper level.
                    </p>

                    <img src={vision} alt="vision" />
                </div>
            </article>

            <article className="values">
                <h1>Values</h1>
                <div>

                    <img src="https://img.freepik.com/premium-photo/core-values-word-cloud-with-yellow-banner_698953-4415.jpg?w=900" alt="" />

                    <p>
                        Honesty: Honesty is at the core of everything we do. We believe in transparency and integrity in our interactions with customers, partners, and team members. We are committed to providing accurate information, honest product descriptions, and fair pricing.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci eaque hic fuga reiciendis, reprehenderit in ratione soluta incidunt, quam iste id! Modi, itaque magnam accusamus, fugit quis
                    </p>
                </div>
            </article>

            <article className="team">
                <h1>Team</h1>
                <div>

                    <p>

                        <u>Main Manager:</u> Our experienced leader overseeing operations and driving our success.
                        Account Manager: Building strong relationships with customers and ensuring their satisfaction

                        <br />

                        <u> Developer:</u> Bringing our website to life with innovative features and seamless functionality.
                        Tester: Ensuring the quality and reliability of our platform.

                        <br />

                        <u>Trainees:</u> Nurturing young talent and fostering growth within the team.

                        <br />

                        Together, we are dedicated to revolutionizing the vlogging instrument industry and providing an exceptional shopping experience for our customers.
                    </p>



                    <img src="https://img.freepik.com/free-photo/business-executives-interacting-with-each-other_1170-1772.jpg?size=626&ext=jpg&uid=R77094408&ga=GA1.2.1446319132.1685952204&semt=ais" alt="" />
                </div>
            </article>


        </section>
    )
}
export default AboutUs



