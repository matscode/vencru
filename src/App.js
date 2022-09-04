import SectionHeader from './components/SectionHeader'
import GroupHeader from './components/GroupHeader'
import SettingHeader from './components/SettingHeader'
import CreditCard from './components/CreditCard'
import { useState } from 'react'
import IconButton from './components/IconButton'
import IconInput from './components/IconInput'
import Logo from './components/Logo'
import Aside from './components/Aside'
import BtnLi from './components/BtnLi'
import DataTable from 'react-data-table-component'
import billingHistory from './datasource/billingHistory'

function sortIcon () {
  return (
      <svg width="16" height="16" viewBox="0 0 16 16"
           fill="none">
        <path
          d="M8 3.33333V12.6667M8 12.6667L12.6667 8M8 12.6667L3.33333 8"
          stroke="#667085" strokeWidth="1.33333"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}

function App () {
  const [selectCard, setSelectedCard] = useState('visa')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="flex min-h-screen">
        <Aside className="hidden lg:block w-[280px] min-w-[280px] flex-wrap"/>
        <div className="bg-gray-50 w-full">
          <nav
            className="bg-white font-bold flex p-4 border-b border-gray-200 lg:hidden">
            <Logo/>

            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                 className="ml-auto hover:cursor-pointer"
                 onClick={() => setShowMenu(true)}
            >
              <path d="M3 12.5H17M3 6.5H21M3 18.5H21" stroke="#667085"
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          </nav>

          <main className="pt-8 pb-10">
            <section>
              <GroupHeader title="Settings">
                Manage your team and preferences here.
              </GroupHeader>

              <section className="overflow-x-auto pb-2 mb-6 lg:px-8">
                <ul
                  className="inline-flex items-center border border-gray-300 divide-x bg-white lg:rounded-lg">
                  <BtnLi>My details</BtnLi>
                  <BtnLi>Profile</BtnLi>
                  <BtnLi>Password</BtnLi>
                  <BtnLi>Team</BtnLi>
                  <BtnLi>Plan</BtnLi>
                  <BtnLi className="bg-gray-50">Billing</BtnLi>
                  <BtnLi>Notification</BtnLi>
                  <BtnLi>Integrations</BtnLi>
                  <BtnLi>API</BtnLi>
                </ul>
              </section>

              <section>
                <SectionHeader title="Payment method">
                  Update your billing details and address.
                </SectionHeader>

                <section
                  className="border-b border-gray-300 pb-5 mb-5 mx-4 lg:mx-8 lg:flex">
                  <SettingHeader title="Contact email" className="lg:flex-1">
                    Where should invoices be sent?
                  </SettingHeader>

                  <section className="lg:flex-auto">
                    <label htmlFor="mainEmail" className="flex items-start">
                      <div className="mr-2">
                        <input type="radio" name="contact-email" id="mainEmail"
                               className="accent-purple-600"/>
                      </div>

                      <SettingHeader title="Send to my account email"
                                     className="pt-0.5">
                        olivia@untitledui.com
                      </SettingHeader>
                    </label>

                    <label htmlFor="mainEmail2" className="flex items-start">
                      <div className="mr-2">
                        <input type="radio" name="contact-email" id="mainEmail2"
                               className="accent-purple-600"/>
                      </div>

                      <SettingHeader title="Send to my account email"
                                     className="pt-0.5">
                        <IconInput
                          defaultValue="billing@untitledui.com"
                          iconRender={() => (
                            <span className="inline-block mr-2">
                          <svg width="20" height="20" viewBox="0 0 20 20"
                               fill="none">
                            <path
                              d="M18.3333 5.00001C18.3333 4.08334 17.5833 3.33334 16.6666 3.33334H3.33329C2.41663 3.33334 1.66663 4.08334 1.66663 5.00001M18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00001M18.3333 5.00001L9.99996 10.8333L1.66663 5.00001"
                              stroke="#667085" strokeWidth="1.66667"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                          )}/>
                      </SettingHeader>
                    </label>
                  </section>
                </section>

                <section className="mb-8 mx-4 lg:mx-8 lg:flex">
                  <SettingHeader title="Card details" className="lg:flex-1">
                    Select default payment method.
                  </SettingHeader>

                  <section className="lg:flex-auto">
                    <CreditCard selected={selectCard === 'visa'}
                                cardImgSrc="img/visa.png" cardBrand={'Visa'}
                                className="mb-3" value={'visa'}
                                onSelected={setSelectedCard}/>
                    <CreditCard selected={selectCard === 'master'}
                                cardImgSrc="img/master.png"
                                cardBrand={'Mastercard'}
                                value={'master'} onSelected={setSelectedCard}
                                className="mb-4"
                    />

                    <a href="/"
                       className="inline-flex items-center text-gray-500 font-medium text-sm">
                      <svg className="mr-2" width="20" height="20"
                           viewBox="0 0 20 20" fill="none">
                        <path d="M9.99996 4.16667V15.8333M4.16663 10H15.8333"
                              stroke="#667085" strokeWidth="1.67"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                      Add new payment method
                    </a>
                  </section>
                </section>

              </section>

              <section>
                <div
                  className="lg:flex lg:justify-between lg:items-center mb-6">
                  <SectionHeader title="Billing history" bordered={false}
                                 className={'mb-8 pb-0'}/>

                  <div className="mx-4 lg:mx-8">
                    <IconButton iconRender={() => (
                      <svg width="20" height="20" viewBox="0 0 20 20"
                           fill="none"
                           className="mr-2">
                        <g clipPath="url(#clip0_101_21373)">
                          <path
                            d="M6.66661 14.1667L9.99994 17.5M9.99994 17.5L13.3333 14.1667M9.99994 17.5V10M17.3999 15.075C18.1244 14.5655 18.6677 13.8385 18.951 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56387 18.1782 8.82675 17.4633 8.30381C16.7485 7.78087 15.8856 7.49931 14.9999 7.50001H13.9499C13.6993 6.52323 13.2304 5.61605 12.5784 4.84674C11.9264 4.07743 11.1084 3.46606 10.186 3.05863C9.2635 2.65121 8.26065 2.45836 7.25288 2.4946C6.24512 2.53084 5.25871 2.79523 4.36791 3.26786C3.47711 3.74049 2.70513 4.40905 2.1101 5.2232C1.51507 6.03735 1.11249 6.97588 0.932662 7.96813C0.752836 8.96038 0.800453 9.9805 1.07193 10.9517C1.3434 11.9229 1.83166 12.8198 2.49994 13.575"
                            stroke="#344054" strokeWidth="1.67"
                            strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_101_21373">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}>
                      Download all
                    </IconButton>
                  </div>
                </div>

                <div className="mx-4 lg:mx-8">
                  <DataTable
                    sortIcon={sortIcon()}
                    pointerOnHover={true}
                    selectableRows={true}
                    customStyles={{
                      tableWrapper: {
                        style: {
                          borderWidth: '1px',
                          borderColor: '#EAECF0',
                          borderStyle: 'solid',
                          borderRadius: '8px',
                          boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
                          overflow: 'hidden',
                        },
                      },
                      headRow: {
                        style: {
                          backgroundColor: '#F9FAFB',
                          borderBottomWidth: '1px',
                          borderBottomColor: '#EAECF0',
                          borderBottomStyle: 'solid',
                        },
                      },
                      header: {
                        style: {
                          backgroundColor: 'black',
                        },
                      },
                      head: {
                        style: {
                          fontSize: '12px',
                          color: '#667085',
                          backgroundColor: '#F9FAFB',
                        },
                      },
                      rows: {
                        style: {
                          backgroundColor: 'white',
                          minHeight: '48px',
                          '&:not(:last-of-type)': {
                            borderBottomStyle: 'solid',
                            borderBottomWidth: '1px',
                            borderBottomColor: '#EAECF0',
                          },
                        },
                      },
                      cells: {
                        style: {
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          wordBreak: 'keep-all',
                          whiteSpace: 'nowrap',
                        },
                      },
                    }}
                    columns={[
                      {
                        name: 'Invoice',
                        selector: row => row.invoice,
                        cell: (row, _, __) => (
                          <span
                            className="capitalize text-gray-900 text-sm">
                            {row.invoice}
                          </span>
                        ),
                        grow: 3,
                        sortable: true,
                      },
                      {
                        name: 'Amount',
                        selector: row => row.amount,
                        cell: (row, _, __) => (
                          <span
                            className="capitalize text-gray-500 text-sm">
                            {new Intl.NumberFormat('en-US',
                              { style: 'currency', currency: 'USD' }).format(
                              row.amount)}
                          </span>
                        ),
                      },
                      {
                        name: 'Date',
                        selector: row => row.date,
                        cell: (row, _, __) => (
                          <span
                            className="capitalize text-gray-500 text-sm">
                            {row.date}
                          </span>
                        ),
                      },
                      {
                        name: 'Status',
                        selector: row => row.status,
                        cell: (row, _, __) => (
                          <span
                            className="inline-flex items-center capitalize bg-green-50 text-green-600 rounded-full px-2 py-1 text-xs">
                            <svg width="12" height="12" viewBox="0 0 12 12"
                                 fill="none" className="mr-1">
                              <path d="M10 3L4.5 8.5L2 6" stroke="#12B76A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                              </svg>

                            {row.status}
                          </span>
                        ),
                      },
                      {
                        name: 'Users on plan',
                        selector: row => row.users,
                        cell: (row, index, column) => {
                          const maxUser = 5
                          const { users } = row
                          const userOverflow = users.length > maxUser
                          let previewUsers = users
                          if (userOverflow) {
                            previewUsers = users.slice(0, maxUser)
                          }

                          return (
                            <div className="-space-x-2">
                              {previewUsers.map(user => (
                                <img src={user} alt="_" key={user}
                                     className="w-[24px] h-[24px] rounded-full inline-block border border-white border-2"/>
                              ))}
                              {userOverflow && (
                                <div
                                  className="inline-flex justify-center rounded-full items-center font-medium w-[24px] h-[24px] bg-gray-50 text-gray-600 text-xs border border-white border-2">
                                  +{users.length - maxUser}
                                </div>
                              )}
                            </div>
                          )
                        },
                      },
                      {
                        name: '',
                        selector: row => row.users,
                        cell: (row, _, __) => (
                          <span className={'inline-block cursor-pointer'}>
                            <svg width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                              <g clipPath="url(#clip0_101_25989)">
                                <path
                                  d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.4 15.075C18.1245 14.5655 18.6678 13.8385 18.9511 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56386 18.1782 8.82674 17.4634 8.3038C16.7486 7.78086 15.8857 7.49931 15 7.5H13.95C13.6994 6.52323 13.2304 5.61604 12.5784 4.84674C11.9265 4.07743 11.1085 3.46605 10.186 3.05863C9.26356 2.65121 8.26071 2.45836 7.25294 2.4946C6.24518 2.53084 5.25877 2.79523 4.36797 3.26786C3.47717 3.74049 2.70519 4.40904 2.11016 5.22319C1.51513 6.03734 1.11255 6.97587 0.932723 7.96813C0.752897 8.96038 0.800514 9.9805 1.07199 10.9517C1.34346 11.9229 1.83172 12.8198 2.50001 13.575"
                                  stroke="#667085" strokeWidth="1.66667"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_101_25989">
                                  <rect width="20" height="20" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        ),
                        minWidth: '64px',
                        style: {
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          paddingLeft: '32px',
                          paddingRight: '32px',
                        },
                        grow: 0,
                        // center: true,
                      },
                    ]}
                    data={billingHistory}
                  />
                </div>
              </section>
            </section>

          </main>
        </div>
      </div>

      <Aside
        className={`z-40 fixed top-0 left-0 w-full overflow-y-auto lg:hidden ${showMenu
          ? 'block animate__slideInRight'
          : 'hidden'}`} onHide={() => setShowMenu(false)}/>
    </>
  )
}

export default App
