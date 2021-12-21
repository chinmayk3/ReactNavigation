import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export class Login extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Login </Text>
        <Button title="Go to Home" onPress={() => navigate('Home')}></Button>
      </View>
    );
  }
}

export default Login;
