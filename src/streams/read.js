import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    readableStream.pipe(stdout);
};

await read();