"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const Meeting = ({ params }: { params: Promise<{ id: string }> }) => {
  const { user, isLoaded } = useUser();
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(meetingId || "");
  useEffect(() => {
    // Unwrap the promise to get the `id` from params
    const fetchParams = async () => {
      const unwrappedParams = await params;
      setMeetingId(unwrappedParams.id);
    };

    fetchParams();
  }, [params]);

  // Show loader until `user`, `call`, and `meetingId` are loaded
  if (!isLoaded || isCallLoading || !meetingId) return <Loader />;

  return (
    <main>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete = {setIsSetupComplete}/>
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
