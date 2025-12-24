"use client";

import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/react";
import { cn } from "@/lib";

const PopupModal = ({
  isOpen,
  onClose,
  title,
  description,
  email,
  onChangeEmail,
  children,
  footer,
  size = "md",
  showCloseButton,
}: {
  isOpen: boolean;
  showCloseButton: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  email?: string;
  onChangeEmail?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}  backdrop="blur">
      <ModalContent>
        <>
          {/* HEADER */}
          {title && (
            <ModalHeader className="flex justify-between items-start bg-[#F6F8FA] border-b p-4">

              <div>
                <h2 className="text-base font-medium">{title}</h2>
                {description && (
                  <p className="text-xs text-gray-500 mt-1">{description}</p>
                )}
              </div>
            </ModalHeader>
          )}

          {/* BODY */}
          <ModalBody className="p-0 space-y-5  ">
            {/* EMAIL SECTION */}
            {email && (
              <div className="rounded-lg bg-[#FAFAFC] p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Email address</p>
                  <p className="text-sm font-medium">{email}</p>
                </div>

                {onChangeEmail && (
                  <Button
                    size="sm"
                    radius="full"
                    startContent={<PencilIcon className="w-4 h-4" />}
                    className="bg-[#B3B4F2] text-white"
                    onPress={onChangeEmail}
                  >
                    Change
                  </Button>
                )}
              </div>
            )}

            {children}
          </ModalBody>

          {/* FOOTER */}
          {footer && (
            <ModalFooter className="border-t bg-[#F6F8FA] p-4">
              {footer}
            </ModalFooter>
          )}
        </>
      </ModalContent>
    </Modal>
  );
};

export default PopupModal;
