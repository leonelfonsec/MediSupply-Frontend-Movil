import { useCartStore, type Product } from '@/store/cartStore';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CatalogoScreen() {
  const { items, addItem, getTotalItems } = useCartStore();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const categories = [
    { id: '1', name: 'Todos', active: true },
    { id: '2', name: 'Insumos Quirúrgicos', active: false },
    { id: '3', name: 'Medicamentos', active: false },
    { id: '4', name: 'Equipos', active: false }
  ];

  // Productos de ejemplo
  const products: Product[] = [
    {
      id: '1',
      name: 'Guantes de Látex Estériles',
      price: 12.50,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVe6TTLAtBP3f7ITKxkn8CPgSrTrdBGwwYL8fDyKIxxCfevPmyV7x3ErBrlL_3lj5JKmn9BZd74llF4aZIyKUfcBK2p44A3WYNl-VA_PwKb3YKdWdY3CRCqzm4Ko8hfdUYK__Apz91609RvB-xJnDyZwH6Xc5cVXu6svoZfqj7qYvmnzwVY8kgVcYnCxZHz-OfUVXtQkRx0PpW5URzghYc9RTIcCwwPb7s8Vt2iPAzBepggJMt1tVpnxzLzE1g1RGYb7alyymGko',
      code: 'GL-12345',
      stock: 35
    },
    {
      id: '2',
      name: 'Solución Salina 0.9%',
      price: 8.75,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAelz3c4cLtYrkotptk3Uurd5o_H4_Hyb7jHo7hcWM6vB_nzh5tT59gKK9EOMG40fxj6x3lLq0IKdjJf26mAp7TR-NUwRcm5nDMYq0AIGPItG7IYQ6NgpQ375Tm3AA5ebjKCq6w90D14y7tHbtRmxY7M5ejZ8DJNFau2QKf9VW6zzsFCAh_NohukHjaKj3IEokURXKY2GSTgHRD3QurRXBrRl5y6545OTRDf2ALxmJDOxCZukogix2ha2HsuI5slK2ScBzX5lF8hs4',
      code: 'SS-67890',
      stock: 0
    }
  ];

  const navigateToCart = () => {
    router.push('/carrito');
  };

  const getQuantity = (productId: string) => {
    return quantities[productId] || 1;
  };

  const setQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = getQuantity(product.id);
    addItem(product, quantity);
    // Reset quantity to 1 after adding
    setQuantity(product.id, 1);
  };

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
            <TouchableOpacity className="p-2" onPress={navigateToCart}>
              <Ionicons name="cart-outline" size={24} color="#1193d4" />
            </TouchableOpacity>
            <View className="absolute -top-1 -right-1 bg-primary rounded-full h-5 w-5 items-center justify-center">
              <Text className="text-xs font-bold text-white">{getTotalItems()}</Text>
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
          
          {products.map((product) => {
            const quantity = getQuantity(product.id);
            const isOutOfStock = product.stock === 0;
            
            return (
              <View key={product.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                {/* Product Image */}
                <View className="h-48 bg-gray-100 items-center justify-center">
                  <Image
                    source={{ uri: product.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                
                {/* Product Info */}
                <View className="p-4">
                  <Text className="text-base font-semibold text-gray-800 mb-1">
                    {product.name}
                  </Text>
                  <Text className="text-sm text-gray-500 mb-3">
                    Código: {product.code}
                  </Text>
                  
                  <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-lg font-bold text-gray-800">
                      ${product.price.toFixed(2)}
                    </Text>
                    <View className={`px-2 py-1 rounded-md ${
                      isOutOfStock ? 'bg-red-100' : 'bg-green-100'
                    }`}>
                      <Text className={`text-xs font-medium ${
                        isOutOfStock ? 'text-red-700' : 'text-green-700'
                      }`}>
                        Stock: {product.stock}
                      </Text>
                    </View>
                  </View>
                  
                  {/* Quantity and Add to Cart */}
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                      <TouchableOpacity 
                        className={`w-8 h-8 border border-gray-300 rounded-full items-center justify-center ${
                          isOutOfStock ? 'bg-gray-200' : ''
                        }`}
                        onPress={() => !isOutOfStock && setQuantity(product.id, quantity - 1)}
                        disabled={isOutOfStock}
                      >
                        <Ionicons 
                          name="remove" 
                          size={16} 
                          color={isOutOfStock ? "#9ca3af" : "#6b7280"} 
                        />
                      </TouchableOpacity>
                      
                      <Text className={`text-base font-medium min-w-[24px] text-center ${
                        isOutOfStock ? 'text-gray-400' : 'text-gray-800'
                      }`}>
                        {isOutOfStock ? 0 : quantity}
                      </Text>
                      
                      <TouchableOpacity 
                        className={`w-8 h-8 border border-gray-300 rounded-full items-center justify-center ${
                          isOutOfStock ? 'bg-gray-200' : ''
                        }`}
                        onPress={() => !isOutOfStock && setQuantity(product.id, quantity + 1)}
                        disabled={isOutOfStock}
                      >
                        <Ionicons 
                          name="add" 
                          size={16} 
                          color={isOutOfStock ? "#9ca3af" : "#6b7280"} 
                        />
                      </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity 
                      className={`px-4 py-2 rounded-lg flex-row items-center gap-1 ${
                        isOutOfStock ? 'bg-gray-300' : 'bg-primary'
                      }`}
                      onPress={() => !isOutOfStock && handleAddToCart(product)}
                      disabled={isOutOfStock}
                    >
                      <Ionicons 
                        name="cart" 
                        size={16} 
                        color={isOutOfStock ? "#6b7280" : "white"} 
                      />
                      <Text className={`font-semibold text-sm ${
                        isOutOfStock ? 'text-gray-500' : 'text-white'
                      }`}>
                        {isOutOfStock ? 'Sin Stock' : 'Agregar'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
