import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = () => {
    return(
        <View style={styles.container}>
            <Image 
                style={{width: 190, height: 50}}
                source={require('../img/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 10,
        backgroundColor: 'white',
        width: '100%'
    },
    
  });

export default Logo