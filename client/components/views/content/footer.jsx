Footer = React.createClass({


  render() {

    const sociallinks = [
      {
        name: 'Facebook',
        link: '#',
        fontlink: 'fa fa-facebook',
        newLink: ''
      },
      {
        name: 'Twitter',
        link: '#',
        fontlink: 'fa fa-twitter',
        newLink: ''
      },
      {
        name: 'instagram',
        link: '#',
        fontlink: 'fa fa-instagram',
        newLink: ''
      },
    ]

    const socialmedia = sociallinks.map((sociallinks) =>
      <li><a href={sociallinks.link}><i className={sociallinks.fontlink} /></a></li>
    );

    return (
      <div id="tf-footer">
          <div className="container">
              <p className="pull-left">© 2017 Painting Co. All rights reserved.</p>
              <ul className="list-inline social pull-right">
                  {socialmedia} &nbsp; &nbsp;
              </ul>
          </div>
      </div>

    );
  }
});
