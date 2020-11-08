import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ReviewForm from './reviewForm';

const home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda', rating: 5, body: 'Lorem ipsum...', key: 1 },
    { title: 'Bred', rating: 4, body: 'Lorem ipsum...', key: 2 },
    { title: 'Goku', rating: 3, body: 'Lorem ipsum...', key: 3 },
    { title: 'Trojan', rating: 2, body: 'Lorem ipsum...', key: 4 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModalOpen(false);
  };

  const pressHandler = (item) => {
    navigation.navigate('Review-details', item);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={() => setModalOpen(true)} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  modalToggle: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
