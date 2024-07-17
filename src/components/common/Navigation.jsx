'use client'

import classNames from 'classnames'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { NavigationRoutes } from '@src/core'

const Navigation = () => {
  const pathname = usePathname()
  console.log('pathName', pathname)
  return (
    <div className="w-full px-4 text-white">
      <div className="mb-10">FGITO</div>
      <div className="">
        {NavigationRoutes.map((data, idx) => {
          return (
            <div className="mb-6" key={idx}>
              <div className="text-[0.75rem] uppercase tracking-widest text-[#c8c8c8]">{data.name}</div>
              {data.children.map((child, id) => {
                return (
                  <div
                    key={id}
                    className={classNames(
                      'my-1 flex items-center justify-start gap-2 rounded-sm px-4 py-2 text-[1rem] capitalize text-white',
                      pathname === child.route ? 'bg-primary-500 font-extrabold' : '',
                    )}
                  >
                    {child.icon}
                    <Link href={child.route}>{child.name}</Link>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
