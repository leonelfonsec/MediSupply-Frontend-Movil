import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function CatalogoScreen() {
  const [cartCount, setCartCount] = useState(3);
  const [quantity, setQuantity] = useState(1);

  const categories = [
    { id: '1', name: 'Todos', active: true },
    { id: '2', name: 'Insumos Quirúrgicos', active: false },
    { id: '3', name: 'Medicamentos', active: false },
    { id: '4', name: 'Equipos', active: false }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="bg-white">
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={20} color="#1f2937" />
          </TouchableOpacity>
          
          <Text className="text-xl font-bold text-gray-800">
            Catálogo
          </Text>
          
          <View className="relative">
            <TouchableOpacity className="p-2">
              <Ionicons name="cart-outline" size={24} color="#1193d4" />
            </TouchableOpacity>
            <View className="absolute -top-1 -right-1 bg-primary rounded-full h-5 w-5 items-center justify-center">
              <Text className="text-xs font-bold text-white">{cartCount}</Text>
            </View>
          </View>
        </View>
        
        {/* Search Bar */}
        <View className="px-4 pb-4">
          <View className="relative">
            <View className="absolute left-3 top-3 z-10">
              <Ionicons name="search" size={20} color="#6b7280" />
            </View>
            <TextInput
              className="w-full bg-gray-100 rounded-full py-3 pl-10 pr-4 text-base text-gray-800"
              placeholder="Buscar productos"
              placeholderTextColor="#6b7280"
            />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Categories Section */}
        <View className="px-4 py-4">
          <Text className="text-lg font-bold text-gray-800 mb-3">Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  className={`px-4 py-2 rounded-full ${
                    category.active 
                      ? 'bg-primary' 
                      : 'bg-gray-200'
                  }`}
                >
                  <Text className={`text-sm font-medium ${
                    category.active 
                      ? 'text-white' 
                      : 'text-gray-700'
                  }`}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Featured Products Section */}
        <View className="px-4 pb-20">
          <Text className="text-lg font-bold text-gray-800 mb-3">Productos Destacados</Text>
          
          {/* Product Card 1 */}
          <View className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            {/* Product Image */}
            <View className="h-48 bg-gray-100 items-center justify-center">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop'
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            
            {/* Product Info */}
            <View className="p-4">
              <Text className="text-base font-semibold text-gray-800 mb-1">
                Guantes de Látex Estériles
              </Text>
              <Text className="text-sm text-gray-500 mb-3">
                Código: GL-12345
              </Text>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold text-gray-800">
                  $12.50
                </Text>
                <View className="bg-green-100 px-2 py-1 rounded-md">
                  <Text className="text-xs font-medium text-green-700">
                    Stock: 35
                  </Text>
                </View>
              </View>
              
              {/* Quantity and Add to Cart */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <TouchableOpacity 
                    className="w-8 h-8 border border-gray-300 rounded-full items-center justify-center"
                    onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <Ionicons name="remove" size={16} color="#6b7280" />
                  </TouchableOpacity>
                  
                  <Text className="text-base font-medium text-gray-800 min-w-[24px] text-center">
                    {quantity}
                  </Text>
                  
                  <TouchableOpacity 
                    className="w-8 h-8 border border-gray-300 rounded-full items-center justify-center"
                    onPress={() => setQuantity(quantity + 1)}
                  >
                    <Ionicons name="add" size={16} color="#6b7280" />
                  </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                  className="bg-primary px-4 py-2 rounded-lg flex-row items-center gap-1"
                  onPress={() => setCartCount(cartCount + quantity)}
                >
                  <Ionicons name="cart" size={16} color="white" />
                  <Text className="text-white font-semibold text-sm">Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Product Card 2 */}
          <View className="bg-white rounded-lg shadow-sm overflow-hidden">
            <View className="h-48 bg-gray-100 items-center justify-center">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            
            <View className="p-4">
              <Text className="text-base font-semibold text-gray-800 mb-1">
                Solución Salina 0.9%
              </Text>
              <Text className="text-sm text-gray-500 mb-3">
                Código: SS-67890
              </Text>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold text-gray-800">
                  $8.75
                </Text>
                <View className="bg-red-100 px-2 py-1 rounded-md">
                  <Text className="text-xs font-medium text-red-700">
                    Stock: 0
                  </Text>
                </View>
              </View>
              
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <TouchableOpacity 
                    className="w-8 h-8 border border-gray-300 rounded-full items-center justify-center bg-gray-200"
                    disabled
                  >
                    <Ionicons name="remove" size={16} color="#9ca3af" />
                  </TouchableOpacity>
                  
                  <Text className="text-base font-medium text-gray-400 min-w-[24px] text-center">
                    0
                  </Text>
                  
                  <TouchableOpacity 
                    className="w-8 h-8 border border-gray-300 rounded-full items-center justify-center bg-gray-200"
                    disabled
                  >
                    <Ionicons name="add" size={16} color="#9ca3af" />
                  </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                  className="bg-gray-300 px-4 py-2 rounded-lg flex-row items-center gap-1"
                  disabled
                >
                  <Ionicons name="cart" size={16} color="#6b7280" />
                  <Text className="text-gray-500 font-semibold text-sm">Sin Stock</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
