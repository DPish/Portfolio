ServicesList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'servicesList' );

    return {
      services: Services.find().fetch().map( ( service ) => {
        return { uid: service._id, href: `/services/${ service._id }/edit`, label: service.title };
      })

    };
  },
  handleNewService() {
    Meteor.call( 'newService', ( error, serviceId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/services/${ serviceId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  renderServicesList() {
    if ( this.data.services.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.services } />;
    } else {
      return <WarningAlert>No services found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>

      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <br />
        <br />
        <br />


        <PageHeader size="h4" label="Services" />
          <SuccessButton type="button" label="New Service" onClick={ this.handleNewService } />
        { this.renderServicesList() }
      </GridColumn>
    </GridRow>;
  }
});
