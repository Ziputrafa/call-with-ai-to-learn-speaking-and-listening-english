'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export const StopCalling = () => {
  const [report, setReport] = useState(null);
  return (
    <Button isIconOnly color="danger">
      <Link href="/">
        <Image src="/cancel.svg" alt="stop calling with ai" width={20} height={20} />
      </Link>
    </Button>
  );
};
