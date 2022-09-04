export default function SettingHeader ({ children = null, title, className }) {
  return (
    <section className={`mb-6 ${className}`}>
      <h2 className="text-sm font-medium">
        {title}
      </h2>
      <p className="text-gray-500 text-sm">
        {children}
      </p>
    </section>
  )
}