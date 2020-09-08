
import React from 'react'
import { View, Button, TextInput } from 'react-native'
class Salam extends React.Component {
  constructor(){
    super();
    this.state={
      name:"nobody",
    }
  }
  onButtonClicked(){
    this.setState(
      {
        name:"tt le monde",
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Salam {this.props.username}</Text>
        <Button title="click me"
        onPress={()=>this.onButtonClicked()}/>
        <Text>Salam {this.state.name}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Salam;
