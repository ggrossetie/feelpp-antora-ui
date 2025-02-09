'use strict'

module.exports = ({ data: { root } }) => {
  const { contentCatalog } = root
  const result = []
  // user manual
  const userManualPage = contentCatalog.getById({
    component: 'user',
    version: 'latest',
    family: 'page',
    module: 'ROOT',
    relative: 'index.adoc',
  })
  if (userManualPage) {
    result.push({
      title: 'USER MANUAL',
      color: '#1ddaff',
      id: 'user-manual',
      url: userManualPage.pub.url,
    })
  }
  // toolboxes manual
  const toolboxesManualPage = contentCatalog.getById({
    component: 'toolboxes',
    version: 'latest',
    family: 'page',
    module: 'ROOT',
    relative: 'index.adoc',
  })
  if (toolboxesManualPage) {
    result.push({
      title: 'TOOLBOXES MANUAL',
      color: '#1dffbf',
      id: 'toolboxes-manual',
      url: toolboxesManualPage.pub.url,
    })
  }
  // toolbox cases
  // const toolboxCasesPage = contentCatalog.getById({
  //   component: 'cases',
  //   version: 'latest',
  //   family: 'page',
  //   module: 'ROOT',
  //   relative: 'index.adoc',
  // })
  // if (toolboxCasesPage) {
  //   result.push({
  //     title: 'TOOLBOXES CASE STUDIES',
  //     color: '#1dffbf',
  //     id: 'cases-manual',
  //     url: toolboxCasesPage.pub.url,
  //   })
  // }
  // feelpp-project
  const projectPage = contentCatalog.getById({
    component: 'feelpp-project',
    version: '',
    family: 'page',
    module: 'ROOT',
    relative: 'index.adoc',
  })
  if (projectPage) {
    result.push({
      title: 'Template Project',
      color: '#1dffbf',
      id: 'project-manual',
      url: projectPage.pub.url,
    })
  }
  // dev manual
  const devManualPage = contentCatalog.getById({
    component: 'dev',
    version: 'latest',
    family: 'page',
    module: 'ROOT',
    relative: 'index.adoc',
  })
  if (devManualPage) {
    result.push({
      title: 'DEV. MANUAL',
      color: '#50377b',
      id: 'dev-manual',
      url: devManualPage.pub.url,
    })
  }
  // data manual
  const dataManualPage = contentCatalog.getById({
    component: 'data',
    version: 'latest',
    family: 'page',
    module: 'ROOT',
    relative: 'index.adoc',
  })
  if (dataManualPage) {
    result.push({
      title: 'DATA MANUAL',
      color: '#0080FF',
      id: 'data-manual',
      url: dataManualPage.pub.url,
    })
  }
  // fem
  const femIndexPage = contentCatalog.getById({
    component: 'math',
    version: 'master',
    family: 'page',
    module: 'fem',
    relative: 'index.adoc',
  })
  if (femIndexPage) {
    result.push({
      title: 'FEM',
      color: 'red',
      id: 'fem-book',
      url: femIndexPage.pub.url,
    })
  }
  // hdg
  const hdgIndexPage = contentCatalog.getById({
    component: 'math',
    version: 'master',
    family: 'page',
    module: 'hdg',
    relative: 'index.adoc',
  })
  if (hdgIndexPage) {
    result.push({
      title: 'HDG',
      color: 'magenta',
      id: 'hdg-book',
      url: femIndexPage.pub.url,
    })
  }
  // in case project page is available but not the other ones like user manual or toolboxes manual,
  // then we are un a standalone project, we provide a link to the documentation of feelpp
  if ((projectPage && !userManualPage && !toolboxesManualPage) ||
      (!projectPage && !userManualPage && !toolboxesManualPage)) {
    result.push({
      title: 'Documentation',
      color: 'magenta',
      id: 'feelpp-docs',
      url: 'https://docs.feelpp.org',
    })
  }
  return result
}
