/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import GamePlay from './container/GamePlay.js'
import GameOver from './container/GameOver.js'

const GAME_STATE = {
    PLAYING     : 1,
    GAMEOVER    : 2
};

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            status : GAME_STATE.PLAYING,
            scores : 0
        }
    }

    _changeGameState(status, scores){
        this.setState({
            status,
            scores
        })
    };

    render() {
        return (
            (this.state.status === GAME_STATE.PLAYING)
                ? <GamePlay
                    handler={(scores) => this._changeGameState(GAME_STATE.GAMEOVER,scores)}/>
                : <GameOver
                    handler={() => this._changeGameState(GAME_STATE.PLAYING,0)}
                    scores={this.state.scores}/>
        )
    }
}