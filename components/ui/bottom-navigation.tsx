import ButtonItem from './bottom-item'

const BottomNavigation = ({}) => {
  return (
    <div className="fixed bottom-0 left-0 bg-white z-50 w-full border-t p-safe">
      <div className="grid h-14 max-w-lg grid-cols-5 mx-auto font-medium">
        <ButtonItem
          name="Overview"
          href="/overview"
          icon={'GanttChartSquare'}
        />
        <ButtonItem name="Timeline" href="/timeline" icon={'History'} />
        <ButtonItem name="Create" href="/" icon={'Plus'} />
        <ButtonItem name="Wallet" href="/wallets" icon={'Wallet'} />
        <ButtonItem name="Settings" href="/settings" icon={'Settings'} />
      </div>
    </div>
  )
}

export default BottomNavigation
