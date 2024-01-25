import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readdir } from 'fs/promises';

const FOLDER_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = join(__dirname, FOLDER_NAME);

const list = async () => {
  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
