import { useState } from "react"
import logo from "../assets/react.svg"
import { PanelRightClose } from "lucide-react"
import { RiCloseFill } from "@remixicon/react";
import { RiMenu3Line } from "@remixicon/react";
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => { // Fixed typo here
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 mx-auto">
                <div className="text-neutral-500 max-w-7xl mx-auto px-10 py-3 flex justify-between items-center bg-[#04010273] backdrop-blur-xl">
                    {/* links */}
                    <div className="md:flex space-x-6 items-center">
                        {/* left logo goes here */}
                        <div className="flex items-center">
                            <a href="http://localhost:5173/">
                                <svg className="w-auto h-6" color="#ffff" width="1445" height="365" viewBox="0 0 1445 365" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M160.514 2.22147C158.39 4.44278 158.39 4.8291 158.39 40.6599V76.877L161.384 81.706C165.536 88.2733 227.347 149.794 232.176 152.015C234.784 153.174 238.164 153.754 243.476 153.754C250.043 153.754 251.685 153.368 255.645 151.05C260.763 148.056 304.127 105.754 307.218 100.829C309.922 96.386 309.246 95.4202 293.407 79.3881C280.659 66.4465 280.079 66.0602 276.699 66.4465C273.995 66.7362 271.484 68.3781 265.785 73.5933C261.729 77.2633 256.61 82.1889 254.486 84.4102C252.361 86.6315 243.765 95.0339 235.363 103.147C218.655 119.275 217.11 120.048 211.798 115.509L209.094 113.191L208.804 57.7544C208.514 21.7304 208.128 2.02831 207.452 1.1591C206.679 0.289887 200.884 0.000149548 184.563 0.000149548C162.832 0.000149548 162.543 0.000149548 160.514 2.22147Z" fill="currentColor">
                                </path><path d="M92.5227 62.5831C83.734 70.5026 66.6395 88.6595 66.6395 90.0116C66.6395 92.5226 69.9232 96.1926 94.3577 120.917C117.826 144.772 118.792 145.834 118.792 149.504C118.792 152.112 118.116 153.85 116.571 155.299L114.35 157.424H59.5892H4.92553L2.51105 159.742L0 161.963V182.245V202.526L2.41448 204.747L4.73237 206.969L41.7221 206.486C75.235 206.1 79.0982 205.906 82.575 204.265C87.2108 202.043 151.436 138.398 154.14 133.279C155.396 130.864 155.975 127.871 155.975 122.655C155.975 116.378 155.589 114.736 153.174 110.583C151.629 107.975 139.943 95.42 126.615 81.8989C107.01 62.1968 102.374 57.9474 100.249 57.9474C98.414 57.9474 95.9029 59.396 92.5227 62.5831Z" fill="currentColor"></path><path d="M309.536 158.293C289.254 158.873 287.033 159.066 283.459 160.997C279.017 163.315 222.132 219.717 216.047 227.734C212.087 232.949 211.991 233.335 211.701 241.351C211.411 249.367 211.508 249.85 214.599 254.486C216.337 257.094 228.12 269.842 240.868 282.687C265.592 307.894 265.882 308.087 272.16 304.804C273.608 304.031 280.562 297.56 287.612 290.413C303.355 274.478 303.355 274.768 293.697 263.951C290.027 259.798 278.92 248.401 268.972 238.55C246.952 216.724 245.987 215.178 250.526 209.866L252.844 207.162L308.377 206.679C353.383 206.293 364.103 205.907 365.358 204.844C366.807 203.685 367 200.885 367 182.631C367 167.275 366.71 161.287 365.841 160.128C364.296 158.197 342.662 157.521 309.536 158.293Z" fill="currentColor"></path><path d="M113.77 212.764C109.231 214.888 101.891 221.746 71.2757 252.844C64.4186 259.701 58.9136 265.979 58.9136 266.751C58.9136 268.683 84.4104 295.146 88.177 297.077C89.9154 298.043 91.9436 298.333 93.4889 297.946C95.0341 297.56 104.789 288.675 117.827 275.83C147.67 246.373 148.249 245.89 151.919 246.663C153.561 246.953 155.686 248.015 156.652 248.884C158.293 250.333 158.39 253.327 158.487 299.299C158.487 346.815 159.066 362.171 160.708 363.813C161.094 364.2 171.332 364.586 183.404 364.586C200.692 364.586 205.81 364.296 206.969 363.234C208.418 362.075 208.611 358.308 208.611 326.534C208.514 307.121 208.128 289.351 207.742 287.13C207.162 284.329 205.424 281.238 202.333 277.665C193.448 267.234 142.358 216.627 137.722 213.633C133.376 210.832 132.217 210.542 125.65 210.542C120.048 210.542 117.247 211.122 113.77 212.764Z" fill="currentColor"></path><path d="M570.64 275.168C551.984 275.168 535.968 271.208 522.592 263.288C509.216 255.192 498.92 244.016 491.704 229.76C484.488 215.328 480.88 198.696 480.88 179.864C480.88 161.032 484.488 144.4 491.704 129.967C498.92 115.536 509.216 104.272 522.592 96.1755C535.968 88.0795 551.984 84.0315 570.64 84.0315C592.816 84.0315 610.944 89.5755 625.024 100.663C639.28 111.576 648.168 126.976 651.688 146.864H614.464C612.176 136.832 607.248 129 599.68 123.368C592.288 117.56 582.432 114.656 570.112 114.656C553.04 114.656 539.664 120.464 529.984 132.08C520.304 143.696 515.464 159.624 515.464 179.864C515.464 200.104 520.304 216.032 529.984 227.648C539.664 239.088 553.04 244.808 570.112 244.808C582.432 244.808 592.288 242.168 599.68 236.888C607.248 231.432 612.176 223.952 614.464 214.448H651.688C648.168 233.456 639.28 248.328 625.024 259.064C610.944 269.8 592.816 275.168 570.64 275.168ZM725.952 275.168C714.688 275.168 705.448 273.408 698.232 269.888C691.016 266.192 685.648 261.352 682.128 255.368C678.608 249.384 676.848 242.784 676.848 235.568C676.848 223.424 681.6 213.568 691.104 206C700.608 198.432 714.864 194.648 733.872 194.648H767.136V191.48C767.136 182.504 764.584 175.904 759.48 171.68C754.376 167.456 748.04 165.344 740.472 165.344C733.608 165.344 727.624 167.016 722.52 170.36C717.416 173.528 714.248 178.28 713.016 184.616H680.016C680.896 175.112 684.064 166.84 689.52 159.8C695.152 152.76 702.368 147.392 711.168 143.696C719.968 139.824 729.824 137.888 740.736 137.888C759.392 137.888 774.088 142.552 784.824 151.88C795.56 161.208 800.928 174.408 800.928 191.48V272H772.152L768.984 250.88C765.112 257.92 759.656 263.728 752.616 268.304C745.752 272.88 736.864 275.168 725.952 275.168ZM733.608 248.768C743.288 248.768 750.768 245.6 756.048 239.264C761.504 232.928 764.936 225.096 766.344 215.768H737.568C728.592 215.768 722.168 217.44 718.296 220.784C714.424 223.952 712.488 227.912 712.488 232.664C712.488 237.768 714.424 241.728 718.296 244.544C722.168 247.36 727.272 248.768 733.608 248.768ZM833.176 330.08V141.056H863.272L866.968 159.8C871.192 153.992 876.736 148.888 883.6 144.488C890.64 140.088 899.704 137.888 910.792 137.888C923.112 137.888 934.112 140.88 943.792 146.864C953.472 152.848 961.128 161.032 966.76 171.416C972.392 181.8 975.208 193.592 975.208 206.792C975.208 219.992 972.392 231.784 966.76 242.168C961.128 252.376 953.472 260.472 943.792 266.456C934.112 272.264 923.112 275.168 910.792 275.168C900.936 275.168 892.312 273.32 884.92 269.624C877.528 265.928 871.544 260.736 866.968 254.048V330.08H833.176ZM903.664 245.6C914.4 245.6 923.288 241.992 930.328 234.776C937.368 227.56 940.888 218.232 940.888 206.792C940.888 195.352 937.368 185.936 930.328 178.544C923.288 171.152 914.4 167.456 903.664 167.456C892.752 167.456 883.776 171.152 876.736 178.544C869.872 185.76 866.44 195.088 866.44 206.528C866.44 217.968 869.872 227.384 876.736 234.776C883.776 241.992 892.752 245.6 903.664 245.6ZM1059.51 275.168C1047.9 275.168 1037.69 273.32 1028.89 269.624C1020.09 265.752 1013.05 260.472 1007.77 253.784C1002.49 247.096 999.322 239.352 998.266 230.552H1032.32C1033.38 235.656 1036.19 240.056 1040.77 243.752C1045.52 247.272 1051.59 249.032 1058.99 249.032C1066.38 249.032 1071.75 247.536 1075.09 244.544C1078.61 241.552 1080.37 238.12 1080.37 234.248C1080.37 228.616 1077.91 224.832 1072.98 222.896C1068.05 220.784 1061.19 218.76 1052.39 216.824C1046.75 215.592 1041.03 214.096 1035.23 212.336C1029.42 210.576 1024.05 208.376 1019.12 205.736C1014.37 202.92 1010.5 199.4 1007.51 195.176C1004.51 190.776 1003.02 185.408 1003.02 179.072C1003.02 167.456 1007.59 157.688 1016.75 149.768C1026.07 141.848 1039.1 137.888 1055.82 137.888C1071.31 137.888 1083.63 141.496 1092.78 148.712C1102.11 155.928 1107.65 165.872 1109.41 178.544H1077.47C1075.53 168.864 1068.23 164.024 1055.55 164.024C1049.22 164.024 1044.29 165.256 1040.77 167.72C1037.43 170.184 1035.75 173.264 1035.75 176.96C1035.75 180.832 1038.31 183.912 1043.41 186.2C1048.51 188.488 1055.29 190.6 1063.74 192.536C1072.89 194.648 1081.25 197.024 1088.82 199.664C1096.56 202.128 1102.72 205.912 1107.3 211.016C1111.87 215.944 1114.16 223.072 1114.16 232.4C1114.34 240.496 1112.23 247.8 1107.83 254.312C1103.43 260.824 1097.09 265.928 1088.82 269.624C1080.55 273.32 1070.78 275.168 1059.51 275.168ZM1195.92 272L1263.5 87.1995H1301.52L1369.1 272H1333.2L1318.41 229.232H1246.34L1231.29 272H1195.92ZM1255.58 202.832H1309.17L1282.24 126.008L1255.58 202.832ZM1392.91 272V87.1995H1426.7V272H1392.91Z" color="#ffff" fill="currentColor"></path></svg>
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-6 items-center">
                            <a href="#works" className="text-white hover:text-neutral-200"> How it works</a>
                            <a href="#works" className="text-white hover:text-neutral-200">
                                <NavigationMenu className="">
                                    <NavigationMenuList className="space-x-6">
                                        <NavigationMenuItem className="">
                                            <NavigationMenuTrigger className="text-[16px] font-normal">future</NavigationMenuTrigger>
                                            <NavigationMenuContent className="">
                                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                                                    <li className="row-span-3">
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#e4e4e415] p-6 no-underline outline-none focus:shadow-md "
                                                                href="/">
                                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99995 13.5C3.99995 9 8.46195 5.5 11.5 5.5C14.538 5.5 17 7.154 17 11C17 14.038 15 16 13 16C11 16 9.99995 14 10.5 11M11 9L7.99995 20.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                                {/* <Icons.logo className="h-6 w-6" /> */}
                                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                                    Caps-AI
                                                                </div>
                                                                <p className="text-sm leading-tight text-muted-foreground">
                                                                    Beautifully designed components that you can copy and
                                                                    paste into your apps.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                    <a href="" title="Introduction" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        Re-usable components built using Radix UI and Tailwind CSS.
                                                    </a>
                                                    <a href="" title="Installation" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        How to install dependencies and structure your app.
                                                    </a>
                                                    <a href="" title="Typography" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        Styles for headings, paragraphs, lists...etc
                                                    </a>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className="">
                                            <NavigationMenuTrigger className="text-[16px] font-normal">future</NavigationMenuTrigger>
                                            <NavigationMenuContent className="">
                                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                                                    <li className="row-span-3">
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#e4e4e415] p-6 no-underline outline-none focus:shadow-md "
                                                                href="/">
                                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99995 13.5C3.99995 9 8.46195 5.5 11.5 5.5C14.538 5.5 17 7.154 17 11C17 14.038 15 16 13 16C11 16 9.99995 14 10.5 11M11 9L7.99995 20.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                                {/* <Icons.logo className="h-6 w-6" /> */}
                                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                                    Caps-AI
                                                                </div>
                                                                <p className="text-sm leading-tight text-muted-foreground">
                                                                    Beautifully designed components that you can copy and
                                                                    paste into your apps.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                    <a href="" title="Introduction" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        Re-usable components built using Radix UI and Tailwind CSS.
                                                    </a>
                                                    <a href="" title="Installation" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        How to install dependencies and structure your app.
                                                    </a>
                                                    <a href="" title="Typography" className="w-full h-full px-5 py-2 text-md font-normal rounded-md hover:bg-[#e4e4e415]">
                                                        Styles for headings, paragraphs, lists...etc
                                                    </a>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>

                                    </NavigationMenuList>
                                </NavigationMenu>
                            </a>

                            <a href="#works" className="text-white hover:text-neutral-200"> Pricing</a>
                            <a href="#works" className="text-white hover:text-neutral-200"> Integrations</a>
                            {/* this is will be a nice drop down menu i'll do it as soon as possble okay  */}
                            <a href="#works" className="text-white hover:text-neutral-200"> Resources</a>
                        </div>
                    </div>

                    {/* right: bittons hidden on mobile */}
                    <div className="hidden md:flex space-x-4 items-center">

                        <Button variant="gosht">Login</Button>
                        <Button variant="secondary">Start For Free </Button>
                    </div>
                    {/* Humburger Icon for mobile version */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none"
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden m-5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
                        <div className="flex flex-col  space-y-4">
                            <a href="#works" className="hover:text-neutral-200"> how it works</a>
                            <a href="#works" className="hover:text-neutral-200"> how it works</a>
                            <a href="#works" className="hover:text-neutral-200"> how it works</a>
                            <a href="#works" className="hover:text-neutral-200"> how it works</a>
                        </div>
                    </div>
                )}
            </nav>

        </>
    )
}
export default Navbar