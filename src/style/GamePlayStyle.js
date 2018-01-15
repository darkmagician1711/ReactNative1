import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header_context_title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    header_context_score: {
        textAlign: "center",
        fontSize: 25
    },
    contain: {
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }

});

export default styles;