import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./src/fs/files/');

const create = async () => {
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        { flag: 'wx' },
        (err) => {
            if (err) throw new Error('FS operation failed');
        }
    )
};

await create();