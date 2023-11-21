import { cn } from '@/lib/utils'

const Btn = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={cn('bg-white rounded text-lg font-semibold  h-16', className)}
    >
      {children}
    </button>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="">
        <div className="text-4xl font-bold">0</div>
        <div className="text-2xl font-bold">0</div>
      </div>
      <div className="category overflow-y-scroll w-full flex flex-wrap gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="px-4 text-center" key={i}>
            <div className="rounded-full w-12 h-12 bg-accent"></div>
            <span className="text-xs ">Item #1</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 p-2 bg-accent">
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn>4</Btn>
        <Btn>5</Btn>
        <Btn>6</Btn>
        <Btn>7</Btn>
        <Btn>8</Btn>
        <Btn>9</Btn>
        <Btn className="bg-secondary">X</Btn>
        <Btn>0</Btn>
        <Btn className="bg-primary text-primary-foreground">OK</Btn>
      </div>
    </div>
  )
}
