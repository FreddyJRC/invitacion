import { NavLink } from 'react-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu({name}: {name: string}) {

  const navigation = [
    { name: 'Home', href: '/invitacion/', current: true },
    { name: 'Photos', href: '/invitacion/galeria', current: false },
    { name: 'Gift List', href: '/invitacion/regalos', current: false },
    { name: 'Q & A', href: '/invitacion/q-n-a', current: false },
    { name: 'RSVP', href: '/invitacion/rsvp', current: false },
  ]

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let p = query.get("p")
    if(p !== null) localStorage.setItem("p", p!);
    let c = query.get("c")
    if (c !== null) localStorage.setItem("c", c!);
  }, [])

  return (
    <Disclosure as="nav" className="bg-olive-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 sm:h-auto items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-olive-dark hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 sm:flex-col items-center justify-center text-olive-dark font-serif text-2xl sm:text-6xl">
            <div className="flex shrink-0 items-center sm:py-8">
              <div className='sm:hidden'>K & F</div>
              <div className='hidden sm:block'>Kirsten & Freddy</div>
            </div>
            <div className="hidden sm:ml-6 sm:block sm:py-4">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.name === name ? 'page' : undefined}
                    className={classNames(
                      item.name === name ? 'border-b-2 border-olive-dark text-olive-dark' : 'hover:border-b-2 hover:border-olive',
                      'rounded-none px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-1 flex-col items-center justify-center space-y-1 px-2 pt-8 pb-9 text-olive-dark font-serif">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              aria-current={item.name === name ? 'page' : undefined}
              className={classNames(
                item.name === name ? 'border-b-2 border-olive-dark' : 'hover:bg-gray-700 hover:text-white',
                'flex shrink-0 items-center px-3 py-1 my-5 font-medium rounded-none',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
