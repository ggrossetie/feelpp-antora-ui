/* global pseudocode */
;(function () {
  'use strict'

  const pseudocodeElements = Array.from(document.querySelectorAll('.literalblock.pseudocode pre'))
  if (pseudocodeElements && pseudocodeElements.length) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css'
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js'
    document.body.appendChild(link)
    document.body.appendChild(script)
    script.onload = function () {
      pseudocodeElements.forEach((preElement) => {
        pseudocode.renderElement(preElement)
      })
    }
  }
})()
