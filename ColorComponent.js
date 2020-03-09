import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject("ColorStore")
@observer
export default class ColorComponent extends React.Component {
    render() {
        return (
            <View>
                <Text>{`Color is:  ${this.props.ColorStore.color}`}</Text>
            </View>
        );
    }
}