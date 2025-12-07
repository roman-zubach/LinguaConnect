import React from 'react';

import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';
import { useLogin } from '@/hooks/useLogin';
import { useThemeColors } from '@/hooks/useThemeColors';

const LoginScreen: React.FC = () => {
    const colors = useThemeColors();
    const { email, setEmail, password, setPassword, submit, loading, error } = useLogin();

    const handleGoogle = () => {
        Alert.alert('Info', 'Google sign-in is not implemented in this demo.');
    };

    const goToForgotPassword = () => {
        router.push('/(auth)/forgotPassword');
    };

    const goToRegister = () => {
        router.push('/(auth)/register');
    };

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={[styles.card, { backgroundColor: colors.background }]}>
                    <Text style={[styles.title, { color: colors.text }]}>Lingua Connect</Text>
                    <Text style={[styles.subtitle, { color: colors.subtext }]}>
                        Your daily language partner
                    </Text>

                    <View style={styles.form}>
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

                        <View style={styles.forgotRow}>
                            <TouchableOpacity onPress={goToForgotPassword}>
                                <Text style={[styles.linkSmall, { color: colors.primary }]}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {error && (
                            <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
                        )}

                        <CustomButton
                            title="Log In"
                            onPress={submit}
                            fullWidth
                            disabled={loading}
                        />

                        <View style={styles.dividerRow}>
                            <View style={[styles.divider, { borderBottomColor: colors.border }]} />
                            <Text style={[styles.orText, { color: colors.subtext }]}>or</Text>
                            <View style={[styles.divider, { borderBottomColor: colors.border }]} />
                        </View>

                        <CustomButton
                            title="Continue with Google"
                            onPress={handleGoogle}
                            fullWidth
                            variant="secondary"
                            disabled={loading}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={[styles.footerText, { color: colors.subtext }]}>
                            Don&apos;t have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={goToRegister}>
                            <Text style={[styles.footerLink, { color: colors.primary }]}>
                                Sign up
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
    forgotRow: {
        alignItems: 'flex-end',
        marginTop: spacing.xs,
        marginBottom: spacing.sm,
    },
    linkSmall: {
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.medium,
    },
    error: {
        marginBottom: spacing.sm,
        fontSize: fontSizes.xs,
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spacing.md,
    },
    divider: {
        flex: 1,
        borderBottomWidth: 1,
    },
    orText: {
        marginHorizontal: spacing.sm,
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

export default LoginScreen;
