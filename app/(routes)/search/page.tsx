import { TextField } from "@radix-ui/themes";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchPage = () => {
  return (
    <div className="max-w-md mx-auto">
      <div>
        <TextField.Root placeholder="search posts or people..">
          <TextField.Slot>
            <SearchIcon />
          </TextField.Slot>
        </TextField.Root>
      </div>
    </div>
  );
};

export default SearchPage;
