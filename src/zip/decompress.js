import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const decompress = async () => {
    const unZip = zlib.createGunzip();
    const src = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const output = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));

    src.pipe(unZip).pipe(output);
};

await decompress();