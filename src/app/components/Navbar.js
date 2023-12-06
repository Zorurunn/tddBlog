import { BlogSvg } from "../svg/BlogSvg";
import { LogoSvg } from "../svg/LogoSvg";
import { MetaSvg } from "../svg/MetaSvg";
import { UnionSvg } from "../svg/UnionSvg";
import { MenuSvg } from "../svg/MenuSvg";


export const Navbar = (props) => {
    // const [clicked, setClicked] = useState(false);
    // const { darkMode, setDarkMode } = useMode();

    return (
        <div>
            <nav
                className="w-full flex justify-between items-center pt-[20px] pb-[20px]"
            >
                <div>
                    <LogoSvg />
                </div>
                <div className="flex gap-[10px]">
                    <div>Home</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div>
                    Search
                </div>
            </nav>
        </div>

    )
}