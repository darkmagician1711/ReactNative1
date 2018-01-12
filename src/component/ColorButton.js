import React , {Component} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

class ColorButton extends Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style = {(this.props.check === false)
                            ? [styles.box_nonPress , {backgroundColor : this.props.background}]
                            : [styles.box_onPress , {backgroundColor : this.props.background}]}>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    box_nonPress : {
        height: 50,
        width: 50,
        opacity : 1
    },
    box_onPress : {
        height: 50,
        width: 50,
        opacity: 0.2
    }
});

export default ColorButton;