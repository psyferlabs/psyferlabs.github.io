// react-app.js - Your React JavaScript file

// Define the functional components for different sections of the SPA
function Home() {
  return (
    <section className="section section--hello" id="hello">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#intro"><span>#0</span>Welcome, weary traveler!</a>
          <h2>Hey, I'm<br />Christian Kessler</h2>
          <ul className="anchornav">
            <li><a href="#intro">introduction <span>#1 what does he do?</span></a></li>
            <li><a href="#about">work <span>#2 doing what i love!</span></a></li>
            <li><a href="#clients">why i do it <span>#3 what does this work for?</span></a></li>
            <li><a href="#portfolio">portfolio <span>#4 some examples of my work</span></a></li>
            <li><a href="#contact">contact me <span>#5 need to reach me?</span></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="section section--intro" id="intro">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#intro"><span>#1</span>what does he do?</a>
          <h1>I am a smart contract auditor, cloud engineer<br /> &amp; Full-Stack Developer<br />based in Los Angeles,<br />California.</h1>
          <p className="lead">
            You can also find my full resume on <a href="https://linkedin.com/in/christian-kessler/">LinkedIn</a>, my music projects at <a href="https://soundcloud.com/christiankessler" className="link">SoundCloud&nbsp;</a>and my personal twitter <a href="https://twitter.com/psyferpunkmn" className="link">here</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section section--about" id="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon points="100 0 100 10 0 10" />
      </svg>

      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#about"><span>#2</span>doing what i love</a>
          <h2>Currently I work as a Blockchain Community Specialist at<br />MyEtherWallet, educating users & providing support for one of the world's largest blockchain communities.<h2></h2>
        </div>
      </div>
    </section>
  );
}

function WhyDoIt() {
  return (
    <section className="section section--clients" id="clients">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon points="100 10 0 0 0 10" />
      </svg>

      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#clients"><span>#3</span>why i do this</a>
          <h2>developing dapps, new methods for cost-effective &amp; super efficient cloud computing solutions, ultra-secure smart contracts and utilities for Front-End integration;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
            <br />
            my goal is to enlighten, educate and help users navigate the web3 space more easily.</h2>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section section--portfolio1" id="portfolio">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
      </svg>

      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#portfolio"><span>#4</span>portfolio & experience</a>
          <h2><a href="https://ezevm.psyferpunk.repl.co/">ezEVM</a></h2>
          <p className="lead">simple EVM contract deployment UI</p>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <button onClick={playPause}>Play/Pause</button>
            <br />
            <video id="video1" width="810" height="540" muted controls>
              <source src="ezDemonstration.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#contact"><span>#5</span>contact me</a>
          <h2>to reach me<br />please email:<br />
            <span><a href="mailto:aspengrey@psyferpunk.org">aspengrey@psyferpunk.org</a></span></h2>
          <p className="lead">More links: <a href="https://github.com/christiankesslers">GitHub</a>, <a href="https://twitter.com/psyferpunkmn">Twitter</a> and <a href="https://www.linkedin.com/in/christian-kessler">Linkedin</a>.</p>
        </div>
      </div>
    </section>
  );
}

// Render the App component inside the #app div
ReactDOM.render(
  <div>
    <Home />
    <Introduction />
    <Work />
    <WhyDoIt />
    <Portfolio />
    <Contact />
  </div>,
  document.getElementById("app")
);
