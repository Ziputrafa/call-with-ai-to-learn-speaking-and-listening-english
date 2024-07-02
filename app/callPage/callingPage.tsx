'use client';
import { useSpeechRecognition } from 'react-speech-kit';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button ,Card,CardBody} from '@nextui-org/react';
import { SendInput } from './sendInput';
import { useSpeechSynthesis } from 'react-speech-kit';

export const CallingPage = () => {
  const { speak, voices } = useSpeechSynthesis();
  const [speakingInput,setSpeakingInput] = useState(null);
  const [response, setResponse] = useState(null);

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      setSpeakingInput(result)
    },

    onEnd: () => {
      SendInput(speakingInput).then(setResponse);
      setSpeakingInput(null)
      
    },
  });

  useEffect(() => {
    speak && speak({ text: response, voice: voices[4] , rate: 1.2, pitch: 1.1 });
    console.log(response);
    
  }, [response]);
  return (
    <section className='grid gap-2'>
    <Button isIconOnly onClick={listening ? stop : () => listen({ interimResults: false })} color={`${listening ? `warning` : `success`}`}>
      <Image src={`${listening ? `/plane.svg` : `/microphone.svg`}`} alt="start speaking with ai" width={20} height={20} />
    </Button>{speakingInput?<Card className="w-fit absolute top-3/4 left-9  z-50">
        <CardBody>
          <p >{speakingInput}</p>
        </CardBody>
      </Card>:<></>}</section>
  );
};
