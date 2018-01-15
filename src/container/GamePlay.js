import React, {Component} from 'react'
import {Dimensions, Text, View} from 'react-native'
import ColorButton from '../component/ColorButton.js'
import styles from '../style/GamePlayStyle.js'

export default class GamePlay extends Component {

    state = {
        scores: 0,
        targetInput: [],
        userInputIndex: 0,
        index: -1,
        size: 0
    };

    _onPressButton = (idInput) => {
        (idInput === this.state.targetInput[this.state.userInputIndex])
            ? this.setState({
                userInputIndex: this.state.userInputIndex + 1
            }, () => {
                this.state.userInputIndex === this.state.scores + 1
                && this._nextLevel(this.state.scores + 1)
            }
            )
            : this.props.handler(this.state.scores);
    };

    _animationDemo = (count) => {
        setTimeout(() => {
            this.setState({
                index: count + 1
            }, () => {
                setTimeout(() => this.setState({
                    index: -1
                }), 200);
                if (count !== this.state.scores) this._animationDemo(count + 1);
            })
        }, 800)
    };

    _randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

    _nextLevel = (scores) => {
        this.setState({
            scores,
            targetInput: this.state.targetInput.concat(this._randomInt(0, 4)),
            userInputIndex: 0
        }, () => this._animationDemo(this.state.index))
    };

    _getSize = () => {
        const {width, height} = Dimensions.get("window");
        this.setState({
            size: (width > height) ? height * 8 /10 : width *8/10
        })
    };

    componentDidMount() {
        this._nextLevel(0);
    }

    render() {
        return (
            <View style={styles.container} onLayout={this._getSize}>
                <View style={styles.header}>
                    <Text style={styles.header_context_title}>Your Score</Text>
                    <Text style={styles.header_context_score}>{this.state.scores}</Text>
                </View>
                <View style={[styles.contain, {width: this.state.size}]}>
                    <ColorButton onPress={() => this._onPressButton(0)}
                                 check={this.state.index !== -1 && this.state.targetInput[this.state.index] === 0}
                                 background="red"
                                 size={this.state.size}/>
                    <ColorButton onPress={() => this._onPressButton(1)}
                                 check={this.state.index !== -1 && this.state.targetInput[this.state.index] === 1}
                                 background="blue"
                                 size={this.state.size}/>
                    <ColorButton onPress={() => this._onPressButton(2)}
                                 check={this.state.index !== -1 && this.state.targetInput[this.state.index] === 2}
                                 background="green"
                                 size={this.state.size}/>
                    <ColorButton onPress={() => this._onPressButton(3)}
                                 check={this.state.index !== -1 && this.state.targetInput[this.state.index] === 3}
                                 background="black"
                                 size={this.state.size}/>
                </View>
            </View>
        )
    }
}