MainIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};
     let query1 = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndex', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'postsIndex' );
      Meteor.subscribe( 'servicesIndex' );
    }

    return {
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch(),
      services: Services.find( query1, { sort: { updated: -1 } } ).fetch(),
    };
  },
  renderPosts() {
    if ( this.data.posts.length > 0 ) {
      return this.data.posts.map( ( post ) => {
        return <Post key={ post._id } post={ post } />;
      });
    } else {
      return <WarningAlert>No posts found.</WarningAlert>;
    }
  },
  renderServices(){
    if ( this.data.services.length > 0 ) {
      return this.data.services.map( ( service ) => {
        return <Service key={ service._id } service={ service } />;
      });
    } else {
      return <WarningAlert>No services found.</WarningAlert>;
    }
  },

  render() {
    return <div className="main-index">
      <GridRow>
        <GridColumn className="col-md-12">


      <Header />
      <br />

       <div id="tf-services" className="container-fluid">
          <h2> Previous Projects</h2>

          {this.renderServices()}<br />

       </div>


       <div>
<a id="What_We_Offer"></a>
<div className="row" id="WhatWeOffer">
<div className="container">
<div className="wow slideInLeft">
   <div className="row">
       <div className="wow pulse animated" data-wow-delay="300ms" data-wow-duration="2s" >
           <div className="product_head">What We Offer</div>
       </div>
       <div className="col-md-4 col-sm-6 products ">
           <h2>
               <a><span className="glyphicon glyphicon-stats"></span></a>&nbsp;&nbsp;Product 1</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

       <div className="col-md-4 col-sm-6 products ">
           <h2>
               <a><span className="glyphicon glyphicon-road"></span></a>&nbsp;&nbsp;Product 2</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

       <div className="col-md-4 col-sm-6 products  ">
           <h2>
               <a><span className="glyphicon glyphicon-refresh"></span></a>&nbsp;&nbsp;Product 3</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

       <div className="col-md-4 col-sm-6 products ">
           <h2>
               <a><span className="glyphicon glyphicon-fire"></span></a>&nbsp;&nbsp;Product 4</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

       <div className="col-md-4 col-sm-6 products  ">
           <h2>
               <a><span className="glyphicon glyphicon-bullhorn"></span></a>&nbsp;&nbsp;Product 5</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

       <div className="col-md-4 col-sm-6 products  ">
           <h2>
               <a><span className="glyphicon glyphicon-time"></span></a>&nbsp;&nbsp;Product 6</h2>
           <p>
               Maxime, quis, animi, ad quasi adipisci suscipit alias iste reprehenderit ea placeat nulla commodi nobis magnam provident veniam earum odit eveniet possimus aut voluptatum dolorum culpa necessitatibus facere totam quisquam. Ipsam.
           </p>
       </div>

   </div>
</div>
</div>
</div>
</div>

          <Footer /><br />
        </GridColumn>
</GridRow>
    </div>;
  }
});
