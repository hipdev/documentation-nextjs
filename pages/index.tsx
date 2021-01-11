import useTranslation from 'next-translate/useTranslation'

const Homepage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <main>
        <div>
          <button
            type="button"
            onClick={() => console.log('later change lang here')}
          >
            {t('variable-example', { count: 42 })}
          </button>
        </div>
      </main>
    </>
  )
}

export default Homepage
