import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface taskProps {
  onCheck?: () => void;
  onRemove?: () => void;
  title: string;
  status: boolean;
}


export default function Task(props: taskProps)  {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.TaskDone, !props.status && {backgroundColor: '#0E9577'} ]} 
          onPress={props.onCheck}>
          {props.status &&  <Feather name="check-square" size={24} color="white" /> }
          {!props.status && <Feather name="square" size={24} color="white" /> }
        </TouchableOpacity>
        <Text style={styles.taskText}>{props.title}</Text>
        <TouchableOpacity style={styles.TaskDelete} onPress={props.onRemove}>
          <Feather name="trash-2" size={24} color="white" />
        </TouchableOpacity>
    </View>
    )
}


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#304163',
    borderRadius: 4,
    overflow: 'hidden',
  },
  
  TaskDone: {
    height: 56,
    width: 56,
    backgroundColor: '#e88a1a',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TaskDelete:{
    width: 56,
    height: 56,
    backgroundColor: '#f22424',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  }
});