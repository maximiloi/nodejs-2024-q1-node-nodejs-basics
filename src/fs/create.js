import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { writeFile, stat } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const TEXT = 'I am fresh and young';
  const FILE_NAME = 'fresh.txt';
  const ERROR_MESSAGE = 'FS operation failed';

  const filePath = join(__dirname, 'files', FILE_NAME);

  stat(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        writeFile(filePath, TEXT, (err) => {
          if (err) console.log(err);
          else console.log(`file ${FILE_NAME} created success`);
        });
      }
    } else {
      console.log(ERROR_MESSAGE);
    }
  });
};

await create();
