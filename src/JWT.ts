import jwt from "jsonwebtoken"
import {KEYS_TOKEN, TKeysTokenActionPayload} from "./store/actions";


export const encryptedKeysAndToken = (data: TKeysTokenActionPayload) => jwt.sign({data}, KEYS_TOKEN);
export const decryptToken = (token: string) => jwt.verify(token, KEYS_TOKEN);
