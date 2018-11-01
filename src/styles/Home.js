import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingVertical: 30,
    },

    header: {
        flex: 1,
    },

    timerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    timer: {
        fontSize: 60,
    },

    controlerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    button: {
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        
    },

    buttonStart: {
        borderColor: 'green',
    },

    buttonPause: {
        borderColor: 'red',
    },

    buttonReset: {
        borderColor: 'gray',
    },
    lapContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    lapWrapper: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    lapText: {
        fontSize: 30,
    }

});
