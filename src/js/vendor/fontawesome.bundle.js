;(function () {
  'use strict'
  // NOTE: v4-shims required to support the output of icon macro generated from AsciiDoc content
  require('@fortawesome/fontawesome-free/js/v4-shims')
  const fa = require('@fortawesome/fontawesome-svg-core')
  const admonitionIcons = {
    caution: {
      prefix: 'fas',
      iconName: 'fire',
    },
    important: {
      prefix: 'fas',
      iconName: 'exclamation-circle',
    },
    warning: {
      prefix: 'fas',
      iconName: 'exclamation-triangle',
    },
    note: {
      prefix: 'fas',
      iconName: 'info-circle',
    },
    tip: {
      prefix: 'fas',
      iconName: 'lightbulb',
    },
  }
  fa.library.add(window.FontAwesomeIconDefs)

  Array.from(document.querySelectorAll('td.icon > i')).forEach(function (el) {
    const iconClassName = Array.from(el.classList).find((name) => name.startsWith('icon-'))
    if (iconClassName) {
      const admonitionType = iconClassName.replace('icon-', '')
      const icon = admonitionIcons[admonitionType]
      if (icon) {
        const iconElement = document.createElement('i')
        let style = 'solid'
        if (icon.prefix === 'far') {
          style = 'regular'
        } else if (icon.prefix === 'fab') {
          style = 'brand'
        }
        iconElement.className = `fa-${style} fa-${icon.iconName}`
        el.parentNode.insertBefore(iconElement, el)
      }
    }
  })

  fa.dom.i2svg()

  delete window.FontAwesomeIconDefs
})()
