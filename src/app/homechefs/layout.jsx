"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from "classnames"

export default function layout({children}) {
    const pathname = usePathname();
  return (
    <div className="flex flex-col mx-10 my-10">
        <div className="text-left uppercase  text-neutral-400 text-4xl ">
            <h3>HOMECHEFS' CONTROLS</h3>
        </div>
        <div className="flex flex-row mt-10 mb-2 uppercase font-medium text-xl">
            <div className={classNames(
                "px-5 py-2 mx-1 align-middle ",
                pathname.includes("/allhomechefs") ? "bg-slate-300 rounded-3xl" : '' )}>
                <Link href="/homechefs/allhomechefs">
                    <h3>All Homechefs</h3>
                </Link>
            </div>
            <div className={classNames(
                "px-5 py-2 mx-1 align-middle ",
                pathname.includes("/addhomechefs") ? "bg-slate-300 rounded-3xl" : '' )}>
                <Link href="/homechefs/addhomechefs">
                    <h3>Add Homechefs</h3>
                </Link>
            </div>
        </div>
        <hr class="h-px -mx-10 bg-neutral-400 border-0 dark:bg-neutral-400"></hr>
        <div>
            {children}
        </div>
    </div>
  )
}
