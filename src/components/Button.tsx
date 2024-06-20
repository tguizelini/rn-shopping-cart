import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export enum ButtonType {
    DEFAULT, PRIMARY, SECONDARY
}

export enum ButtonSize {
    SMALL, DEFAULT
}

interface ButtonProps {
    title: string;
    type?: ButtonType;
    size?: ButtonSize;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = props => {

    const color = props.type == null || props.type == ButtonType.DEFAULT ? 'black' : 
        props.type == ButtonType.PRIMARY ? 'green' : 'red';

    const containerStyle = { 
        ...styles.container, 
        padding: props.size == null || props.size == ButtonSize.DEFAULT ? 12 
            : 4
    };

    const titleStyle = { ...styles.title, color: color };

    return (
        <TouchableOpacity 
            style={containerStyle}
            onPress={() => { if (props.onPress) props.onPress(); }}
        >
            <Text style={titleStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 700
    }
});

export default Button;