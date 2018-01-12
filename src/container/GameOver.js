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
                <Text>
                    You Lose!!
                </Text>
                <TouchableOpacity onPress={this.props.handler}>
                    <Text style={{backgroundColor:"red", color:"white"}}>
                        Play Again
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}