import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const Week02 = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Image source= {require('./assets/Vaness.png')} style={{ width: 100, height: 100 }}/>
                <Text>Vaness Febraio</Text>
                <Text>00000055310</Text>
            </View>

            <View style={styles.content}>
                <Image source= {require('./assets/John.png')} style={{ width: 100, height: 100 }}/>
                <Text>John</Text>
                <Text>00000072392</Text>
            </View>

            <View style={styles.content}>
                <Image source= {require('./assets/Steve.png')} style={{ width: 100, height: 100 }}/>
                <Text>Steve</Text>
                <Text>00000089123</Text>
            </View>

            <View style={styles.content}>
                <Image source= {require('./assets/David.png')} style={{ width: 100, height: 100 }}/>
                <Text>David</Text>
                <Text>00000038265</Text>
            </View>

            <View style={styles.content}>
                <Image source= {require('./assets/Maria.png')} style={{ width: 100, height: 100 }}/>
                <Text>Maria</Text>
                <Text>00000091726</Text>
            </View>

            <View style={styles.content}>
                <Image source= {require('./assets/Mia.png')} style={{ width: 100, height: 100 }}/>
                <Text>Mia</Text>
                <Text>00000037291</Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    content: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Week02;
