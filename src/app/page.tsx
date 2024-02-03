import { Send} from "lucide-react";
import Image from "next/image";
import TodoList from "./Components/TodoList";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-white text-black flex-col">
      <h1 className="text-xl font-bold mb-4">Todo App</h1>
      <div className="bg-slate-100 px-8 py-9 rounded-xl shadow-md">
        <TodoList />
        <form action="" className="mt-10 flex gap-2">
          <input type="text" className="rounded-lg text-sm px-2 text-black" placeholder="list your task" /><button className="w-8 h-8 bg-green-400 rounded-lg flex justify-center items-center"><Send className="w-4 h-4 text-white" /></button>
        </form>
      </div>
    </main>
  );
}
