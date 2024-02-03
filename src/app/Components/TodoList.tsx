import { Trash } from "lucide-react"

export default function TodoList() {
    return (
        <div className="flex flex-col">
          <div className="mt-2 flex items-center gap-2">
            <h2 className="flex-1">Task 1: Do this  </h2>
            <button><Trash className="w-4 h-4" /></button>
          </div>
          
        </div>
    )
}