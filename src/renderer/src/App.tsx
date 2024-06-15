import { useEffect, useState } from 'react'
import { FileRedactum } from '../../main/types/FileRedactum.type'

declare global {
  interface Window {
    fileService: {
      getFile: () => Promise<FileRedactum>
    }
  }
}

function App(): JSX.Element {
  const [filepath, setFilepath] = useState<FileRedactum>()

  useEffect(() => {
    async function getFile() {
      const file = await window.fileService.getFile()
      setFilepath(file)
    }

    getFile()
  }, [])

  return (
    <div>
      Redactum
      <br />
      {filepath?.filePath}
      <br />
      {filepath?.body}
    </div>
  )
}

export default App
