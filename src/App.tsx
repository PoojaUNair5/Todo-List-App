import React, {useState} from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, BackHandler, Keyboard, Alert } from 'react-native'
import Task from './components/Task'

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask = () => {
    // console.log(task)
    if(task === undefined) {
     alert("Please add text!")
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask()
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

    return (
      <View style={styles.container}>
        {/* Today's Task */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
            {/* <Task text='Task 2'/> */}
          </View>
        </View>
        {/* write a task */}
        <KeyboardAvoidingView
        behavior={Platform.OS ==="ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} onChangeText={text => setTask(text)} value={task}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#e8eaed"
  },
  tasksWrapper: {
    paddingTop:  80,
    paddingHorizontal: 20,
    // backgroundColor:"pink"
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:"bold"
  },
  items: {
    marginTop:30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width:"100%",
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems: "center"
  },
  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {

  },
})
export default App
