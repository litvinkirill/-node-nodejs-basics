import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('FS operation failed');
            console.log(data);
        }
    )
};

await read();