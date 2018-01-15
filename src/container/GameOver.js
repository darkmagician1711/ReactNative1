import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class GameOver extends Component{
    render(){
        return(
            <View>
                <Text style={{textAlign : "center"}}>
                    You Lose!!
                </Text>
                <Text style={{textAlign : "center"}}>
                    Your scores: {this.props.scores}
                </Text>
                <TouchableOpacity onPress={this.props.handler}>
                    <Text style={{backgroundColor:"red", color:"white", textAlign: "center"}}>
                        Play Again
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}