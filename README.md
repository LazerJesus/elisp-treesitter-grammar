# Emacs Lisp Tree-sitter Grammar

This repository contains a Tree-sitter grammar for the Emacs Lisp programming language. The grammar aims to provide accurate and efficient parsing of Emacs Lisp source code, enabling better syntax highlighting, code folding, and other features in text editors and IDEs that support Tree-sitter.

## Features

The Emacs Lisp grammar supports the following language constructs:

1. Lists and vectors
2. Quoting expressions
3. Backquote syntax (quasi-quotation)
4. Floating-point numbers and fractions
5. Error handling and fault tolerance
6. Built-in functions and special forms
7. Reader macros and read-time evaluation
8. Character literals
9. Proper handling of comments, including multi-line comments
10. Keyword and constant recognition

## Installation

To use this grammar in your project, you can add it as a Git submodule:

```
git submodule add https://github.com/yourusername/emacs-lisp-tree-sitter.git
```

After adding the submodule, you can build the grammar using the Tree-sitter CLI:

```
tree-sitter generate
```

## Usage

To use this grammar in a text editor or IDE, refer to the documentation of the specific editor for instructions on integrating Tree-sitter grammars.

For example, to use this grammar with the Neovim text editor, you can follow the setup guide for adding new parsers to the nvim-treesitter plugin.

## Contributing

Contributions to this grammar are welcome! If you encounter any issues or want to add support for additional Emacs Lisp features, feel free to open an issue or submit a pull request.

To contribute:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and test them against various Emacs Lisp code samples.
4. Commit your changes and push them to your fork.
5. Create a pull request with a description of your changes.

When contributing, please follow best practices for writing Tree-sitter grammars and consult the Emacs Lisp documentation to ensure the grammar remains accurate and efficient.

