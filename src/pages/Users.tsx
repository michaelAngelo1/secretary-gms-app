export default function Users() {
  const registUsers = [
    {
      name: "Mike",
      approved: false,
    },
    {
      name: "John",
      approved: false,
    },
    {
      name: "Clement",
      approved: false,
    },
  ]
  return (
    <div className="w-full p-4">
      <div className="text-2xl font-bold text-blue-900">Users Registration</div>
      <div className="flex flex-col gap-4 mt-6">
        {
          registUsers.map((u) => (
            <div className="w-full bg-[#fff] h-fit p-4 rounded-xl text-md">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-blue-900">{u.name}</div>
                <div className="flex gap-3 items-center cursor-pointer">
                  <div className="text-md text-blue-900 opacity-80 hover:underline transition">Ignore</div>
                  <div className="font-bold text-md text-slate-100 p-2 bg-blue-900 rounded-xl hover:bg-slate-100 hover:text-blue-900 transition">Verify</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}