export default function BtnLi ({ className, children: label, ...props }) {
  return (
    <li className={`py-[9px] px-4 hover:bg-gray-50 whitespace-nowrap ${className}`}>{label}</li>
  )
}