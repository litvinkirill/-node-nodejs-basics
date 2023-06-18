import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./src/fs/files/');

const remove = async () => {
    fs.unlink(
        path.join(__dirname, 'files', 'fileToRemove.txt'), 
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
};

await remove();