import NextjsWhiteIcon from "@/icons/NextJsWhiteIcon";
import OpenAIIcon from "@/icons/OpenAIIcon";
import SupabaseIcon from "@/icons/SupabaseIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DescriptionTualo = () => {
  return (
    <div>
      <p className="font-medium xl:text-lg mb-4">
        Startup specialized in the generation of financial reports and
        personalized graphs through artificial intelligence.
      </p>
      <p className="font-semibold text-lg mb-2">
        My responsibilities
      </p>
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
            <Link href={"https://tualo.mx/"} target="_blank">
              Corporate Website Creation
            </Link>
          </span>
          : Initial development of the corporate website.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Automatic Email Integration</span>: We
          have implemented an automatic email system within the platform using{" "}
          <span>
            <Link
              href={"https://resend.com/"}
              target="_blank"
              className="underline underline-offset-2"
            >
              RESEND
            </Link>
          </span>
          . These emails are triggered in various scenarios, such as when users
          complete certain information, when analysts release reports to notify
          clients, and more.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Client Platform</span>: Design and
          implementation of dedicated sections for administrators and end users.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">User Interface</span>: Continuous
          design and improvement of the user experience.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Database Interactions</span>: Advanced
          functionality implementation for efficient data management.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Document Management</span>:
          Integration of forms for uploading images, PDFs, and Excel files.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Payment Integration</span>:
          Implementation of payment gateways to manage client subscriptions.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Dynamic Chart Generator</span>:
          Development of interactive systems to create charts based on data
          imported from Excel.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Background Tasks</span>: Utilization
          of{" "}
          <span>
            <Link
              href={"https://trigger.dev/"}
              target="_blank"
              className="underline underline-offset-2"
            >
              Trigger.dev
            </Link>
          </span>{" "}
          for the automated execution of background processes.
        </li>
      </ul>

      <div className="mt-4">
        <p className="font-semibold text-lg mb-2">
          Technology Stack
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <TypescriptIcon width={20} height={20} />
            <p>Typescript</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <NextjsWhiteIcon width={20} height={20} />
            <p>NextJs</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <TailwindIcon width={20} height={20} />
            <p>Tailwind css</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <SupabaseIcon width={20} height={20} />
            <p>Supabase</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <OpenAIIcon width={20} height={20} />
            <p>Open AI</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-lg mb-2">
          Visit website here!
        </p>
        <Link
          href={"https://tualo.mx/"}
          target="_blank"
          className="flex items-center gap-2 bg-zinc-900 text-white p-2 w-fit rounded-lg"
        >
          <GlobeIcon width={20} height={20} /> Website{" "}
        </Link>
      </div>
    </div>
  );
};

export default DescriptionTualo;
