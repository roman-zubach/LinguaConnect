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
import { useForgotPassword } from '@/hooks/useForgotPassword';
import { useThemeColors } from '@/hooks/useThemeColors';

const ForgotPasswordScreen: React.FC = () => {
    const colors = useThemeColors();
    const { email, setEmail, submitting, message, error, submit } = useForgotPassword();

    const goBackToLogin = () => {
        router.replace('/(auth)/login');
    };

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.title, { color: colors.text }]}>Reset password</Text>
                    <Text style={[styles.subtitle, { color: colors.subtext }]}>
                        Enter your email and we&apos;ll send you reset instructions.
                    </Text>

                    <View style={styles.form}>
                        <InputField
                            placeholder="Email address"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        {error && (
                            <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
                        )}
                        {message && (
                            <Text style={[styles.message, { color: colors.accent }]}>
                                {message}
                            </Text>
                        )}

                        <CustomButton
                            title="Send reset link"
                            onPress={submit}
                            fullWidth
                            disabled={submitting}
                        />
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity onPress={goBackToLogin}>
                            <Text style={[styles.footerLink, { color: colors.primary }]}>
                                Back to login
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
        fontSize: fontSizes.lg,
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
    message: {
        marginBottom: spacing.sm,
        fontSize: fontSizes.xs,
    },
    footer: {
        marginTop: spacing.lg,
        alignItems: 'center',
    },
    footerLink: {
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.medium,
    },
});

export default ForgotPasswordScreen;
