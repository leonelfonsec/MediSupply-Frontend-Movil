import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/theme';

const VISITAS = [
  { id: '1', nombre: 'Clínica San Lucas', hora: '10:00 AM' },
  { id: '2', nombre: 'Hospital Santa María', hora: '11:30 AM' },
  { id: '3', nombre: 'Consultorio Dr. Ramírez', hora: '1:00 PM' },
];

export default function RutaScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ruta</Text>
      </View>

      {/* Contenido principal: mapa + hoja inferior */}
      <View style={styles.body}>
        {/* Mapa (placeholder por ahora) */}
        <View style={styles.fakeMap} />

        {/* Hoja inferior */}
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>Visitas de hoy</Text>

          <FlatList
            data={VISITAS}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <View style={styles.rowLeft}>
                  <MaterialIcons name="location-on" size={20} color="#E53935" />
                  <View style={styles.rowText}>
                    <Text style={styles.rowTitle}>{item.nombre}</Text>
                    <Text style={styles.rowSubtitle}>{item.hora}</Text>
                  </View>
                </View>
                <MaterialIcons
                  name="chevron-right"
                  size={22}
                  color={Colors.light.neutral400}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const SHEET_HEIGHT = 380; // ajusta para parecerse a tu Figma

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral100,
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.neutral900,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    position: 'relative',
  },
  fakeMap: {
    flex: 1,
    backgroundColor: '#D6EAF8', // placeholder tipo mapa
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: SHEET_HEIGHT,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 10,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.neutral900,
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light.neutral200,
    marginLeft: 36, // alinea con texto después del pin
  },
  row: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  rowText: {
    flexShrink: 1,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.light.neutral900,
  },
  rowSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: Colors.light.neutral500,
  },
});
