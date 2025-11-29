import React from 'react';

import { View } from 'react-native';

import FilterChips from '@/components/FilterChips';
import InputField from '@/components/InputField';

export type SearchFiltersValue = {
    query: string;
    filter: string;
};

type Props = {
    filters: string[];
    value: SearchFiltersValue;
    onChange: (next: SearchFiltersValue) => void;
};

const SearchFiltersBar: React.FC<Props> = ({ filters, value, onChange }) => {
    const handleQueryChange = (query: string) => {
        onChange({ ...value, query });
    };

    const handleFilterChange = (filter: string) => {
        onChange({ ...value, filter });
    };

    return (
        <View>
            <InputField
                placeholder="🔍 Search partners or topics..."
                value={value.query}
                onChangeText={handleQueryChange}
            />

            <FilterChips items={filters} value={value.filter} onChange={handleFilterChange} />
        </View>
    );
};

export default SearchFiltersBar;
