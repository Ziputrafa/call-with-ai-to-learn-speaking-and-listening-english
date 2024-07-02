'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import {Divider} from "@nextui-org/divider";
import Link from 'next/link';

const Feedback = () => {
  const [feedback, setFeedback] = useState(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('message');
  
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.post('http://localhost:8000/feedback', { message: search });
      setFeedback(res.data);
      console.log(feedback);
      
    };
    fetching();
    
  }, []);

  return (
    <main className="bg-slate-100 p-5 grid gap-5">
     <Link href='/'> <Button>Home</Button></Link><Card className="w-fit">
        <CardBody>
          <p>{search}</p>
        </CardBody>
      </Card>
      <Divider/>
      {feedback?<><section className="grid gap-2">
        {feedback?.feedbacks?.split('\n\n').map((statement) => (
          // <p className="opacity-85">{statement}</p>

          <Card className="w-fit">
        <CardBody>
          <p>{statement}</p>
        </CardBody>
      </Card>
        ))}
        
      </section>
      <section className='grid gap-5 grid-cols-1 lg:grid-cols-2'> <p>Learn More In Videos</p>{feedback?.videos.map((video)=>  <iframe
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-lg"
      ></iframe>      )}</section></>
      :<p>loading</p>}
      <Divider/>


      
    </main>
  );
};

export default Feedback;
