import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'fs/promises';

const FOLDER_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, FOLDER_NAME, 'fileToRead.txt');

const read = async () => {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
