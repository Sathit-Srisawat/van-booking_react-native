import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//const Profile: () => React$Node = ({ route }) => 
export default class Profile extends React.Component {


  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/profile'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }

  componentDidMount = () => {
    this.fetchData();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Icon name="user-circle" size={80} color="#900" />
        </View>
        <View style={{ marginTop: 10, alignItems: 'center', marginTop: 50 }}>
          {/*<Text style={{ fontSize: 25 }}>
          Dev Sathit Srisawat
        </Text>*/}
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>

              <View style={{ marginTop: 15 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25 }}>
                  <Text style={{ color: '#000000' }}>{'\t'}{item.position} {'\t'}{item.firstname}{'\t'}{item.lastname}</Text>
                </Text>
              </View>
            }
          />
        </View>
        <View style={styles.cards}>
          <View style={{ marginTop: 50, marginLeft: 50, flexDirection: 'row' }}>
            <Icon name="envelope-square" size={20} color="#900" />
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>

                <View>
                  <Text style={{ color: '#000000', fontSize: 15 }}>  E-mail :  {item.email}</Text>
                </View>
              }
            />
          </View>

          <View style={{ marginTop: 20, marginLeft: 50, flexDirection: 'row' }}>
            <Icon name="phone" size={20} color="#900" />
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View>
                  <Text style={{ color: '#000000', fontSize: 15 }}>  Phone :  {item.phone}</Text>
                </View>
              }
            />
          </View>

        </View>

        <View style={styles.card}>
          <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, fontWeight: "bold" }}>
            Your Ticket
        </Text>
          <View style={{ marginTop: 15 }}>
            <View style ={styles.tiket}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View>
                    <Text style={{ color: '#000000', fontSize: 15 }}>  Phone :  {item.phone}</Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cards: {
    width: 350,
    height: 150,
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  card: {
    width: 350,
    height: 250,
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  tiket: {
    width: 285,
    height: 140,
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: "#68b0ab",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 3.11,
    elevation: 14,
  },

});
//export default Profile;