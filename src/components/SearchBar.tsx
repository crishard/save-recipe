import { Input } from "@/components/ui/input"
import type React from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="w-[50%] ">
      <Input
        type="text"
        placeholder="Pesquisar receitas..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full h-12 placeholder:text-lg text-xl"
      />
    </div>
  )
}

export default SearchBar

