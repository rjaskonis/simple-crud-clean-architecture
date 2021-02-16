import crypto from "crypto";

export default class Cypher {
    static async encrypt(word: string, cryptoKey: string): Promise<string> {
        const resizedIV = Buffer.allocUnsafe(16);
        const iv = crypto.createHash("sha256").update("test-app").digest();

        iv.copy(resizedIV);

        const key = crypto.createHash("sha256").update(cryptoKey).digest();

        const cipher = crypto.createCipheriv("aes-256-ctr", key, resizedIV);

        let hash = cipher.update(JSON.stringify(word), "utf8", "hex");

        hash += cipher.final("hex");

        return hash;
    }

    static async decrypt(encryptedWord: string, cryptoKey: string): Promise<string> {
        const resizedIV = Buffer.allocUnsafe(16);
        const iv = crypto.createHash("sha256").update("test-app").digest();

        iv.copy(resizedIV);

        const key = crypto.createHash("sha256").update(cryptoKey).digest();

        const decipher = crypto.createDecipheriv("aes-256-ctr", key, resizedIV);

        let text = decipher.update(encryptedWord, "hex", "utf-8");

        text += decipher.final("utf8");

        const decrypted: any = /"(.*?)"/.exec(text.toString());

        return decrypted && decrypted.length ? decrypted[1] : "";
    }
}
