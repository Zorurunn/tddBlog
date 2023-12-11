

export const Container = (props) => {
    return (

        <div className={`${props.bg} w-screen relative`}>
            <div className={` w-screen m-auto max-w-[1100px] px-[16px] pb-[100px] `}>
                {props.children}
            </div>
        </div>
    )
}