
'use client';

import TrafficLight from "@/components/TrafficLight";
import RequestTracker from "@/components/RequestTracker";
import DotCursorArea from "@/components/DotCursorArea";
import EmailForm from "@/components/EmailForm";
import { StrictMode } from "react";

export default function Home() {
  return (
    <StrictMode>
      <>
        <EmailForm />
      </>
    </StrictMode>
  );
}
