import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {Navbar} from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) =>{
    setTodos(prev=>[...prev,{
      id: Date.now(),
      title
    }])
  }

  const removeTodo = (id) => {
    setTodos(prev=>prev.filter(todo=>todo.id!=id))
  }

  return (
    <View>
      <Navbar title="TODO APP!"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList style={styles.flatlist}
          data={todos}
          keyExtractor={item=>item.id.toString()}
          renderItem={({item})=>(<Todo todo={item} onRemove={removeTodo}/>)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  flatlist:{
    height: '85%'
  }
});
