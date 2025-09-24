import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, {
        id: Date.now().toString(),
        text: inputText,
        completed: false
      }]);
      setInputText('');
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Add a todo"
        value={inputText}
        onChangeText={setInputText}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        )}
      />
    </View>
  );
}