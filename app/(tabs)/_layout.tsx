import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: '#0096F7',
        tabBarInactiveTintColor: '#FFFFFF',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].tabBarBg,
          borderTopWidth: 0,
          height: 90,         
          paddingTop: 5,      
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 6,
        },
      }}
    >

      <Tabs.Screen
        name="horario"
        options={{
          title: 'Horario',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="event" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="carnet"
        options={{
          title: 'Carnet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="badge" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="mis-cursos"
        options={{
          title: 'Mis Cursos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="backpack" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon({ name, color, focused }: { name: any; color: string; focused: boolean }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={
          focused
            ? {
                backgroundColor: '#0096F7',
                borderRadius: 29,
                padding: 22,
                marginBottom: 7,
              }
            : { marginBottom: 2 }
        }
      >
        <MaterialIcons name={name} size={25} color={color} />
      </View>
    </View>
  );
}
