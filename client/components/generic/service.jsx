Service = React.createClass({
  getServiceTitle() {
    let service = this.props.service;

    if ( this.props.singleService ) {
      return <h3>{ service.title }</h3>;
    } else {
      return <h3><a href={ `/services/${ service.slug }`}>{ service.title }</a></h3>;
    }
  },

  renderImg( imgCover ) {
    var imageUrl = "#";
    if(imgCover){
      imageUrl = $.trim(imgCover);
      return <img src={ imageUrl } className="img-responsive" content="img-src data: {imageUrl}"/>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        service                 = this.props.service;

    return <div className="service">

          <div  id="portfolio-content" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 nopadding">
              <div className="portfolio-page">
                  <div className="portfolio-group">
                    <a className="portfolio-item" href={service.web} title={ service.web } target="_blank">
                        { this.renderImg( service.imgUrl ) }
                        <div className="detail">
                          <h3>Wavy Road</h3>
                          <p>Duis ac laoreet .</p>
                          <span className="btn">View</span>
                        </div>

                    </a>

                </div>
              </div>
          </div>
    </div>;
  }
});
