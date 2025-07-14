// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo, useMemo } from "react";
import { FaChessQueen, FaChurch, FaList, FaMicrophoneLines, FaCircleUser } from "react-icons/fa6";

interface SidebarItemProps {
  sidebarTitle: string
  sidebarWiden: boolean
  iconItem: string
  handleClick: () => void
}

function SidebarItem({
  sidebarTitle,
  handleClick,
  iconItem,
  // sidebarWiden,
}: SidebarItemProps) {
  
  const icon = useMemo(() => {
    const iconProps = { className: "text-slate-100 w-6 h-6" };
    switch (iconItem) {
      case "FaChessQueen":
        return <FaChessQueen {...iconProps} />;
      case "FaChurch":
        return <FaChurch {...iconProps} />;
      case "FaList":
        return <FaList {...iconProps} />;
      case "FaCircleUser":
        return <FaCircleUser {...iconProps}/>
      default:
        return <FaMicrophoneLines {...iconProps} />;
    }
  }, [iconItem]);

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-row space-x-3 items-center"
    >
      {icon}
      <div className="hover:underline text-nowrap font-plusJakarta text-sm font-medium text-slate-100">
        {sidebarTitle}
      </div>
    </div>
  )
}

export default memo(SidebarItem)