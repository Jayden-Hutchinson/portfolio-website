import { businessInfo } from "../data/businessInfo";

export type ModalState = "loading" | "success" | "error";
type OrderFormProps = {
  modalState: ModalState;
  statusText: string;
  totalPrice: number;
  handleClick: () => void;
};

function OrderFormModal({
  modalState,
  statusText,
  totalPrice,
  handleClick,
}: OrderFormProps) {
  function renderModalContent() {
    switch (modalState) {
      case "loading":
        return (
          <div className="size-6 animate-spin rounded-full border-4 border-gray-300 border-t-transparent" />
        );

      case "success":
        return (
          <>
            <div>{statusText}</div>
            <div>
              Please E-transfer ${totalPrice} to {businessInfo.email}
            </div>
            <button
              onClick={handleClick}
              className="cursor-pointer bg-red-900 px-5 py-1"
              type="button"
            >
              Ok
            </button>
          </>
        );

      case "error":
        return (
          <>
            <div>{statusText}</div>
            <button
              onClick={handleClick}
              className="cursor-pointer bg-red-900 px-5 py-1"
              type="button"
            >
              Ok
            </button>
          </>
        );
    }
  }
  return (
    <div className="absolute flex size-full items-center justify-center bg-black/50">
      <div className="bg-background flex w-full flex-col items-center justify-center gap-5 p-10">
        {renderModalContent()}
      </div>
    </div>
  );
}

export default OrderFormModal;
