import fs from 'fs'
import { FileRedactum } from '../types/FileRedactum.type'

export const FILE_PATH: string = 'Filepath'

export async function readFileRedactum(filePath?: string): Promise<FileRedactum> {
  if (!filePath) {
    return { filePath: '' }
  }

  return new Promise<FileRedactum>((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(new Error(err.message))
      }
      resolve({
        filePath,
        body: data
      } as FileRedactum)
    })
  })
}

class FileRedactumStorage {
  private static instance: FileRedactumStorage
  private data: Map<string, string>

  private constructor() {
    this.data = new Map()
  }

  public static getInstance(): FileRedactumStorage {
    if (!FileRedactumStorage.instance) {
      FileRedactumStorage.instance = new FileRedactumStorage()
    }
    return FileRedactumStorage.instance
  }

  public setValue({ key, value }: { key: string; value: string }) {
    this.data.set(key, value)
  }

  public getValue({ key }: { key: string }) {
    return this.data.get(key)
  }
}

export default FileRedactumStorage
