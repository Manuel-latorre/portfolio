import EducationTimeline from "@/components/Education/EducationTimeline"
import Text from "@/components/Text/Text"



export default function EducationPage(){
    return(
        <div className="lg:w-[70%] mx-auto mt-5 flex flex-col gap-12 h-full  max-lg:px-8 max-md:pb-[80px]">
            <Text
                textEn={<p className="font-semibold text-2xl mb-2">Education</p>}
                textEs={<p className="font-semibold text-2xl mb-2">Educación</p>}
            />

            <div className="max-lg:px-10">
                <EducationTimeline />
            </div>
            
        </div>

    )
}