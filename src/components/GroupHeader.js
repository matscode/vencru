export default function GroupHeader ({ children = null, title }) {
  return (
    <section className="mx-4 lg:mx-8 mb-6">
      <h2 className="text-2xl font-medium">
        {title}
      </h2>
      <p className="text-gray-500">
        {children}
      </p>
    </section>
  )
}