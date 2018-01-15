import React, {Component} from 'react'
import {Dimensions, Platform, StyleSheet, View} from 'react-native'

export default class StyleDemo extends Component {

    state = {
        width: 0,
        height: 0
    };

    _onLayout = () => {
        const {width, height} = Dimensions.get("window");
        this.setState({
            width,
            height
        })
    };

    componentDidMount() {
        this._onLayout();
    }

    render() {
        return (
            <View style={{flex: 1}} onLayout={this._onLayout}>
                <View style={{flex: 1, flexDirection: "row", alignItems: "flex-end"}}>
                    <View style={{backgroundColor: "red", height: this.state.width / 2, width: this.state.width / 2}}>
                    </View>
                    <View style={{backgroundColor: "blue", height: this.state.width / 2, width: this.state.width / 2}}>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 1, backgroundColor: "black", height: this.state.width / 2, width: this.state.width / 2}}>
                    </View>
                    <View style={{flex: 1, backgroundColor: "green", height: this.state.width / 2, width: this.state.width / 2}}>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        paddingTop: Platform.OS === "ios" ? 20 : 0
    }
});

