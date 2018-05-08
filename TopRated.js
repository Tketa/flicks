import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class TopRated extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: "Top Rated"
    }
    render() {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default TopRated;
