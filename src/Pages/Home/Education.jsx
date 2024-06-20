import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Experience</p>
          <h2 className="sections--heading">Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <h2>{item.title}</h2>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.location}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
