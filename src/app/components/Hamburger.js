import { BlogSvg } from "../svg/BlogSvg";
import { LogoSvg } from "../svg/LogoSvg";
import { MetaSvg } from "../svg/MetaSvg";
import { UnionSvg } from "../svg/UnionSvg";
import { MenuSvg } from "../svg/MenuSvg";

export const Hamburger = (props) => {
    // const [clicked, setClicked] = useState(false);
    // const { darkMode, setDarkMode } = useMode();

    return (
        <div>
            <nav
                className="w-full flex justify-between items-center pt-[20px] pb-[20px]"
            >
                <LogoSvg />
                <MenuSvg />
            </nav>
        </div>

    )
}