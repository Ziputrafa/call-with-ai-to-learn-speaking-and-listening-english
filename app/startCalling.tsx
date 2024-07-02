import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
export const StartCalling = () => {
  return (
    <Button color="success" startContent={<Image src="/telephone.svg" alt="start calling with ai" width={15} height={15} />}>
      <Link href="/callPage">Start Calling</Link>
    </Button>
  );
};
