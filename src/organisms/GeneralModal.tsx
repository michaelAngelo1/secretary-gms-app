interface GeneralModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  buttonLabel?: string; 
}

export default function GeneralModal({ ...modalProps } : GeneralModalProps) {
  if (!modalProps.isOpen) {
    return null;
  }
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-70 transition-all duration-300 ease-in-out"
      onClick={modalProps.onClose}
    >
      <div 
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        {/* Modal Header */}
        <h3 className="text-xl font-semibold text-blue-900">{modalProps.title}</h3>

        {/* Modal Body */}
        <div className="mt-4">
          <div className="text-sm text-gray-600">
            {modalProps.children}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={modalProps.onClose}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {modalProps.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}