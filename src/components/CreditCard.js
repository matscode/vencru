import classNames from 'classnames'

export default function CreditCard ({
  cardImgSrc,
  selected = false,
  cardBrand,
  className,
  onSelected,
  value
}) {
  const id = value.replace(' ', '_')

  return (
    <label htmlFor={id}
      className={`flex border  p-4 rounded-lg ${classNames(className, selected
        ? 'border-purple-300 bg-purple-50'
        : 'border-gray-300 bg-gray-50')}`}>
      <div className={'mr-3'}>
        <img src={cardImgSrc} alt="CCARD"
             className="h-[32px] w-[46px]"/>
      </div>
      <div className="grow">
        <div className={`font-medium ${selected ? 'text-purple-800' : 'text-gray-800'}`}>
          {cardBrand} ending in 1234
        </div>
        <div className={selected ? "text-purple-600" : "text-gray-600"}>
          Expiry 06/2024
        </div>
        <div className="mt-2">
          <span className={`inline-block mr-3 ${ selected ? 'text-purple-600' : 'text-gray-600' }`}>
            Set as default
          </span>
          <a href="/"
             className="text-purple-700 hover:text-purple-800 font-medium">
            Edit
          </a>
        </div>
      </div>

      <div className={'shrink'}>
        <div className="pretty p-icon p-round p-bigger m-0">
          <input type="radio" name="card" value={value} checked={selected} onChange={(e) => onSelected(e.target.value)} id={id}/>
          <div className="state">
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16"
                 fill="none">
              <rect x="0.5" y="0.5" width="15" height="15" rx="7.5"
                    fill="#7F56D9"/>
              <path d="M11.3333 5.5L6.74996 10.0833L4.66663 8" stroke="white"
                    stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <rect x="0.5" y="0.5" width="15" height="15" rx="7.5"
                    stroke="#7F56D9"/>
            </svg>
            <label></label>
          </div>
        </div>
      </div>
    </label>
  )
}