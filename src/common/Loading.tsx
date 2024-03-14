import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import React from 'react';

type LoadingProps = {
    isLoading: boolean;
}

const Loading = (props: LoadingProps) => {
    return (
        <Modal
            visible={props.isLoading}
            transparent={false}>
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        </Modal>
    );
}
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});