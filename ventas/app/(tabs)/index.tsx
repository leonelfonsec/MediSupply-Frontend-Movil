import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

const mockClients = [
  {
    id: '1',
    name: 'Dr. Elena Ramirez',
    institution: 'Hospital General',
    avatar: 'ER',
    avatarColor: '#3b82f6',
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendoza',
    institution: 'Clínica Especializada',
    avatar: 'CM',
    avatarColor: '#22c55e',
  },
  {
    id: '3',
    name: 'Dra. Sofia Vargas',
    institution: 'Hospital Infantil',
    avatar: 'SV',
    avatarColor: '#f59e0b',
  },
  {
    id: '4',
    name: 'Dr. Ricardo Torres',
    institution: 'Clínica de Rehabilitación',
    avatar: 'RT',
    avatarColor: '#ef4444',
  },
  {
    id: '5',
    name: 'Dra. Laura Castro',
    institution: 'Hospital General',
    avatar: 'LC',
    avatarColor: '#8b5cf6',
  },
];

export default function ClientesScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchText.toLowerCase()) ||
    client.institution.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderClient = ({ item }: { item: typeof mockClients[0] }) => (
    <TouchableOpacity
      style={styles.clientItem}
      onPress={() => router.push(`/cliente/${item.id}` as any)}
      activeOpacity={0.7}
    >
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>{item.avatar}</Text>
      </View>
      <View style={styles.clientInfo}>
        <Text style={styles.clientName}>{item.name}</Text>
        <Text style={styles.clientInstitution}>{item.institution}</Text>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.light.neutral400} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerSpacer} />
            <Text style={styles.headerTitle}>Clientes</Text>
            <TouchableOpacity style={styles.addButton}>
              <MaterialIcons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <MaterialIcons name="search" size={20} color={Colors.light.neutral500} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar clientes"
                placeholderTextColor={Colors.light.neutral500}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          </View>
          
          {/* Filter Buttons */}
          <View style={styles.filtersContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Estado</Text>
              <MaterialIcons name="expand-more" size={16} color={Colors.light.neutral500} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Tipo de cliente</Text>
              <MaterialIcons name="expand-more" size={16} color={Colors.light.neutral500} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Client List */}
        <FlatList
          data={filteredClients}
          renderItem={renderClient}
          keyExtractor={item => item.id}
          style={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral100,
  },
  header: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerSpacer: {
    width: 32,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.neutral900,
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchInputContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: Colors.light.neutral100,
    borderRadius: 24,
    paddingVertical: 8,
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 16,
    color: Colors.light.neutral900,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.neutral100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.neutral900,
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  clientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.neutral900,
    marginBottom: 4,
  },
  clientInstitution: {
    fontSize: 14,
    color: Colors.light.neutral500,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light.neutral100,
    marginLeft: 80,
  },
});   