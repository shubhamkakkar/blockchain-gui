
export const KEYS_TOKEN = "KEYS_TOKEN"

export type TKeysTokenActionPayload = {
    publicKey: string;
    privateKey: string;
    token: string
}

export const keysAndTokenAction = (payload: TKeysTokenActionPayload) => ({
    type: KEYS_TOKEN,
    payload
});
