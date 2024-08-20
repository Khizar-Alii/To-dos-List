import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handlePress = () => {
    if (todo.length < 5) {
      Alert.alert('Warning!', 'Please Enter a Todo minimum 5 Characters...');
    } else {
      setTodos([...todos, {text: todo, completed: false}]);
      setTodo('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>To Do App</Text>
        <View style={styles.headerContainer}>
          <TextInput
            placeholder="Enter Todo..."
            placeholderTextColor="#3F72AF"
            style={styles.input}
            value={todo}
            onChangeText={value => setTodo(value)}
          />

          <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
            <FontAwesome5 name="plus" color="#ffffff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {todos.map((item, index) => (
          <View key={index} style={styles.container}>
            <View style={styles.todoContainer}>
              <View style={styles.todoContent}>
                <CheckBox
                  value={item.completed}
                  onValueChange={() => handleChange(index)}
                />
                <Text
                  style={[
                    styles.todo,
                    item.completed
                      ? {textDecorationLine: 'line-through'}
                      : {textDecorationLine: 'none'},
                  ]}>
                  {item.text}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <FontAwesome5 name="trash" color="grey" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 20,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3F72AF',
    letterSpacing: 1,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#3F72AF',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 14,
    marginTop: 20,
    padding: 10,
    color: '#3F72AF',
    marginBottom: 60,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: '#3F72AF',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
    padding: 14,
    backgroundColor: '#3F72AF',
    marginBottom: 60,
  },
  todoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DBE2EF',
    padding: 10,
    margin: 5,
  },
  todoContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todo: {
    paddingLeft: 10,
    fontSize: 20,
    letterSpacing: 1,
    color: 'black',
  },
});

export default Todos;