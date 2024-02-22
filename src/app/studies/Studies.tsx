import { Dw } from "./Dw";
import { Fs } from "./Fs";
import { Js } from "./Js";

export default function Studies(){
    return(
        <div id="studies">
            <p className="font-bold text-5xl text-white text-center mb-20">Estudios</p>
            <div className="flex items-center justify-center gap-5 max-lg:flex-wrap">
                <Dw/>
                <Js/>
                <Fs/>
            </div>
        </div>
    )
}