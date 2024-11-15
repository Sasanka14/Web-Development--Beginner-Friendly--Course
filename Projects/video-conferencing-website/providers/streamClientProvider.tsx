"use client"
import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import { tokenProvider } from '../actions/stream.actions';
import Loader from '@/components/Loader';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 

  
  const StreamVideoProvider = ({children}:{children: ReactNode}) => {
    const [VideoClient, SetVideoClient] = useState<StreamVideoClient>()
    const {user, isLoaded} = useUser();

    useEffect(() => {
      if (!isLoaded || !user) return;
      if (!apiKey) throw new Error('Stream API key not available / missing');

      const client = new StreamVideoClient({
        apiKey,
        user:{
          id: user?.id,
          name: user?.username || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider,
      })

      SetVideoClient(client);
    }, [user, isLoaded]);

    if(!VideoClient) return <Loader/>

    return (
      <StreamVideo client={VideoClient}>
        {children}
      </StreamVideo>
    );
  };

  export default StreamVideoProvider;