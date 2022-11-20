/**
 * Good Afternoon, User, this is on your schedule
 * TODO list
 *  Canvas Calender API
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button, Input, ListItem } from 'react-native-elements';
import { COLORS } from '../constants';
import useProfile from '../hooks/useProfile';
import useTodos from '../hooks/useTodos';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const profile = useProfile();
  const { todos, addTodo, toggleCompleted, removeTodo } = useTodos();
  const [text, setText] = useState('');

  const renderTodo = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.CheckBox
        checked={item.completed}
        onPress={() => {
          toggleCompleted(item.id);
        }}
      />
      <Button
        title="Delete"
        type="outline"
        buttonStyle={{ borderColor: COLORS.primary }}
        titleStyle={{ color: COLORS.primary }}
        onPress={() => {
          removeTodo(item.id);
        }}
      />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.greetings}>
          Greetings, {profile?.name ? profile.name : '-'}
        </Text>
      </View>

      <View style={styles.todoContainer}>
        <Text style={styles.infoText}>Here is a list of your todos</Text>
        <View style={styles.form}>
          <Input
            placeholder="Add a todo"
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => {
              addTodo(text);
              setText('');
            }}
          />
          <TouchableOpacity
            onPress={() => {
              addTodo(text);
              setText('');
            }}
          >
            <Ionicons name="add-circle" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  greetings: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hero: {
    padding: 20,
    width: '100%',
    backgroundColor: COLORS.grey,
  },
  todoContainer: {
    padding: 20,
    width: '100%',
  },
  infoText: {
    fontSize: 20,
    marginBottom: 10,
  },
  form: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
