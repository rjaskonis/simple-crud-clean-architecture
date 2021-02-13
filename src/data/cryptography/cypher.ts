import crypto from "crypto";

export default class Cypher {
    static async encrypt(word: string): Promise<string> {
        return crypto.createHash("sha256").update(word).digest("hex");
    }
}
