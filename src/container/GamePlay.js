import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import ColorButton from '../component/ColorButton.js'

export default class GamePlay extends Component {

    state = {
        scores: 0,
        targetInput: [],
        inputIndex: 0,
        index : -1,
    };

    _onPressButton = (idInput) => {
        if (idInput === this.state.targetInput[this.state.inputIndex]) {
            this.setState({
                inputIndex: this.state.inputIndex + 1
            }, () => {
                if (this.state.inputIndex === this.state.scores + 1) {
                    this.setState({
                        scores: this.state.scores + 1
                    }, () => this.randomTargetInput(0, 4))
                }
            })
        } else {
            this.props.handler();
        }
    };

    run = (count) => {
        setTimeout(() => {
            this.setState({
                index : count + 1
            }, () => {
                setTimeout(() => this.setState({
                    index : -1
                }),200);
                if (count !== this.state.scores) this.run(count+1);
            })
        }, 800)
    };

    randomTargetInput = (min, max) => {
        this.setState({
            inputIndex: 0,
            targetInput: Array.from({length: this.state.scores + 1}, () => Math.floor(Math.random() * (max - min) + min))
        }, () => this.run(this.state.index))
    };

    componentDidMount(){
        this.randomTargetInput(0, 4);
    }

    render() {
        return (
            <View>
                <Text>{this.state.scores}</Text>
                <ColorButton onPress={() => this._onPressButton(0)}
                             check={this.state.index!==-1 && this.state.targetInput[this.state.index]===0}
                             background="red"/>
                <ColorButton onPress={() => this._onPressButton(1)}
                             check={this.state.index!==-1 && this.state.targetInput[this.state.index]===1}
                             background="blue"/>
                <ColorButton onPress={() => this._onPressButton(2)}
                             check={this.state.index!==-1 && this.state.targetInput[this.state.index]===2}
                             background="green"/>
                <ColorButton onPress={() => this._onPressButton(3)}
                             check={this.state.index!==-1 && this.state.targetInput[this.state.index]===3}
                             background="black"/>
            </View>
        )

    }
}