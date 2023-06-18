import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';

const transform = async () => {
    const transform = new Transform(
        {
            transform: (chunk, _, callback) => {
                const reverse = chunk.reverse();
                callback(null, `${reverse}\n`);
            }
        });
    stdin.pipe(transform).pipe(stdout);
};

await transform();