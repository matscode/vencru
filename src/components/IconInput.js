export default function IconInput ({
  iconRender = null,
  className,
  defaultValue = '',
  ...props
}) {
  return (
    <div
      className={`flex mt-3 border border-gray-300 py-2.5 px-3.5 rounded-lg bg-white items-center ${className}`}>
      {iconRender && (
        <span className="inline-block mr-2">
          {iconRender()}
        </span>
      )}

      <input type="text"
             className="border-0 focus-visible:border-0 focus-visible:outline-none text-base text-black w-full"
             defaultValue={defaultValue}
             {...props}
      />
    </div>
  )
}