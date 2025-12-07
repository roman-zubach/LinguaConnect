import { Stack } from 'expo-router';

const AuthLayout = () => (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="forgotPassword" />
    </Stack>
);

export default AuthLayout;
