import { ElementNode, LexicalCommand, createCommand } from 'lexical'

export const INSERT_PAGE_COMMAND: LexicalCommand<undefined> = createCommand(
  "INSERT_PAGE_COMMAND"
);

export class PageContainer extends ElementNode {
  static getType(): string {
    return 'custom-paragraph'
  }

  static clone(node: PageContainer): PageContainer {
    return new PageContainer(node.__key)
  }

  createDOM(): HTMLElement {
    // Define the DOM element here
    const element = document.createElement('div')
    element.style.backgroundColor = 'blue'
    element.style.height = '500px'
    return element
  }

  updateDOM(prevNode: PageContainer, dom: HTMLElement): boolean {
    // Returning false tells Lexical that this node does not need its
    // DOM element replacing with a new copy from createDOM.
    return false
  }
}

export default PageContainer
