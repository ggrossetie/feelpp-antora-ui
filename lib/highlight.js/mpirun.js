module.exports = function (hljs) {
  const VAR = {
    className: 'variable',
    variants: [
      { begin: /\s+--[a-z-.]+\s*(?=\w+)/ },
    ],
  }
  const OPTIONS = {
    className: 'keyword',
    variants: [
      { begin: /\s+--[a-z-.]+/ },
      { begin: /\s+-[a-zA-Z]+/ },
    ],
  }
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/,
        end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE],
      },
    ],
  }
  const ESCAPED_QUOTE = {
    className: '',
    begin: /\\"/,

  }
  const APOS_STRING = {
    className: 'string',
    begin: /'/,
    end: /'/,
  }

  return {
    lexemes: /\b-?[a-z._]+\b/,
    keywords: {
      built_in: 'mpirun',
      program: 'feelpp_toolbox_electric feelpp_toolbox_fluid',
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      OPTIONS,
      VAR,
    ],
  }
}
