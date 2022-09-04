import classNames from 'classnames'

export default function SectionHeader ({ children = null, title, bordered = true, className }) {
  return (
    <section className={`mx-4 mb-6 lg:mx-8 pb-5 ${classNames(className, {
      'border-b border-gray-300': bordered
    })}`}>
      <h2 className="text-lg font-medium">
        {title}
      </h2>
      {children && (<p className="text-gray-500 text-sm">
        {children}
      </p>)}
    </section>
  )
}