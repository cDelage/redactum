import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'
import { INSERT_PAGE_COMMAND } from './PageContainer';
import { COMMAND_PRIORITY_EDITOR } from 'lexical';

function PageFormatPlugin() {
  const [editor] = useLexicalComposerContext()

  editor.registerCommand<undefined>(
    INSERT_PAGE_COMMAND,
    (payload) => {
      
      return true;
    },
    COMMAND_PRIORITY_EDITOR
)

  useEffect(() => {
    const removeEvent = editor.registerUpdateListener(() => {
    })

    return () => {
      removeEvent()
    }
  }, [editor]);

  const insert = () => {
    editor.update(() => {

    })
  }

  return <button>Insert</button>
}

export default PageFormatPlugin
