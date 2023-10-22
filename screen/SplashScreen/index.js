import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
export const SplashScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Đây là SplashScreen
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={{ backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 20, width: '80%', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>
                    click chuyển màn login
                </Text>
            </TouchableOpacity>
        </View>
    )
}