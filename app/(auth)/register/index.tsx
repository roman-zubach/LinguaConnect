import React from 'react';

import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';
import { useRegister } from '@/hooks/useRegister';
import { useThemeColors } from '@/hooks/useThemeColors';

const RegisterScreen: React.FC = () => {
    const colors = useThemeColors();

    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirm,
        setConfirm,
        submit,
        loading,
        error,
    } = useRegister();

    const goToLogin = () => {
        router.replace('/(auth)/login');
    };

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.title, { color: colors.text }]}>Create account</Text>
                    <Text style={[styles.subtitle, { color: colors.subtext }]}>
                        Join Lingua Connect and find your perfect language partner.
                    </Text>

                    <View style={styles.form}>
                        <InputField placeholder="Full name" value={name} onChangeText={setName} />

                        <InputField
                            placeholder="Email address"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <InputField
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <InputField
                            placeholder="Confirm password"
                            value={confirm}
                            onChangeText={setConfirm}
                            secureTextEntry
                        />

                        {error && (
                            <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
                        )}

                        <CustomButton
                            title="Sign Up"
                            onPress={submit}
                            fullWidth
                            disabled={loading}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={[styles.footerText, { color: colors.subtext }]}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={[styles.footerLink, { color: colors.primary }]}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    keyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.lg,
    },
    card: {
        width: '100%',
        borderRadius: radius.lg,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
    },
    title: {
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.bold,
        textAlign: 'center',
    },
    subtitle: {
        marginTop: spacing.xs,
        fontSize: fontSizes.sm,
        textAlign: 'center',
    },
    form: {
        marginTop: spacing.xl,
    },
    error: {
        marginBottom: spacing.sm,
        fontSize: fontSizes.xs,
    },
    footer: {
        marginTop: spacing.lg,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: fontSizes.xs,
    },
    footerLink: {
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.medium,
    },
});

export default RegisterScreen;
