import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    if (!fs.existsSync('./src/fs/files/')) {
        throw new Error('FS operation failed');
    }
    fs.mkdir(
        path.join(__dirname, 'files_copy'),
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
    fs.cp(
        path.join(__dirname, 'files'),
        path.join(__dirname, 'files_copy'),
        { recursive: true },
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    )
};

await copy();
