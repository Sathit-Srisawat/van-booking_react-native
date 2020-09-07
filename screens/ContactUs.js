import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ContactUs: () => React$Node = ({ navigation }) => {

  const [value, onChangeText] = React.useState('Sathit Srisawat');
  const [value1, onChangeText1] = React.useState('Satit.sr@mail.wu.ac.th');
  const [value2, onChangeText2] = React.useState('Friend : Can I get a Hoyaaaaaaaaa?');
  const [value3, onChangeText3] = React.useState('Me :Hoyaaaaaaaaa!!!');

  return (
    <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
      <View style={{ marginLeft: 30, marginTop: 50 }}>
        <Text style={{ fontSize: 30 }}>
          Contect Us
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 50 }}>
        <Icon name="user" size={20} color="#900" />
        <Text style={{ marginLeft: 50 }}>Name</Text>
      </View>
      <TextInput
        style={{ marginLeft: 120, marginTop: 20 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

      <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 40 }}>
        <Icon name="envelope-square" size={20} color="#900" />
        <Text style={{ marginLeft: 50 }}>E-mail</Text>
      </View>
      <TextInput
        style={{ marginLeft: 120, marginTop: 20 }}
        onChangeText={text => onChangeText1(text)}
        value={value1}
      />

      <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 40 }}>
        <Icon name="comments" size={25} color="#900" />
        <Text style={{ marginLeft: 50 }}>Message</Text>
      </View>
      <TextInput
        style={{ marginLeft: 120, marginTop: 20 }}
        onChangeText={text => onChangeText2(text)}
        value={value2}
      />
      <TextInput
        style={{ marginLeft: 120, marginTop: 20 }}
        onChangeText={text => onChangeText3(text)}
        value={value3}
      />

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.jumpTo('Profile')}>
            <Text style={{ paddingBottom: 25, }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// just card at home
const styles = StyleSheet.create({

  containers: {
    paddingTop: 40,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 20,
    marginTop: 200,

  },

  cards: {
    height: 50,
    width: 350,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.30,
    shadowRadius: 1.14,
    elevation: 4,

  },

  onTable: {
    color: "gray",
    marginTop: 6,
    textAlign: 'center'
  },

});
export default ContactUs;