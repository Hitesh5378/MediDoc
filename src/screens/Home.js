import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,

  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

import { LinearGradient } from 'expo-linear-gradient';
import CommonBtn from '../Components/CommonBtn';


const Home = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Header title="DoctorApp" icon={require('../images/logo.png')}
          />
          <Image source={require('../images/banner.jpg')} style={styles.banner} />
          <Text style={styles.heading}>Select Category</Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      // Button Linear Gradient
                      colors={['#009FFD', '#2A2A72']}

                      style={styles.linearGradient}>


                      <Text style={styles.catName}>
                        {'Category ' + index }
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1]}
              renderItem={({ item, index }) => {

                return (
                  <View style={styles.docItem}>

                    <Image style={styles.docImg} source={require('../images/doctor.png')} />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docSpl}>Skin SpeciaList</Text>
                    <Text style={[styles.status, {
                      color: index / 2 == 0 ? 'green' : 'red',
                      opacity: index / 2 == 0 ? 1 : 0.5,
                    }]}>{index / 2 == 0 ? 'Available' : 'Busy'}</Text>
                    <CommonBtn

                      w={'100%'}
                      h={40}
                      txt={'Book Appointment'}
                      status={index / 2 == 0 ? true : false}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate('BookAppointment')
                        }



                      }}



                    />


                  </View>
                )


              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../images/completed.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../images/pending.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmb');
          }}>
          <Image
            source={require('../images/ambulance.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    marginTop: 15, // Corrected marginTop value
    fontWeight: '700',
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400'
  },
  docItem: {
    width: '46%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 7,
    elevation: 5,

  },
  docImg: {
    width: 80,
    height: 80,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10

  },
  docSpl: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '400',
    alignSelf: 'center',
  },
  bottomView: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
})
