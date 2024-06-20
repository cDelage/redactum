import { useEffect, useState } from 'react'
import { FileRedactum } from '../../main/types/FileRedactum.type'
import Editor from './features/editor/Editor'

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
      <header>Redactum</header>
      <main>
        <Editor/>
      </main>
    </div>
  )
}

export default App
