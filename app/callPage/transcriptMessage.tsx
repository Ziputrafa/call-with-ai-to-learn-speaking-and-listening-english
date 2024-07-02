'use client';
import { Image, Button } from '@nextui-org/react';
import Link from 'next/link';

export const TranscriptMessage = ({ message }) => {
  return (
    <div className={`max-w-72 w-fit px-2.5 py-1 rounded-xl ${message.isMe ? 'justify-self-end bg-slate-200' : 'border-slate-300 border-2'}`}>
      <div className={message.isMe ? 'grid grid-cols-2 gap-3 justify-items-end' : ''}>
        <p>{message.message}</p>
        {message.isMe && (
          <Link
            href={{
              pathname: '/feedbackPage',
              query: {
                message: message.message,
              },
            }}
          >
            <Button isIconOnly className="place-self-end bg-white">
              <Image src="/lup.svg" width={15} height={15} alt="english feedback" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
