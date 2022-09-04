import classNames from 'classnames'

export default function IconLi ({
  iconRender = null,
  children: label,
  active = false,
  className,
  ...props
}) {
  return (
    <li
      className={`flex items-center font-medium capitalize px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer ${classNames(
        className,
        {
          'bg-gray-50': active,
        })}`} {...props}>
      {iconRender && (
        <span className={'inline - block mr-3'}>
          {iconRender()}
        </span>
      )}
      {label}
    </li>
  )
}