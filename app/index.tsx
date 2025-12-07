import { Text } from 'react-native';

import { Redirect } from 'expo-router';

import { useAppSelector } from '@/store/hooks';

export default function Index() {
    const { initialized, isAuthenticated } = useAppSelector(state => state.auth);

    if (!initialized) {
        return <Text>Loading...</Text>;
    }

    if (isAuthenticated) {
        return <Redirect href="/(tabs)/home" />;
    }

    return <Redirect href="/(auth)/login" />;
}
