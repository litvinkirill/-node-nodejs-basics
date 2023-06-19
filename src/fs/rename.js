import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    fs.access(
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            if (!err) throw new Error('FS operation failed');
        }
    )
    fs.rename(
        path.join(__dirname, 'files', 'wrongFilename.txt'),
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            if (err) throw new Error('FS operation failed');
        }
    );
};

await rename();