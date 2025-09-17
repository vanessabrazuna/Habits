import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="bg-emerald-500 text-white text-6xl font-bold rounded-lg w-20 h-20 p-6 mx-auto flex items-center justify-center mt-72 hover:bg-emerald-400 transition-colors cursor-pointer shadow-lg">
      <Habit completed={3} />
    </div>
  )
}
