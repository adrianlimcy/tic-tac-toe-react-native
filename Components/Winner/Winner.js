import React from 'react'
import Lottie from 'lottie-react-native'
import {Animated, Easing } from 'react-native'

const Winner = () => {
    const [progressValue] = React.useState(new Animated.Value(0))

    React.useEffect(()=>{
        Animated.timing(progressValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    })

    return (
        <Lottie
        autoPlay
        style={{
            width: '100%',
            height: '100%'
        }}
        source={require('../../assets/winner.json')}
        progress={progressValue}
        />
    )
}

export default Winner