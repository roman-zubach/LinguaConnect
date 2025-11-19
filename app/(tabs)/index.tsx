import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '@/components/BottomNavigation';
import ChatBubble from '@/components/ChatBubble';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import InputField from '@/components/InputField';
import UserCard from '@/components/UserCard';
import colors from '@/constants/colors';

const Demo: React.FC = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Header
                title="Demo"
                icon={<Text style={{ fontSize: 16, color: colors.primary }}>👤</Text>}
            />

            <View style={{ marginTop: 24 }}>
                <CustomButton title="Primary Button" variant="primary" fullWidth />
                <CustomButton title="Secondary Button" variant="secondary" fullWidth />
            </View>

            <View style={{ marginTop: 24 }}>
                <InputField placeholder="Enter your name" />
                <InputField placeholder="Enter your password" secureTextEntry />
            </View>

            <View style={{ marginTop: 24 }}>
                <ChatBubble text="Hey there! 👋" />
                <ChatBubble text="Hello! How are you?" isOwn />
            </View>

            <View style={{ marginTop: 24 }}>
                <UserCard
                    name="John Doe"
                    flag="🇺🇸"
                    subtitle="Fluent in English • Learning Spanish"
                    imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
                    onChat={() => {}}
                />
            </View>

            <BottomNavigation />
        </ScrollView>
    </SafeAreaView>
);

export default Demo;
