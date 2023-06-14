"use client"
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { AuthContext } from '@/app/component/AuthProvider/AuthProvider'


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Men', href: '/pages/men', current: false },
    { name: 'women', href: '/pages/women', current: false },
    { name: 'register', href: '/pages/register', current: false },
    { name: 'login', href: '/pages/login', current: false },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    };

    return (
        <Disclosure as="nav" className="bg-gray-100 sticky top-0 z-50 ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 sm:items-stretch sm:justify-start">
                                <div className="flex  flex-shrink-0 items-center">
                                    <h1 className='lg:text-5xl ml-12 text-3xl uppercase font-serif '>ajio </h1>
                                </div>
                                <div className="hidden sm:ml-6  sm:block ">
                                    <div className="flex ml-80 mt-2 space-x-4">
                                        {navigation.map(list => <Link key={list.id} href={list.href}

                                            className='hover:text-black hover:font-bold mt-2 '
                                            aria-current={list.current ? 'page' : undefined}
                                        >{list?.name}</Link>)}

                                        <div>
                                            {
                                                user?.email &&
                                                <button onClick={handleLogOut} className=' border p-2 rounded-3xl font-medium border-black hover:bg-red-500 hover:text-white'>logout</button>

                                            }
                                        </div>


                                        <div>

                                            <div class="relative ">

                                                <input
                                                    type="email"
                                                    id="UserEmail"
                                                    placeholder="search ajio"
                                                    class="w-full rounded-full border-black border  text-black p-2 bg-yellow-200 shadow-sm sm:text-sm"
                                                />


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'hover:text-black hover:font-bold mt-2  block '
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <div>
                                {
                                    user?.email &&
                                    <button onClick={handleLogOut} className=' border p-2 mt-1 -ml-1 rounded-3xl font-medium border-black hover:bg-red-500 hover:text-white'>logout</button>

                                }
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}



