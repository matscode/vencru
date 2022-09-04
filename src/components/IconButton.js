export default function IconButton ({iconRender = null, children}) {
  return (
    <button className='flex items-center border border-gray-300 text-sm font-medium px-4 py-2.5 rounded-lg bg-white'>
      {iconRender && iconRender()}

      {children}
    </button>
  )
}