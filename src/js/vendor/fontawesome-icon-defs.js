var window
;(function (scope) {
  'use strict'

  var admonitionIcons = {
    caution: 'fas fa-fire',
    important: 'fas fa-exclamation-circle',
    note: 'fas fa-info-circle',
    tip: 'fas fa-lightbulb',
    warning: 'fas fa-exclamation-triangle',
  }
  var additionalIcons = [
    'fas fa-angle-right',
    'fas fa-file',
    'fas fa-file-pdf',
    'far fa-folder',
    'fas fa-download',
    'fas fa-expand',
    'far fa-check-square',
    'fas fa-edit',
    'fab fa-github',
    'far fa-square',
    'fab fa-twitter',
  ]
  var iconDefs = (scope.FontAwesomeIconDefs = [])
  iconDefs.admonitionIcons = admonitionIcons
  iconDefs.includes = Object.values(admonitionIcons).concat(additionalIcons)
})(window || module.exports)
