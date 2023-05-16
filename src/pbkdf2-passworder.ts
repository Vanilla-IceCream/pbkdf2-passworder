import crypto from 'node:crypto';

const saltLength = 16;

function generateSalt() {
  return crypto.randomBytes(saltLength).toString('hex');
}

const iterations = 10000;
const keyLength = 64;
const digest = 'sha512';

function hash(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve(derivedKey.toString('hex'));
      }
    });
  });
}

export default {
  async hash(password: string) {
    const salt = generateSalt();
    const hashedPassword = await hash(password, salt);
    return `${salt}.${hashedPassword}`;
  },
  async compare(password: string, hashedPassword: string) {
    const [salt, hex] = hashedPassword.split('.');
    const inputHashedPassword = await hash(password, salt);
    return crypto.timingSafeEqual(Buffer.from(inputHashedPassword, 'hex'), Buffer.from(hex, 'hex'));
  },
};
