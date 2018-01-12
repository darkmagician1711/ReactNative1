/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import GamePlay from './container/GamePlay.js'
import GameOver from './container/GameOver.js'
const gamePlay = 1;
const gameOver = 2;

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            status : gamePlay
        }
    }

    handler() {
        this.setState({
            status: (this.state.status === gamePlay) ? gameOver : gamePlay
        })
    };

    render() {
        return (
            (this.state.status === gamePlay) ? <GamePlay handler={this.handler.bind(this)} />
                                             : <GameOver handler={this.handler.bind(this)}/>
        )
    }
}