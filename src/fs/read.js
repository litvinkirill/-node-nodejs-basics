import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./src/fs/files/');

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