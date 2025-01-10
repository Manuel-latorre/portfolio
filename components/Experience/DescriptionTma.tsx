import CssIcon from "@/icons/CssIcon";
import ReactIcon from "@/icons/ReactIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import React from "react";

const DescriptionTma = () => {
  return (
    <div>
      <p className="font-medium xl:text-lg mb-4">
        Application focused on offering pet care services
      </p>
      <p className="font-semibold text-lg mb-2">
        My responsibilities
      </p>
      <ul className="flex flex-col gap-2">
        <li className="text-lg">
          <span className="font-semibold text-gray-600">
            Data management
          </span>
          : Development of key functionalities through GET, POST, PUT requests
          and DELETE.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Image upload</span>: Integration with Cloudinary for users to upload photos of
          pets and profiles.
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-600">Notification system</span>: Implementation of real-time notifications with React
          Native Firebase Cloud Messaging.
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
            <ReactIcon width={20} height={20} />
            <p>React Native</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-900 text-white flex items-center gap-2">
            <CssIcon width={20} height={20} />
            <p>Css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTma;
