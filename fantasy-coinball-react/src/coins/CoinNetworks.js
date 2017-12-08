import React from 'react';
import {connect} from 'react-redux';
import {fetchCoinNetworks, developerAssign} from '../store/actions';

import {Container, Card, Image, Grid, Header} from 'semantic-ui-react';

import {flatMap, includes, find} from 'lodash';

class CoinNetworks extends React.Component {
  peopleColumn (collection) {
    return (
      <div>
      <Card.Group itemsPerRow={8}>
        {collection.map (p => {
          let inOwnTeam = includes(this.props.developers, p.Name);
          return (
            <Card
              class="test"
              draggable={inOwnTeam ? false : true}
              onDragStart={this.dragStart (p.Name)}
            >
              <Image
                src={'https://api.adorable.io/avatars/290/' + p.Name}
                width="200px"
                height="100px"
                draggable="false"
                class={inOwnTeam ? 'grayscale ui image' : 'ui image'}
              />
              <Card.Header>
                {p.Name}
              </Card.Header>
              <Card.Meta>
                {p.Type}
              </Card.Meta>
            </Card>
          );
        })}
      </Card.Group>
      <div>
        Team Score: {this.totalScore}
        </div>
      </div>
    );
  }

  dragStart (name) {
    return ev => {
      console.log ('Started drag', name);
      ev.dataTransfer.setData ('text/plain', name);
    };
  }
  dragOver (ev) {
    ev.preventDefault ();
    ev.dataTransfer.dropEffect = 'move';
  }
  drop (index) {
    return ev => {
      console.log ('Drop to ' + index, ev);
      ev.preventDefault ();
      let name = ev.dataTransfer.getData ('text/plain');
      this.props.assignDeveloper (name, index);
    };
  }
  findDeveloper(name) {
    let developers = flatMap(this.props.networks.map((n) => n.People));
    return find(developers, {name: name});
  }

  renderCard (text, index) {
    let devName = this.props.developers[index];
    let dev = this.findDeveloper(devName);
    return (
      <Card
        draggable="true"
        onDragStart="this.dragStart(dev.name)"
        onDragOver={this.dragOver}
        onDrop={this.drop (index)}
      >
        <Image
          src={devName === null ? "https://image.flaticon.com/icons/png/512/36/36601.png" : 'https://api.adorable.io/avatars/290/' + devName}
          width="200px"
          height="100px"
        />
        <Card.Header>
          {devName === null ? 'None chosen' : devName}
        </Card.Header>
        <Card.Meta>
          {text}
        </Card.Meta>
      </Card>
    );
  }

  render () {
    console.log ('Render', this.props);
    if (!this.props.networks[0]) return <h1>Loading...</h1>;
    const items = flatMap (this.props.networks, n => [
      <Grid.Row><Header>{n.Name}</Header></Grid.Row>,
      <Grid.Row stretched>
        {this.peopleColumn (n.People)}
      </Grid.Row>,
    ]);
    return (
      <Grid>
        {items}
        <Grid.Row><Header>Your Team</Header></Grid.Row>
        <Grid.Row stretched>
          <Card.Group itemsPerRow={8}>
            {this.renderCard ('Leader', 0)}
            {this.renderCard ('Engineer', 1)}
            {this.renderCard ('Engineer', 2)}
            {this.renderCard ('Engineer', 3)}
          </Card.Group>
        </Grid.Row>
      </Grid>
    );
  }
  componentDidMount () {
    this.props.fetchCoinNetworks ();
  }
}

const mapStateToProps = state => {
  return {
    networks: state.CoinNetworks,
    developers: state.Developers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinNetworks: () => dispatch (fetchCoinNetworks ()),
    assignDeveloper: (name, index) => dispatch (developerAssign (name, index)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CoinNetworks);
