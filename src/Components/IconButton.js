import React from 'react';
import {Text, Container, Content, Button,Icon} from 'native-base';

const styles = {
  container: {
    backgroundColor: '#5f4b8b',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 0,
    width: 170,
    borderColor: '#5f4b8b'
  },
  text: {
    marginLeft: 35,
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Raleway',
    alignItems: 'center'
  },
  icon: {
    color: '#ffffff',
    marginRight: 40,
    height: 25,
    width: 25
  }
};

class IconButton extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button rounded light style={styles.container} onPress={() => this.props.onPress()}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Icon type='MaterialIcons' style={styles.icon} name={this.props.Icon} />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default IconButton;