/* eslint-disable max-len */
const ospath = require('node:path')
const fs = require('node:fs')
const { fab } = require('@fortawesome/free-brands-svg-icons')
const {
  library,
  icon,
} = require('@fortawesome/fontawesome-svg-core')
const { fas } = (() => {
  try {
    return require('@fortawesome/pro-solid-svg-icons')
  } catch (e) {
    return require('@fortawesome/free-solid-svg-icons')
  }
})()
const { far } = (() => {
  try {
    return require('@fortawesome/pro-regular-svg-icons')
  } catch (e) {
    return require('@fortawesome/free-regular-svg-icons')
  }
})()

library.add(fas, far, fab)

const root = ospath.join(__dirname, '..')

const fontawesomeIconDefs = JSON.parse(fs.readFileSync(ospath.join(root, 'fontawesome-icons.json'), 'utf-8'))
const iconDefs = fontawesomeIconDefs.map((def) => icon(def))
const content = `/* GENERATED FILE, DO NOT EDIT */
/* To add additional FontAwesome icons, please update fontawesome-icons.json and run \`npm run generate-fontawesome-icon-defs\` */
window.FontAwesomeIconDefs = ${JSON.stringify(iconDefs)}`
fs.writeFileSync(ospath.join(root, 'src', 'js', 'vendor', 'fontawesome-icon-defs.bundle.js'), content, 'utf8')
