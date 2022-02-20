import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import AttentionIcon from "../assets/icons/attention.png";

interface Props {}

const generateUnsupportedModalMessage = () => {
  return `This website works optimally on desktop Chrome. While most of the website still works perfectly for other devices and browsers, some animation effects might be laggy. :)`;
};

const generateUnsupportedModalTitle = () => {
  return `Attention`;
};

// TODO: Detect if user is using Chrome or other browsers.
const UnsupportedDeviceOrBrowserModal: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  /**
   * UseEffect to set the device type if it's an unsupported one.
   */
  React.useEffect(() => {
    if (!navigator) {
      return;
    }
    // If user is on mobile device, alert
    const userIsUsingMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (userIsUsingMobileDevice) {
      setIsOpen(true);
      return;
    }

    // If user is on tablet device, alert
    const userIsUsingTabletDevice =
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
        navigator.userAgent
      );
    if (userIsUsingTabletDevice) {
      setIsOpen(true);
      return;
    }

    // If user is on desktop, see if they are using Chrome
    if (
      !userIsUsingMobileDevice &&
      !userIsUsingTabletDevice &&
      !navigator.userAgent.includes("Chrome")
    ) {
      setIsOpen(true);
      return;
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 inline-flex items-center justify-center"
                >
                  <img src={AttentionIcon} className="w-6 mr-3" alt="" />
                  <p>{generateUnsupportedModalTitle()}</p>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-gray-500">
                    {generateUnsupportedModalMessage()}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UnsupportedDeviceOrBrowserModal;
