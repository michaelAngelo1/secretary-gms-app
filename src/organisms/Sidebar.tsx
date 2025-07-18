// import { useNavigate } from 'react-router'
import { useSidebar } from '@/hooks/useSidebar'
import SidebarItem from '@/molecules/SidebarItem'

export default function Sidebar() {
  const { setSidebarItemSelected, sidebarWiden, setSidebarWiden } = useSidebar()
//   const navigate = useNavigate()
  return (
    <div
      id="sidebar"
      onMouseEnter={() => setSidebarWiden(true)}
      onMouseLeave={() => setSidebarWiden(false)}
      className={`z-20 transition-hover duration-300 rounded-xl ${
        sidebarWiden
          ? 'w-[15%] max-mobile:w-full max-mobile:absolute max-mobile:inset-0 max-mobile:z-40 border-r-2'
          : 'w-[15%] max-mobile:w-0 max-mobile:p-0 '
      } bg-blue-900 p-4 max-mobile:p-0 border-accent overflow-auto border-r-2 max-mobile:border-r-0`}
    >
      <div className="flex flex-col space-y-6 max-mobile:m-4">
        <SidebarItem
          sidebarTitle="Master"
          sidebarWiden={sidebarWiden}
          handleClick={() => {
            setSidebarWiden(!sidebarWiden)
            setSidebarItemSelected('Master')
            // navigate('/dashboard')
            // window.location.pathname = ""
          }}
          iconItem="FaChessQueen"
        />
        <SidebarItem
          sidebarTitle="Requests"
          sidebarWiden={sidebarWiden}
          handleClick={() => {
            setSidebarWiden(!sidebarWiden)
            setSidebarItemSelected('Requests')
            // navigate('/requests')
            // window.location.pathname = "/requests"
          }}
          iconItem="FaList"
        />
        <SidebarItem
          sidebarTitle="Church"
          sidebarWiden={sidebarWiden}
          handleClick={() => {
            setSidebarWiden(!sidebarWiden)
            setSidebarItemSelected('Church')
            // navigate('/church')
            // window.location.pathname = "/church"
          }}
          iconItem="FaChurch"
        />
        <SidebarItem
          sidebarTitle="Speakers"
          sidebarWiden={sidebarWiden}
          handleClick={() => {
            setSidebarWiden(!sidebarWiden)
            setSidebarItemSelected('Speakers')
            // navigate('/speakers')
            // window.location.pathname = "/speakers"
          }}
          iconItem="FaMicrophoneLines"
        />
        <SidebarItem
          sidebarTitle="Users"
          sidebarWiden={sidebarWiden}
          handleClick={() => {
            setSidebarWiden(!sidebarWiden)
            setSidebarItemSelected('Users')
            // navigate('/speakers')
            // window.location.pathname = "/speakers"
          }}
          iconItem="FaCircleUser"
        />
      </div>
    </div>
  )
}