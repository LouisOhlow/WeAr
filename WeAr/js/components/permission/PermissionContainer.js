import React from 'react';
import { View, AppState, StyleSheet } from 'react-native';
import PermissionHint from './PermissionHint';

/**
 * The container for the Permission Information
 */
export default class PermissionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      appState: AppState.currentState,
      permissionStatus: 'blocked',
    };
  }

  componentDidMount() {
    this.getPermissionStatus();
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  requestPermission = () => {
  }

  getPermissionStatus = () => {
  }

  handleAppStateChange = (nextAppState) => {
    const { appState } = this.state;
    if (
      appState.match('background')
      && nextAppState === 'active'
    ) {
      this.getPermissionStatus();
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    const { permissionStatus } = this.state;
    const { children } = this.props;

    const hasPermission = true;
    return (
      <View style={styles.container}>
        {!hasPermission
          ? (
            <PermissionHint
              permissionStatus={permissionStatus}
              checkPerm={this.requestPermission}
            />
          ) : children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})