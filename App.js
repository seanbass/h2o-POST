import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class h2oSensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

    async function getH2oSensor() {
    try {
      let response = await fetch('https:/json');
      let responseJson = await response.json();
      return responseJson.h2oSensor;
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}