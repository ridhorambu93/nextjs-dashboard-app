"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function Search({ placeholder }: { placeholder: string }) {
  // useSearchParams is a hook that returns the current URL search parameters
  // usePathname is a hook that returns the current URL pathname
  // useRouter is a hook that provides methods to manipulate the browser history
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // useDebouncedCallback is a hook that returns a debounced version of the provided function
  // The debounced function will delay the execution of the search handler by 300 milliseconds
  // This is useful to avoid making too many requests while the user is typing in the search input field
  // The handleSearch function will be called with the search term as an argument
  // and will update the URL search parameters accordingly

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    params.set("page", "1") // Reset to page 1 on new search
    // This ensures that the search results are always shown from the first page when a new search is performed
    console.log("Current search params:", params.toString())
    // If the term is not empty, set the "query" parameter to the term
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  // function handleSearch(term: string) {
  //   console.log("Searching for:", term)
  //   const params = new URLSearchParams(searchParams)
  //   if (term) {
  //     params.set("query", term)
  //   } else {
  //     params.delete("query")
  //   }
  //   // Update the URL with the new search term
  //   console.log("Updated search params:", params.toString())
  //   // Use replace to avoid adding a new entry in the history stack
  //   replace(`${pathname}?${params.toString()}`)
  // }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}
