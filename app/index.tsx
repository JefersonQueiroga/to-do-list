import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import CardNumber from '@/components/CardNumber';
import InputAddTask from '@/components/InputAddTask';
import Task from '@/components/Task';

type TaskType = {
    id: number;
    description: string;
    check: boolean;
};

export default function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [taskText, setTaskText] = useState("");
    const [countTasks, setCountTasks] = useState(0);

    useEffect(() => {
        let totalTasks = tasks.length;
        setCountTasks(totalTasks);
    },[tasks]);

    function addTask() {
        if (tasks.length >= 10) {
            console.log('Limite de tarefas atingido');
            return;
        }
        if (taskText.trim() === "") {
            console.log('Tarefa não pode ser vazia');
            return;
        }

        const newTask: TaskType = {
            id: countTasks+ 1,
            description: taskText,
            check: false,
        };
        setTasks([...tasks, newTask]);
        setTaskText("");
        console.log('Tarefa adicionada:', newTask);
    }

    
    function handleTaskChangeStatus(taskToChange: {  id: number; description: string; check: boolean;}) {
        const updatedTasks = tasks.filter((task) => task !== taskToChange);
        const newTask = {
            id: taskToChange.id,
            description: taskToChange.description,
            check: !taskToChange.check,
        };
        updatedTasks.push(newTask);
        setTasks(updatedTasks);
    }
    
    function handleTaskRemove(taskToRemove: {
        id: number;
        description: string;
        check: boolean;
    }) {
        Alert.alert(
            "Atenção!",
            `Deseja remover a tarefa: ${taskToRemove.description}`,
            [
                {
                text: "Sim",
                onPress: () => {
                    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
                    setTasks(updatedTasks);
                }
                },
                {text: "Cancelar", style: "cancel"}
            ]
            )
    }


    
    return (
        <View style={styles.container}>

            <InputAddTask value={taskText} setValue={setTaskText} addTask={addTask}  />      
            <View style={{flexDirection: 'row', gap: 16 }}>
                <CardNumber title={"Cadastradas"} num={countTasks} color={"#1E1E1E"}/>
                <CardNumber title={"Em aberto"} num={0} color={"#E88A1A"}/>
                <CardNumber title={"Finalizadas"} num={0} color={"#0E9577"}/>        
            </View>

            <View style={styles.tasks}>
                 <Text style={{fontSize: 16, marginVertical: 16, color: '#FFF'}}>
                        Lista de tarefas
                 </Text>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Task 
                            title={item.description} 
                            status={item.check} 
                            onCheck={()=>handleTaskChangeStatus(item)}
                            onRemove={()=> handleTaskRemove(item)} 
                        />
                    )}
                    contentContainerStyle={{ gap: 8 }}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text>
                                Crie tarefas e organize seus itens a fazer.
                            </Text>
                        </View>
                    )}
                />    
            </View>                    
                   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28385e',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16,
        paddingTop: 64,
        gap: 16,
    },
    tasks: {
        justifyContent: "flex-start",
        width: "100%",
        flexDirection: "column",
    },
});