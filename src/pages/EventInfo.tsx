interface EventInfoProps {
  setMasterView: (view: string) => void;
}

export default function EventInfo({ setMasterView } : EventInfoProps) {
  return (
    <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
      <div onClick={() => setMasterView('dashboard')}>Go back</div>
      <div className="text-2xl font-bold text-blue-900">Add Event Info</div>
    </div>
  )
}