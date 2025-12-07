export type ForgotPasswordPayload = {
    email: string;
};

export async function forgotPassword(payload: ForgotPasswordPayload): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 700));

    return;
}
