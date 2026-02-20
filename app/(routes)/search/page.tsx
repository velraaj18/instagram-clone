"use client";

import { useState, useEffect } from "react";
import { TextField } from "@radix-ui/themes";
import { SearchIcon } from "lucide-react";
import { GetSearchProfile } from "@/app/action";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const delayDebounce = setTimeout(async () => {
      const res = await fetch(`/api/search?query=${query}`);
      const data = await res.json();
      setResults(data);
      console.log(data)
    }, 300); // debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <>
      <TextField.Root
        placeholder="search posts or people.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
        <TextField.Slot>
          <SearchIcon />
        </TextField.Slot>
      </TextField.Root>

      <div className="mt-4">
        {results.map((user: any) => (
          <div key={user.id} className="p-2 border-b">
            {user.username}
          </div>
        ))}
      </div>
    </>
  );
}
