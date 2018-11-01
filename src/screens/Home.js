import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

import styles from './../styles/Home';


export class Home extends Component {
    count = null;
    dem = 0;

    constructor(props) {
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            laps: []
        }

        this.handleStartPress = this.handleStartPress.bind(this);
        this.handlePausePress = this.handlePausePress.bind(this);
        this.handleResetPress = this.handleResetPress.bind(this);
        this.handleLapPress = this.handleLapPress.bind(this);
    }

    handleStartPress() {
        this.count = setInterval(()=>{
            this.dem ++;
            console.log('Start '+this.dem);
            console.log(this.state);
            this.setState({
                timeElapsed: this.dem
            });
        }, 0);

        this.setState({
            running: true
        });
    }

    handlePausePress() {
        this.setState({
            running: false,
        });
        clearInterval(this.count);
        console.log('Pause'+this.dem);
        console.log('Pause',this.state);
    }

    handleResetPress() {
        clearInterval(this.count);
        this.dem = 0; 
        console.log('Reset'+this.dem);
        console.log(this.state);
        this.setState({
            timeElapsed: 0,
            running: false,
        });
    }

    handleLapPress() {
        let lap = this.state.timeElapsed;
        this.setState({
            laps: this.state.laps.concat([lap])
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    {/* timer */}
                    <View style={ styles.timerContainer }>
                        <Text style={ styles.timer }>
                            {FormatTime(this.state.timeElapsed)}
                        </Text>
                    </View>

                    {/* controler */}
                    <View style={ styles.controlerContainer }>
                        {!this.state.running ? (
                            <TouchableOpacity
                                onPress={ this.handleStartPress }
                                style={[styles.button, styles.buttonStart]}
                            >
                                <Text>PLAY</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={ this.handlePausePress }
                                style={[styles.button, styles.buttonPause]}
                            >
                                <Text>PAUSE</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                                onPress={ this.handleResetPress }
                            style={[styles.button, styles.buttonStop]}
                        >
                            <Text>RESET</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                                onPress={ this.handleLapPress }
                            style={[styles.button, styles.buttonStop]}
                        >
                            <Text>LAP</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Laps */}
                    <View style={ styles.lapContainer }>
                        <ScrollView>
                            {this.state.laps.map((time, index)=>{
                                return(
                                    <View style={ styles.lapWrapper }>
                                        <Text style={ styles.lapText }>
                                            Lap #{index + 1}
                                        </Text>
                                        <Text style={ styles.lapText }>
                                            {FormatTime(time)}
                                        </Text>
                                    </View>
                                )})
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
        
    }
}

export default Home;