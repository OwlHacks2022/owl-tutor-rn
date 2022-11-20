import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const syncTodos = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const todosRef = collection(db, 'users', userId, 'todos');
      const qs = await getDocs(todosRef);
      setTodos([]);
      qs.forEach(doc => {
        setTodos(prevTodos => [
          ...prevTodos,
          {
            id: doc.id,
            ...doc.data(),
          },
        ]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async title => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const todosRef = collection(db, 'users', userId, 'todos');
      await addDoc(todosRef, {
        title,
        completed: false,
      });
      await syncTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCompleted = async id => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const todoRef = doc(db, 'users', userId, 'todos', id);
      await setDoc(
        todoRef,
        { completed: !todos.find(todo => todo.id === id).completed },
        { merge: true }
      );
      await syncTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodoTitle = async (id, title) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const todoRef = doc(db, 'users', userId, 'todos', id);
      await setDoc(todoRef, { title }, { merge: true });
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async id => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const todoRef = doc(db, 'users', userId, 'todos', id);
      await deleteDoc(todoRef);
      await syncTodos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    syncTodos();
  }, []);

  return {
    todos,
    syncTodos,
    addTodo,
    toggleCompleted,
    updateTodoTitle,
    removeTodo,
  };
}
