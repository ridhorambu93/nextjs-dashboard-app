import AcmeLogo from "@/app/ui/acme-logo"
import {
  ArrowRightCircleIcon,
  HomeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import { lusitana } from "@/app/ui/fonts"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const dashboard = {
    name: "Dashboard",
    href: "/dashboard",
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-5 md:h-30">
        <Link
          href="https://github.com/ridhorambu93"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-400 md:text-base">
          <span>See more on my Github</span>{" "}
          <ArrowRightCircleIcon className="w-5 md:w-6 font-bold" />
        </Link>
        {/* <Link
        
          className={
            "ml-auto flex items-end gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white md:gap-3 md:px-6 md:text-base"
          }>
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{dashboard.name}</p>
        </Link> */}
      </div>
      <div className="mt-3 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-md text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to My First Next.js Project.</strong> This is my
            journey in creating a{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js application
            </a>
            , focusing on an simple invoice management dashboard. <br />
            <br /> I'm excited to share my learning experience with you!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  )
}
