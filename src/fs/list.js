import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./src/fs/files/');

const list = async () => {
    fs.readdir(
        path.join(__dirname, 'files'),
        (err, files) => {
         if(err) throw new Error('FS operation failed');
         files.forEach(f => console.log(f));
        }
    )
};

await list();