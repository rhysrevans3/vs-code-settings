{
  "workbench.editorAssociations": {
    "*.ipynb": "jupyter-notebook"
  },
  "notebook.cellToolbarLocation": {
    "default": "right",
    "jupyter-notebook": "left"
  },
  // This sets my default tab size to 4
  "editor.tabSize": 4,
  // This sets my tab size to 2 for Javascript
  "[javascript]": {
    "editor.tabSize": 2
  },
  // This sets my tab size to 2 for Javascript
  "[json]": {
    "editor.tabSize": 2
  },
  // This forces the tab to be **space**
  "editor.insertSpaces": true,
  // This set black as my code formatter
  "python.formatting.provider": "black",
  // This means my code will be formatted on save
  "editor.formatOnSave": true,
  // This means whitespace is visible
  "editor.renderWhitespace": "all",
  // This shows squigly lines when linting rules are broken
  "python.linting.pylintEnabled": true,
  // This orgaizes python imports on save
  "[python]": {
    "editor.codeActionsOnSave": {
      "source.organizeImports": true
    }
  }
}
