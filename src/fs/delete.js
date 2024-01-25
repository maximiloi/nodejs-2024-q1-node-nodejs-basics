import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { unlink } from 'fs/promises';

const FOLDER_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRemove = join(__dirname, FOLDER_NAME, 'fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(fileToRemove);
    console('file remove success');
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
