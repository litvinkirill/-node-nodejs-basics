import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const write = async () => {
    const output = fs.createWriteStream(path.join(__dirname, 'files/fileToWrite.txt'));
    stdin.pipe(output);
};

await write();