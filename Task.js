import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

/*const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.square}></Pressable>
                <Text style={styles.itemText}>{props.text}</Text>
            
            </View>

            
        </View>

    )  
}*/

const Task = (props) => (
  <Pressable style={styles.square}>
    <Text>Tarea 1</Text>
  </Pressable>
);

const styles = StyleSheet.create({});

export default Task;
