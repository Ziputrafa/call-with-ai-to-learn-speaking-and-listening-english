import { CallingPage } from './callingPage';
import { StopCalling } from './stopCalling';
import { Transcript } from './transcript';
import { Image } from '@nextui-org/react';
const Page = () => {
  return (
    <main className="h-screen w-full grid justify-center content-around justify-items-center bg-slate-100">
      <Image width={300} className="rounded-full" isBlurred src="/portrait2.jpg" alt="callng with an ai" />
      <section className="flex gap-8">
        <StopCalling />
        <Transcript />
        <CallingPage />
      </section>
    </main>
  );
};

export default Page;
