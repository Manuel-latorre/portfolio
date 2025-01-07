import Image from "next/image";
import tualo from '../../../images/tualo.svg'
import tma from '../../../images/tma.svg'
import { AccordionDemo } from "@/components/Accordion/Accordion";

const experiences = [
    {
        title: "Tualo",
        subtitle: "Fullstack Developer",
        country: "Mexico",
        type:"Remote",
        icon: <Image src={tualo} alt="Tualo Logo" width={60} height={60} className="rounded-full" />,
        date: "April 2024 - Current",
        description: `Startup specialized in the generation of financial reports and personalized graphs through
artificial intelligence.

Corporate Website Creation: Initial development of the corporate website.
Client Platform: Design and implementation of dedicated sections for administrators and end users.
User Interface: Continuous design and improvement of the user experience.
Database Interactions: Advanced functionality implementation for efficient data management.
Document Management: Integration of forms for uploading images, PDFs, and Excel files.
Payment Integration: Implementation of payment gateways to manage client subscriptions.
Dynamic Chart Generator: Development of interactive systems to create charts based on data imported from Excel.
Background Tasks: Utilization of Trigger.dev for the automated execution of background processes.

`,
        stack: ""
    },
    {
        title: "Tu Mejor Amigo",
        subtitle: "Frontend Developer",
        country: "Mexico",
        type:"Remote",
        icon: <Image src={tma} alt="Tu mejor amigo logo" width={60} height={60} className="rounded-full" />,
        date: "November 2023 - March 2024",
        description: `• Key Functionality Development: Implementation of core features using GET, POST, PUT, and DELETE requests.
• Image Upload: Seamless integration with Cloudinary, enabling users to upload pet and profile pictures.
• Notification System: Real-time notifications powered by React Native Firebase Cloud Messaging.`,
        stack: ""
    }
]


export default function ExperiencePage() {
    return (
        <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-6 h-full max-md:px-4">

            <div>
                <p className="font-semibold text-2xl mb-2">Work Experience</p>

                <div>
                    {
                        experiences.map((data) => (
                            <AccordionDemo
                                trigger={
                                    <div className="flex items-center gap-3 w-full justify-between">
                                        <div className="flex items-center gap-3">
                                            {data.icon}
                                            <div className="flex flex-col items-start">
                                                <p className="font-semibold text-zinc-800">{data.title}</p>
                                                <p className="text-sm">{data.subtitle}</p>
                                                <p className="text-xs">{data.country} | {data.type}</p>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <p>{data.date}</p>
                                        </div>
                                    </div>
                                }
                                content={
                                    <div>
                                        {data.description}
                                    </div>
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}