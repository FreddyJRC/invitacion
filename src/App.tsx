import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Photos', href: '#', current: false },
  { name: 'Gift List', href: '#', current: false },
  { name: 'Q & A', href: '#', current: false },
  { name: 'RSVP', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AppTemplate() {
  return (
    <Disclosure as="nav" className="bg-olive-400">
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
          <div className="flex flex-1 sm:flex-col items-center justify-center text-olive-dark font-serif text-2xl sm:text-3xl">
            <div className="flex shrink-0 items-center sm:py-8">
              <div className='sm:hidden'>K & F</div>
              <div className='hidden sm:block'>Kirsten & Freddy</div>
            </div>
            <div className="hidden sm:ml-6 sm:block sm:py-4">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'border-b-2 border-olive-dark text-olive-dark' : 'hover:border-b-2 hover:border-olive',
                      'rounded-none px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
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
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'border-b-2 border-olive-dark' : 'hover:bg-gray-700 hover:text-white',
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
