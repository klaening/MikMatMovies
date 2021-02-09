import React from "react";
import BackToTop from "../../BackToTop/BackToTop";
import "./About.css";

const About = () => {
  return (
    <div className="about_main">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore omnis
        maiores qui incidunt atque animi beatae vitae, dignissimos laborum
        labore cupiditate quaerat obcaecati blanditiis fugit ab autem porro eum
        quibusdam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error
        nemo quasi unde modi dolorum enim voluptatibus eos, harum,
        necessitatibus iure blanditiis, itaque recusandae quas iusto dignissimos
        minima nobis ullam voluptate doloribus deleniti mollitia nisi magnam!
        Tempora explicabo officia magnam ex rerum corporis rem! Laudantium culpa
        possimus obcaecati aliquid commodi soluta repellat nisi repudiandae
        atque alias, assumenda repellendus voluptates ea distinctio facilis
        perspiciatis molestias, quisquam aut necessitatibus ipsa ratione
        excepturi? Magnam rem voluptas dolorum aperiam expedita officiis
        quisquam possimus dolorem quidem, ipsa explicabo dignissimos distinctio
        qui non, nisi modi eaque quaerat voluptatibus! Odio minus deserunt
        ullam, numquam corrupti illum deleniti!
      </p>

      <div className="address">
        <h2>Address</h2>
        <div className="map_holder">
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8466.599685621235!2d11.834047945440922!3d57.959886849211195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464565ad81c00563%3A0x7d53b1e2ad79254f!2s442%2096%20Sk%C3%A4ggstorp!5e0!3m2!1ssv!2sse!4v1612862379736!5m2!1ssv!2sse"
              width="1200"
              height="1200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="address_text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium asperiores placeat quas, doloremque voluptate ratione
              sequi optio? Aliquid eligendi voluptatem facere maxime libero,
              molestias nemo! Officia illo, facere doloribus dicta, sapiente
              aperiam rem, nam quibusdam amet deserunt cumque sequi impedit
              consequuntur facilis quisquam debitis quod voluptatem dolorum
              commodi esse perspiciatis natus aspernatur ipsa. Amet enim placeat
              distinctio quisquam quaerat quia incidunt eveniet consequuntur,
              sint, consectetur quas. Mollitia illo incidunt quam modi
              perspiciatis? Cum quasi consequatur consectetur iste fuga?
              Voluptatem ipsam animi obcaecati? Sequi ab libero facilis minima
              nulla iste, aut blanditiis iusto assumenda asperiores at nemo id
              fuga quam optio.
            </p>
          </div>
        </div>
      </div>

      <BackToTop target="/about/#top" />
    </div>
  );
};

export default About;
