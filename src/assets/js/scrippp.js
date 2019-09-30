var message = "IQsHDY90q8b81Efi2k5tSg==";
var password = "6789Service12345";

let encrypted = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(password), {
                iv: CryptoJS.enc.Utf8.parse('SasIpServiRandom'),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });


let decrypted = CryptoJS.AES.decrypt(message, CryptoJS.enc.Utf8.parse(password), {
                iv: CryptoJS.enc.Utf8.parse('SasIpServiRandom'),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

console.log(encrypted.toString());
console.log(decrypted.toString(CryptoJS.enc.Utf8) );