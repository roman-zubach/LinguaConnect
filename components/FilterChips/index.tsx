import React from 'react';

import { ScrollView } from 'react-native';

import CustomButton from '@/components/CustomButton';
import { spacing } from '@/constants/layout';

type Props = {
    items: string[];
    value: string;
    onChange: (value: string) => void;
};

const FilterChips: React.FC<Props> = ({ items, value, onChange }) => (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            flexDirection: 'row',
            gap: spacing.sm,
            paddingHorizontal: 2,
            marginTop: spacing.md,
        }}
    >
        {items.map(item => {
            const isActive = value === item;

            return (
                <CustomButton
                    key={item}
                    title={item}
                    variant={isActive ? 'primary' : 'secondary'}
                    onPress={() => onChange(item)}
                    style={{
                        paddingVertical: 6,
                        paddingHorizontal: spacing.md,
                        borderRadius: 999,
                    }}
                />
            );
        })}
    </ScrollView>
);

export default FilterChips;
