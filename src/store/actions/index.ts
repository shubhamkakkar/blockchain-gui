export const TOKEN = "TOKEN";

export const tokenAction = (payload: string) => ({
    type: TOKEN,
    payload
});

export const KEYS = "KEYS"

export type TKeysActionPayload = {
    publickey: string;
    privatekey: string;
}

export const keysAction = (payload:TKeysActionPayload) => ({
    type: KEYS,
    payload
});
