import { send, encrypt } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    send(url, data);
    return read();
}

makeRequest('www.google.com', 'Node JS');
