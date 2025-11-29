export type TabId = 'home' | 'chat' | 'favorites' | 'profile';

export interface TabItem {
    id: TabId;
    icon: string;
    label: string;
    path: string;
}

export const TABS: TabItem[] = [
    { id: 'home', icon: '🏠', label: 'Home', path: 'home/index' },
    { id: 'chat', icon: '💬', label: 'Chat', path: 'chat/index' },
    { id: 'favorites', icon: '⭐', label: 'Favorites', path: 'favorites/index' },
    { id: 'profile', icon: '👤', label: 'Profile', path: 'profile/index' },
];
