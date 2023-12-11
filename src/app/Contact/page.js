import Link from "next/link";
import { Container } from "../components/Container";


export default function Contact() {
    return (
        <Container>
            <div className="w-full flex justify-center items-center" >
                <div className="w-[70%] flex flex-col gap-[50px]">
                    <div className="text-[40px]">Contact</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="flex gap-[40px]">
                        <div className=" flex flex-col gap-[30px border-[2px] rounded-[10px] p-[26px]">
                            <div className="text-[20px]">Address</div>
                            <div>1328 Oak Ridge Drive, Saint Louis, Missouri</div>
                        </div>
                        <div className=" flex flex-col gap-[30px border-[2px] rounded-[10px] p-[26px]">
                            <div className="text-[20px]">Address</div>
                            <div>1328 Oak Ridge Drive, Saint Louis, Missouri</div>
                        </div>

                    </div>

                    <div className="w-full bg-gray-50 rounded-[20px]  p-[30px] flex flex-col gap-[40px]">
                        <div className="text-[20px]">Leave a Message</div>
                        <div className="grid grid-cols-2 gap-[40px] w-[80%]">
                            <input className="border-[2px] h-[40px]" placeholder="First Name" />
                            <input className="border-[2px] h-[40px]" placeholder="First Name" />
                            <input className="border-[2px] col-span-2 h-[40px]" placeholder="First Name" />
                            <input className="border-[2px]  col-span-2 h-[40px]" placeholder="First Name" />
                        </div>
                        <div className="bg-blue-500 text-white w-fit rounded-[5px] pl-[10px] pr-[10px] pt-[5px] pb-[5px]">Send Message</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}