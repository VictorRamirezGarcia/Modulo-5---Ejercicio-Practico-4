//encryption.ts (archivo de encriptacion)
import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY as string;

export const encryptData = (data: string):string => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (ciphertext: string) => {
const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
return bytes.toString(CryptoJS.enc.Utf8);
};