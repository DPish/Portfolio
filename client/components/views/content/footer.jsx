Footer = React.createClass({


  render() {

    const sociallinks = [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/david.pishchik',
        fontlink: 'fa fa-envelope fa-5x',
        newLink: 'https://www.facebook.com/david.pishchik'
      },
      {
        name: 'GitHub',
        link: 'https://github.com/DPish',
        fontlink: 'fa fa-github fa-5x',
        newLink: 'https://github.com/DPish'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/dave_pish/',
        fontlink: 'fa fa-instagram fa-5x',
        newLink: 'https://www.instagram.com/dave_pish/'
      },
    ]

    const socialmedia = sociallinks.map((sociallinks) =>
      <li>
      <a href={sociallinks.link}  target="_blank">
        <i className={sociallinks.fontlink} />
      </a>
      </li>
    );

    return (
      <div id="tf-footer"  className="container">

          <ul className="list-inline social">
              {socialmedia}
          </ul>
      </div>

    );
  }
});
