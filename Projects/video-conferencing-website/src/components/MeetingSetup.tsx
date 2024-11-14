"use client";
import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  useEffect(() => {
    if (!call) return; // Ensure call is defined before proceeding

    if (isMicCamToggledOn) {
      call.camera?.disable();
      call.microphone?.disable();
    } else {
      call.camera?.enable();
      call.microphone?.enable();
    }
  }, [isMicCamToggledOn, call?.microphone, call?.camera]);

  return (
    <div className="flex h-screen w-screen items-center justify-center  text-white">
      <div className="flex flex-col items-center justify-center gap-4 p-6  rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Setup</h1>
        {call && <VideoPreview className="mb-4 w-64 h-48 rounded-md border " />}
        <div className="flex flex-col items-center gap-4 mb-4">
          {/* Toggle microphone and camera */}
          <label className="flex items-center justify-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={isMicCamToggledOn}
              onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            />
            Join with mic and camera off
          </label>
          <DeviceSettings />
        </div>
        <Button
          className="rounded-md bg-green-500 px-6 py-3"
          onClick={() => {
            call?.join();
            setIsSetupComplete(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;