import React, { useState } from 'react';
import { View, Button, Alert, Modal, TextInput, Text, StyleSheet ,Image} from 'react-native';

const PaymentForm = ({ navigation }) => {
  const [showCODModal, setShowCODModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    if (method === 'cod') {
      handleCODPayment();
    }
  };

  const handleCODPayment = () => {
    // Generate random CAPTCHA
    generateCaptcha();
    
    // Show COD modal
    setShowCODModal(true);
  };

  const generateCaptcha = () => {
    // Generate random 4-digit CAPTCHA
    const randomCaptcha = Math.floor(1000 + Math.random() * 9000);
    setCaptcha(randomCaptcha.toString());
  };

  const verifyCaptcha = () => {
    if (enteredCaptcha === captcha) {
      // Process Cash on Delivery
      navigation.navigate('Success');
      processCashOnDelivery();
    } else {
      Alert.alert('Incorrect CAPTCHA', 'Please enter the correct CAPTCHA to proceed.');
    }
  };

  const processCashOnDelivery = () => {
    // Process Cash on Delivery
    
    // Close COD modal
    setShowCODModal(false);
  };

  return (
    <View style={styles.container}>
        <Image style={{height:50, width:50}}source={require('../images/rupee.png')}/>
      <View style={styles.buttonContainer}>
        <Button title="Credit/Debit Card" onPress={() => handlePaymentMethodSelection('card')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Paytm" onPress={() => handlePaymentMethodSelection('paytm')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="PhonePe" onPress={() => handlePaymentMethodSelection('phonepe')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cash on Delivery" onPress={() => handlePaymentMethodSelection('cod')} />
      </View>

      {/* COD Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCODModal}
        onRequestClose={() => setShowCODModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Enter the CAPTCHA</Text>
            <Text style={styles.captcha}>{captcha}</Text>
            <TextInput
              placeholder="Enter CAPTCHA"
              value={enteredCaptcha}
              onChangeText={setEnteredCaptcha}
              style={styles.input}
              keyboardType="numeric"
            />
            <Button title="Verify CAPTCHA" onPress={verifyCaptcha} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  captcha: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default PaymentForm;
