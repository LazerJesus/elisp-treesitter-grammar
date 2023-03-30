module.exports = grammar({
  name: "emacs_lisp",

  extras: ($) => [$.comment, $.multiline_comment, /\s/],

  word: ($) => $.symbol,

  rules: {
    program: ($) => repeat($._expression),

    _expression: ($) =>
      choice(
        $.list,
        $.vector,
        $.quoted_expression,
        $.backquoted_expression,
        $.unquoted_expression,
        $.reader_macro,
        $.read_time_evaluation,
        $.symbol,
        $.keyword,
        $.constant,
        $.string,
        $.character_literal,
        $.number
      ),

    list: ($) =>
      seq(
        "(",
        optional($._head),
        repeat($._expression),
        optional($._invalid),
        ")"
      ),

    vector: ($) => seq("[", repeat($._expression), "]"),

    _head: ($) => choice($.special_form, $.built_in_function),

    _invalid: ($) => token(prec(-1, /./)),

    special_form: ($) => choice("defun", "setq", "lambda", "if"),

    built_in_function: ($) => /\b[-a-zA-Z0-9_+/*%^$#@!&|<>?=]+\b/,

    quoted_expression: ($) => seq("'", $._expression),

    backquoted_expression: ($) => seq("`", $._expression),

    unquoted_expression: ($) => seq(",", $._expression),

    reader_macro: ($) =>
      choice(seq("#", optional(/[0-9]+/), "="), seq("#", /[0-9]+/, "#")),

    read_time_evaluation: ($) => seq("#.", $._expression),

    symbol: ($) => /[-a-zA-Z0-9_+/*%^$#@!&|<>?=]+/,

    keyword: ($) => seq(":", /[-a-zA-Z0-9_+/*%^$#@!&|<>?=]+/),

    constant: ($) => choice("t", "nil"),

    string: ($) => seq('"', repeat(choice(/[^"\\]+/, $.escape_sequence)), '"'),

    escape_sequence: ($) =>
      seq(
        "\\",
        choice(
          /[^xuU]/,
          /x[0-9a-fA-F]{2}/,
          /u[0-9a-fA-F]{4}/,
          /U[0-9a-fA-F]{8}/
        )
      ),

    character_literal: ($) => seq("?", choice(/[^\\]/, $.escape_sequence)),

    number: ($) =>
      choice(/[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?/, /[-+]?(\d+\/\d+)/),

    comment: ($) => seq(";", /.*(?<!\\)$/),

    multiline_comment: ($) => seq("#|", /((?!\|#)[\s\S])*/, "|#"),
  },
});
