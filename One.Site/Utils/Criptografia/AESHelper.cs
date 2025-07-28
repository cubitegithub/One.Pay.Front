using System.Security.Cryptography;
using System.Text;

namespace One.Site.Utils.Criptografia
{
    public static class AESHelper
    {
        public static string Encrypt(string plainText, string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] key = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

                byte[] nonce = new byte[12];
                using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(nonce);
                }

                using (AesGcm aesAlg = new AesGcm(key,  16))
                {
                    byte[] cipherTextBytes = new byte[plainText.Length];
                    byte[] tag = new byte[16];
                    aesAlg.Encrypt(nonce, Encoding.UTF8.GetBytes(plainText), cipherTextBytes, tag);

                    byte[] result = new byte[nonce.Length + cipherTextBytes.Length + tag.Length];
                    Buffer.BlockCopy(nonce, 0, result, 0, nonce.Length);
                    Buffer.BlockCopy(cipherTextBytes, 0, result, nonce.Length, cipherTextBytes.Length);
                    Buffer.BlockCopy(tag, 0, result, nonce.Length + cipherTextBytes.Length, tag.Length);

                    return Convert.ToBase64String(result);
                }
            }
        }

        public static string Decrypt(string cipherText, string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] key = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

                byte[] cipherTextBytesWithNonceAndTag = Convert.FromBase64String(cipherText);
                byte[] nonce = new byte[12];
                Buffer.BlockCopy(cipherTextBytesWithNonceAndTag, 0, nonce, 0, nonce.Length);

                byte[] cipherTextBytes = new byte[cipherTextBytesWithNonceAndTag.Length - nonce.Length - 16];
                Buffer.BlockCopy(cipherTextBytesWithNonceAndTag, nonce.Length, cipherTextBytes, 0, cipherTextBytes.Length);

                byte[] tag = new byte[16];
                Buffer.BlockCopy(cipherTextBytesWithNonceAndTag, cipherTextBytes.Length + nonce.Length, tag, 0, tag.Length);

                using (AesGcm aesAlg = new AesGcm(key,16))
                {
                    byte[] decryptedText = new byte[cipherTextBytes.Length];
                    aesAlg.Decrypt(nonce, cipherTextBytes, tag, decryptedText);
                    return Encoding.UTF8.GetString(decryptedText);
                }
            }
        }

    }
}
