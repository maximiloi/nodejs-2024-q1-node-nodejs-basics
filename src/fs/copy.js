import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cp } from 'fs/promises';

const FOLDER_NAME = 'files';
const FOLDER_COPY_NAME = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcPath = join(__dirname, FOLDER_NAME);
const destPath = join(__dirname, FOLDER_COPY_NAME);

const copy = async () => {
  try {
    await cp(srcPath, destPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log('Copy folder success');
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
