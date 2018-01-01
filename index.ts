const WebCrypto = require("node-webcrypto-ossl");

const webcrypto = new WebCrypto();

const w = typeof window === "undefined" ? webcrypto : window.crypto;

w.subtle
  .generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" }
    },
    false,
    ["sign", "verify"]
  )
  .then(key => {
    console.log(key);
    console.log(key.publicKey);
    console.log(key.privateKey);
  })
  .catch(err => {
    console.error(err);
  });
