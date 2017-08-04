Footer = React.createClass({

  render() {

    const sociallinks = [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/david.pishchik',
        fontlink: 'fa fa-envelope fa-5x',
        newLink: 'https://www.facebook.com/david.pishchik',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/DPish',
        fontlink: 'fa fa-github fa-5x',
        newLink: 'https://github.com/DPish',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/dave_pish/',
        fontlink: 'fa fa-instagram fa-5x',
        newLink: 'https://www.instagram.com/dave_pish/',
      },
    ];

    const socialmedia = sociallinks.map((sociallinks) =>

      <a href={sociallinks.link}  target="_blank">
        <i className={sociallinks.fontlink} />
      </a>

    );

    return (
      <div id="tf-footer"  className="container">
        <div className="col-md-4"></div>
        <div  className="col-md-4 wow pulse animated">{socialmedia}</div>
        <div className="col-md-4"></div>
      </div>
    );
  },
});
