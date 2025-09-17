interface HabitProps {
  completed: number
}

export function Habit({ completed }: HabitProps) {
  return (
    <div>
      <h1>{completed}</h1>
    </div>
  )
}

