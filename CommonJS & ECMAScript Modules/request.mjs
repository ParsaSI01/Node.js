function encrypt(data) {
    return 'Encrypted Data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${data} To ${url}`);
}

export { send, encrypt };
