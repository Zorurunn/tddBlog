import { InstaSvg } from "../svg/InstaSvg"
import { FbSvg } from "../svg/FbSvg"
import { XSvg } from "../svg/XSvg"
import { LinkedInSvg } from "../svg/LinkedInSvg"
import { MetaBlogSvg, MetaSvg } from "../svg/MetaBlogSvg"
import { LogoSvg } from "../svg/LogoSvg"
import { BlogSvg } from "../svg/BlogSvg"
import { UnionSvg } from "../svg/UnionSvg"

const menu = [
    {
        title: 'Home'
    },
    {
        title: 'Blog'
    },
    {
        title: 'Contact'
    },
]
const footerMenu = [
    {
        title: 'Terms of Use'
    },
    {
        title: 'Privacy Policy'
    },
    {
        title: 'Cookie Policy'
    },
]
export const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-[30px] items-center justify-center pt-[30px] pb-[30px]">
            <div className="grid grid-cols-3 gap-[30px]">
                <div className="flex flex-col items-between gap-[20px]">
                    <div>About</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                    <div>
                        <div>Email : info@jstemplate.net</div>
                        <div>Phone : 880 123 456 789</div>
                    </div>
                </div>
                <div className="flex flex-col  items-center gap-[25px]">
                    {menu.map((item) => {
                        return <div>{item.title}</div>
                    })}
                </div>
                <div className="flex gap-[10px] pt-[2px]">
                    <InstaSvg />
                    <FbSvg />
                    <XSvg />
                    <LinkedInSvg />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <UnionSvg />
                    <MetaBlogSvg />
                    <div>© All Rights Reserved.</div>
                </div>
                <div className="flex gap-[20px] justify-center items-center">
                    {footerMenu.map((item) => {
                        return <div>{item.title}</div>
                    })}
                </div>
            </div>
        </div>

    )
}