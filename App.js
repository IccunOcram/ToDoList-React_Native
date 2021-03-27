import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header.js'
import ToDoItem from './components/ToDoItem.js';
import AddToDo from './components/AddToDo.js'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Fare la spesa', key: '1'},
    { text: 'Lavare la macchina', key: '2'},
    { text: 'Preparare la cena', key: '3'}
  ]);

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{
        text: text, key: Math.random().toString()
      },...prevTodos]
    })
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item}
              pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contet: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
