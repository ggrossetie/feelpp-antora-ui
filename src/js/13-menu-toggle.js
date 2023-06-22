;(function () {
  'use strict'

  var menuExpandToggleEl = document.querySelector('.menu-expand-toggle')
  var navContainerEl = document.querySelector('.nav-container')
  if (menuExpandToggleEl && navContainerEl) {
    menuExpandToggleEl.addEventListener('click', (e) => {
      e.preventDefault()
      navContainerEl.classList.toggle('hidden')
      menuExpandToggleEl.classList.toggle('expand')
    })
  }
})()
