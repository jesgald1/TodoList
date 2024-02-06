import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import Task from "./todoList/components/Task";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native-web";

export default function App() {

  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  
  return (
    <View style={styles.container}>
      {/* Tareas de hoy */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tareas de hoy</Text>
        
        <View style={styles.items}>
          {
            taskItems.map((item,index) =>{
              return(
                  <Pressable key={index} onPress={() => completeTask(index)}>
                      <Task  text={item}/>
                  </Pressable>

              )
              

            })
          }
        
        
        
        <View style={styles.square}>
          {/* Aqui van las tareas */}
          <Task text={'Tarea 1'} />
          <Task text={'Tarea 2'}/>
        </View>
      </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
        
      
      >
        <TextInput style={styles.input} placeholder={'Escribe una tarea'} value={task} onChangeText={text =>setTask(text)}/> 
        
        <Pressable onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}></Text>
          </View>

        </Pressable>
        
        
        
        </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  

  items: {
    marginTop: 30,

  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    backgroundColor: '#FFF',
    borderColor: '#c0c0c0',
    borderWidth: 1,

  },


  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,


  
   

  },

  addText: {

  },

  
});
