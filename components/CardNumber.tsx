import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  num: number;
  color: string;
};

export default function CardNumber({ title, num, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardValue, color ? { color } : null]}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    gap: 8,
  },
  cardTitle: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: '400',
  },
  cardValue: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: '600',
  },
});
