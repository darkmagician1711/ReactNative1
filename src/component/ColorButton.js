import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

class ColorButton extends Component {
    render() {
        const padding = 10;
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{padding : padding}}>
                <View style={(this.props.check === false)
                    ? [styles.box_nonPress,
                        { backgroundColor: this.props.background ,
                          height : this.props.size/2 - padding*4 ,
                          width : this.props.size/2 - padding*4}]
                    : [styles.box_onPress,
                        { backgroundColor: this.props.background ,
                          height : this.props.size/2 - padding * 4,
                          width : this.props.size/2 - padding * 4 }]}>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    box_nonPress: {
        opacity: 1,
        elevation: 5,
    },
    box_onPress: {
        opacity: 0.2,
    }
});

export default ColorButton;