import { BlogSvg } from "../svg/BlogSvg";
import { LogoSvg } from "../svg/LogoSvg";
import { MetaSvg } from "../svg/MetaBlogSvg";
import { UnionSvg } from "../svg/UnionSvg";
import { MenuSvg } from "../svg/MenuSvg";


export const Navbar = (props) => {
    // const [clicked, setClicked] = useState(false);
    // const { darkMode, setDarkMode } = useMode();
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

    return (
        <div>
            <nav
                className="w-full flex justify-between items-center pt-[20px] pb-[20px]"
            >
                <div>
                    <LogoSvg />
                </div>
                <div className="flex gap-[18px]">
                    {menu.map((item) => {
                        return <div>{item.title}</div>
                    })}
                </div>
                <div>
                    Search
                </div>
            </nav>
        </div>

    )
}