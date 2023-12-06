import { useState } from "react"

export const Container = (props) => {


    return (

        <div className={"w-screen relative"}>
            <div className={"w-screen m-auto max-w-[1100px] px-[16px] bg-gray-50"}>
                {props.children}
            </div>
        </div>
    )
}