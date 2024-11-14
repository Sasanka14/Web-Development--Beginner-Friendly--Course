import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | undefined>(undefined);
  const [isCallLoading, setIsCallLoading] = useState(true);
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client || !id) return;

    const loadCall = async () => {
      try {
        const callId = Array.isArray(id) ? id[0] : id; // Handle `id` if it's an array
        const { calls } = await client.queryCalls({
          filter_conditions: {
            id: { $eq: callId }, // Ensure `id` is wrapped in an equality condition
          },
        });

        if (calls.length > 0) {
          setCall(calls[0]);
        } else {
          console.warn("No call found with the specified ID.");
        }
      } catch (error) {
        console.error("Error creating or fetching call:", error);
      } finally {
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
