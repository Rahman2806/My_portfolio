export default function HeroSection() {
  function downloadFile() {
    const url = 'https://drive.google.com/file/d/19P6wZlx5SzVa3dvKaJb-JJXbJlFVNA4Q/view?usp=sharing';
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = url.split('/').pop(); // Set the filename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abdul Rahman</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
          I can utilize to design visually appealing and user-friendly websites. Our Main Goal to help & Satisficed the Local & Global Clients by web development solutions.</p>
        </div>
        <button onClick={downloadFile} className="btn btn-primary">Downlode My CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
