import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { JSX } from "react"

interface Props {
    content: JSX.Element;
    trigger: JSX.Element;
}

export function AccordionDemo({ content, trigger }: Props) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>{trigger}</AccordionTrigger>
                <AccordionContent>
                    {content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
