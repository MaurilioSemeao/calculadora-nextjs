import Styles from "../style/Container.module.css";
import {Buda} from "next/dist/compiled/@next/font/dist/google";
import Button from "@/app/components/Button";
import style from "@/app/style/Button.module.css";

export default function Container(){
    let cal = []
    for(let i=0; i < 4; i++){
        cal.push(<Button/>)
    }
    return (
        <div className={Styles.container} >
            {cal}
        </div>
    )
}