import React from "react";
import me from "../imgs/me.jpeg";

const Container = () => {
  return (
    <div className="container d flex justify-content-center">
      <div className="row">
        <div id="about" className="col-md-12">
          <div className="card">
            <div className="cardbody">
              <h1 class="title"> About Me</h1>
              <img src={me} alt="me" />
              <p>
                Hello! My name is Geoffrey Jiang, I am currently staying in the
                Bay Area and a student at UC Berkeley Extension Coding Bootcamp!
                Before this I graduated with a Health Science degree from
                Merritt College and worked as an EMT. As you may have figured
                out by now, I have little to no experience with coding. I also
                recently learned I am not hip with modern technology as I am
                always amazed with what new technology can do! Did you know
                there is a self vacuum cleaner that know's how to charge itself?
                Me neither. I chose to take on coding because it was time for me
                to move on from the medical field, growing as tired as i was
                from working there. Coding has offered me a step into a whole
                different direction from what i am used to and i'm excited to
                see where it will take me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
