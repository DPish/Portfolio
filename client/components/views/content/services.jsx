ServicePage = React.createClass ({

  render() {

    const services = [
      {
        title: "http://www.nycpaintservice.com ",
        img: "sn1.jpg",
        web: "http://www.nycpaintservice.com"
      },
      {
        title: "residential exterior ",
        img: "sn2.jpg",
        web: "Lorem ipsum dolor sit amet, diam pede tortor ut, proin commodo sed vel, risus magnis sed lectus."

      },
      {
        title: "commercial painting ",
        img: "sn2.pmg",
        web: "Lorem ipsum dolor sit amet, diam pede tortor ut, proin commodo sed vel, risus magnis sed lectus."
      }
    ]


    const listService = services.map((service) =>
      <div id="portfolio-content" className="col-xs-4 col-sm-4 col-md-4 col-lg-4 nopadding">
          <div className="portfolio-page" id="page-1">
              <div className="portfolio-group">
                 <a className="portfolio-item" href={service.web} title={ service.web } target="_blank">
                  	<img src= { service.img } alt="image 1" />
                    <div className="detail">
        							<h3>   {service.title} </h3>
        							<p>Duis ac laoreet .</p>
        							<span className="btn"> {service.title}</span>
        						</div>

                  </a>
              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-services">
        <div className="container">
            <div className="section-header">
                <h2>Our <span className="highlight"><strong>Services</strong></span></h2>
                <h5><em>Our Services</em></h5>
            </div>
        </div>
        <div className="container">
             <div id="itemsWork" className="row text-center">
              {listService}
            </div>
        </div>
      </div>

    );
  }
});
