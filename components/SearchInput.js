import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet,
  TextInput,
  View
} from 'react-native'

export default class SearchInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder:  ''
  }

  constructor(props){
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChangeText = (text) => {
    this.setState({ text });
  }

  handleSubmitEditing = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    if(!text) return;

    onSubmit(text);

    this.setState({text: ''});
  }

  render(){
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
  },
});
