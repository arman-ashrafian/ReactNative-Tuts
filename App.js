import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text style={this.props.style}>Hello {this.props.name}</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        // toggle state.showText every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText : !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={this.props.style}>{display}</Text>
        );
    }
}

class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: ''};
    }

    render() {
        return (
            <View style={{padding:10}}>
                <TextInput
                    style={{width:100}}
                    placeholder="Type here to translate"
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
        );
    }
}

export default class App extends Component {
  render() {
    return (
        <View style={{alignItems: 'center', flex:1, padding:40}}>
            <Text style={{
                backgroundColor: 'powderblue'
            }}>Some text</Text>
            <Greeting style={styles.bigBlue} name='Arman' />
            <Greeting style={styles.bigBlue} name='Another Name' />
            <Blink style={styles.red} text="Blinking Text" />
            <Translator />
        </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'skyblue',
    },
    red: {
        color: 'red',
    },
});
