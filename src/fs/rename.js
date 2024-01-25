import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import fs from 'fs/promises';

const FOLDER_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFile = join(__dirname, FOLDER_NAME, 'wrongFilename.txt');
const destFile = join(__dirname, FOLDER_NAME, 'properFilename.md');

const rename = async () => {
  try {
    await fs.rename(srcFile, destFile);
    console.log('rename file success');
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
