import React from 'react';

import { ScrollView, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import GreetingCard from '@/components/GreetingCard';
import UsersList, { UserItem } from '@/components/UserList';
import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';
import { fontSizes } from '@/constants/typography';

import SearchFiltersBar, { SearchFiltersValue } from './components/SearchFiltersBar';

const filters = ['All', 'English', 'Spanish', 'German', 'Nearby'];

const mockUsers: UserItem[] = [
    {
        id: 1,
        name: 'John Doe',
        flag: '🇺🇸',
        subtitle: 'Fluent in English · Learning Spanish',
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        online: true,
    },
    {
        id: 2,
        name: 'Jane Smith',
        flag: '🇬🇧',
        subtitle: 'Fluent in German · Learning Polish',
        imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
        online: false,
    },
];

const HomeScreen: React.FC = () => {
    const [filtersState, setFiltersState] = React.useState<SearchFiltersValue>({
        query: '',
        filter: 'All',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <GreetingCard username="John" avatarLetter="J" />

            <SearchFiltersBar filters={filters} value={filtersState} onChange={setFiltersState} />

            <UsersList users={mockUsers} />
        </SafeAreaView>
    );
};

export default HomeScreen;
