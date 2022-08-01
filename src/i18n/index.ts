import * as path from 'path'

import i18n from 'i18n'

function initI18n() {
  i18n.configure({
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    header: 'accept-language',
    directory: path.join(__dirname.replace('dist', 'src'), 'locales')
  })
}

export {
  i18n,
  initI18n
}
