'use client';
import Image from 'next/image';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ScrollShadow } from '@nextui-org/react';
import { GetTranscript } from './getTranscript';
import { useState } from 'react';
import { TranscriptMessage } from './transcriptMessage';

export const Transcript = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [transcript, setTranscript] = useState(null);

  const handleOpen = () => {
    onOpen();
    GetTranscript().then(setTranscript);
  };

  return (
    <>
      <Button isIconOnly onPress={handleOpen} className="max-w-fit">
        <Image src="/eye.svg" alt="see chat recap with ai" width={20} height={20} />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Chat Recap</ModalHeader>
              <ScrollShadow hideScrollBar>
                <ModalBody>
                  <section className="grid content-baseline w-100 h-80 gap-5 overflow-auto p-2">
                    {transcript?.map((message, index) => (
                      <TranscriptMessage key={index} message={message} />
                    ))}
                  </section>
                </ModalBody>
              </ScrollShadow>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
