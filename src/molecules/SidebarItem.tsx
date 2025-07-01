import type { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SidebarItemProps {
  sidebarTitle: string
  sidebarWiden: boolean
  iconItem: IconProp
  handleClick: () => void
}

export default function SidebarItem({
  sidebarTitle,
  handleClick,
}: SidebarItemProps) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-row space-x-3 items-center"
    >
      <div className="hover:underline text-nowrap font-plusJakarta text-sm font-medium text-slate-800 p-1">
        {sidebarTitle}
      </div>
    </div>
  )
}