import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { width, height } from 'libs/dimensions';
import { Styling } from 'ui/theme/general';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    children: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: Styling.fontSize3,
        textAlign: 'center',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: height / 11,
    },
});

export default class Button extends PureComponent {
    static propTypes = {
        /** Press event callback function */
        onPress: PropTypes.func.isRequired,
        /** Button text */
        children: PropTypes.string.isRequired,
        /** Component styles to override default ones */
        style: PropTypes.object,
        /** Id for automated screenshots */
        testID: PropTypes.string,
        /** Determines whether to display ActivityIndicator */
        isLoading: PropTypes.bool,
    };

    static defaultProps = {
        style: {},
        testID: '',
    };

    render() {
        const { style, children, testID, isLoading } = this.props;

        return (
            <View style={[styles.container, style.container]}>
                <TouchableOpacity onPress={() => this.props.onPress()} testID={testID}>
                    <View style={[styles.wrapper, style.wrapper]}>
                        {(isLoading && <ActivityIndicator color={style.loading.color} size="small" />) || (
                            <Text style={[styles.children, style.children]}>{children}</Text>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
