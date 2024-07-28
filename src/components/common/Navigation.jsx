'use client'

import { NavigationRoutes } from '@src/core'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  console.log('pathName', pathname)
  return (
    <Fragment>
      <div className="w-full px-4 text-white">
        <div className="mb-10">FGITO</div>
        {NavigationRoutes.map((data, idx) => {
          return (
            <div className="mb-6" key={idx}>
              <div className="text-xs uppercase tracking-widest text-grey-300">{data.name}</div>
              {data.children.map((child, id) => {
                return (
                  <div
                    key={id}
                    className={classNames(
                      'my-1 flex items-center justify-start gap-2 rounded-sm px-4 py-2 text-base capitalize text-white',
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
    </Fragment>
  )
}

export default Navigation
