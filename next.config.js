const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})
