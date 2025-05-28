import { StyleSheet, View } from 'react-native';



type Props = {
  onCheck?: () => void;
  onRemove?: () => void;
  title: string;
  status: boolean;
}


export default function Task() {
    return (
        <View>
            {/* Task component content goes here */}
        </View>
    );
}


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 16,
    padding: 12,
    gap: 8,
  },
  item: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1
  },
  itemInvalid: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  buttonCheck:{},
  buttonDelete:{}
});