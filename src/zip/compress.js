import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const compress = async () => {
    const zip = zlib.createGzip();
    const src = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const output = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));

    src.pipe(zip).pipe(output);
};

await compress();