function HeroContent() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center z-20 w-full py-20">
                <div className="flex flex-col items-center justify-center max-w-3xl gap-y-8">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        {/* Badge goes here  */}
                        <div className="relative hidden lg:block overflow-hidden" style={{ background: "" }}>
                            <div className="inline-flex items-center font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-t border-b-0 border-x-0 border-[#fafaf933] bg-[#ffffff1a] backdrop-blur-md text-[#fafaf9] rounded-full py-1.5 text-sm px-3 cursor-pointer relative z-20">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-[9px] font-medium mr-2 text-white">
                                    NEW
                                </span>
                                <span className="text-white">Discover our latest Ai-powered feature</span>
                            </div>
                        </div>
                        {/* Headding start */}
                        <div className="">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-tight space-x-1">
                                <span className="text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
                                    Supercharge your
                                </span>
                                <span className="text-[#ea580c]">social media</span>
                                <span className="text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
                                    presence with AI
                                </span>
                            </h1>
                        </div>
                        <div className="">
                            <p className="max-w-xl mt-2 text-base text-center text-white">
                                Elevate your social media game with AI-powered caption generation and scheduling.
                            </p>
                            <div className="items-center justify-center mt-6 lg:flex gap-x-4">
                                <a href="#" className="inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none bg-[#ea580c] text-primary-foreground hover:opacity-70 hover:ring-4 hover:ring-primary/10 h-11 rounded-md px-8">Start For Free</a>
                                <a href="#" className="relative overflow-hidden  justify-center whitespace-nowrap text-sm text-white ring-offset-[#ea580c] transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-[#ea580c] active:ring-[#ea580c] active:ring-opacity-50 group select-none text-secondary-foreground btn-secondary font-normal h-11 rounded-md px-8 flex items-center">How it works</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            {/* add svg's here */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" color="#a8a29e" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
                            <span className="text-sm text-muted-foreground">14-day free trail</span>
                            <span className="text-[#a8a29e]">•</span>
                            {/* add svg's here */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" color="#a8a29e" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            <span className="text-sm text-muted-foreground"> No card required</span>
                        </div>
                    </div>
                    <div className="hidden w-full lg:block">
                        <div className="absolute left-0 flex items-center justify-center  group top-1/2">
                            <div className="relative ">
                                {/* svg here */}
                                <svg width="105" height="42" viewBox="0 0 105 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="10" width="80" height="32" rx="8" fill="#f97316"></rect><path d="M12.852 30V21.6H18.12V22.632H14.124V25.284H17.436V26.304H14.124V30H12.852ZM20.8786 30.144C20.3746 30.144 19.9586 30.06 19.6306 29.892C19.3026 29.724 19.0586 29.504 18.8986 29.232C18.7386 28.952 18.6586 28.648 18.6586 28.32C18.6586 27.744 18.8826 27.288 19.3306 26.952C19.7786 26.616 20.4186 26.448 21.2506 26.448H22.8106V26.34C22.8106 25.876 22.6826 25.528 22.4266 25.296C22.1786 25.064 21.8546 24.948 21.4546 24.948C21.1026 24.948 20.7946 25.036 20.5306 25.212C20.2746 25.38 20.1186 25.632 20.0626 25.968H18.7906C18.8306 25.536 18.9746 25.168 19.2226 24.864C19.4786 24.552 19.7986 24.316 20.1826 24.156C20.5746 23.988 21.0026 23.904 21.4666 23.904C22.2986 23.904 22.9426 24.124 23.3986 24.564C23.8546 24.996 24.0826 25.588 24.0826 26.34V30H22.9786L22.8706 28.98C22.7026 29.308 22.4586 29.584 22.1386 29.808C21.8186 30.032 21.3986 30.144 20.8786 30.144ZM21.1306 29.112C21.4746 29.112 21.7626 29.032 21.9946 28.872C22.2346 28.704 22.4186 28.484 22.5466 28.212C22.6826 27.94 22.7666 27.64 22.7986 27.312H21.3826C20.8786 27.312 20.5186 27.4 20.3026 27.576C20.0946 27.752 19.9906 27.972 19.9906 28.236C19.9906 28.508 20.0906 28.724 20.2906 28.884C20.4986 29.036 20.7786 29.112 21.1306 29.112ZM28.3857 30.144C27.8017 30.144 27.2777 30.012 26.8137 29.748C26.3577 29.484 25.9977 29.12 25.7337 28.656C25.4777 28.184 25.3497 27.64 25.3497 27.024C25.3497 26.408 25.4777 25.868 25.7337 25.404C25.9977 24.932 26.3577 24.564 26.8137 24.3C27.2777 24.036 27.8017 23.904 28.3857 23.904C29.1217 23.904 29.7377 24.096 30.2337 24.48C30.7377 24.864 31.0617 25.384 31.2057 26.04H29.8737C29.7937 25.712 29.6177 25.456 29.3457 25.272C29.0737 25.088 28.7537 24.996 28.3857 24.996C28.0737 24.996 27.7857 25.076 27.5217 25.236C27.2577 25.388 27.0457 25.616 26.8857 25.92C26.7257 26.216 26.6457 26.584 26.6457 27.024C26.6457 27.464 26.7257 27.836 26.8857 28.14C27.0457 28.436 27.2577 28.664 27.5217 28.824C27.7857 28.984 28.0737 29.064 28.3857 29.064C28.7537 29.064 29.0737 28.972 29.3457 28.788C29.6177 28.604 29.7937 28.344 29.8737 28.008H31.2057C31.0697 28.648 30.7497 29.164 30.2457 29.556C29.7417 29.948 29.1217 30.144 28.3857 30.144ZM35.3693 30.144C34.7853 30.144 34.2653 30.016 33.8093 29.76C33.3613 29.496 33.0093 29.132 32.7533 28.668C32.4973 28.204 32.3693 27.664 32.3693 27.048C32.3693 26.424 32.4933 25.876 32.7413 25.404C32.9973 24.932 33.3493 24.564 33.7973 24.3C34.2533 24.036 34.7813 23.904 35.3813 23.904C35.9653 23.904 36.4733 24.036 36.9053 24.3C37.3373 24.556 37.6733 24.9 37.9133 25.332C38.1533 25.764 38.2733 26.24 38.2733 26.76C38.2733 26.84 38.2693 26.928 38.2613 27.024C38.2613 27.112 38.2573 27.212 38.2493 27.324H33.6173C33.6573 27.9 33.8453 28.34 34.1813 28.644C34.5253 28.94 34.9213 29.088 35.3693 29.088C35.7293 29.088 36.0293 29.008 36.2693 28.848C36.5173 28.68 36.7013 28.456 36.8213 28.176H38.0933C37.9333 28.736 37.6133 29.204 37.1333 29.58C36.6613 29.956 36.0733 30.144 35.3693 30.144ZM35.3693 24.948C34.9453 24.948 34.5693 25.076 34.2413 25.332C33.9133 25.58 33.7133 25.956 33.6413 26.46H37.0013C36.9773 25.996 36.8133 25.628 36.5093 25.356C36.2053 25.084 35.8253 24.948 35.3693 24.948ZM42.9411 30.144C42.4771 30.144 42.0651 30.052 41.7051 29.868C41.3531 29.684 41.0731 29.424 40.8651 29.088L40.7331 30H39.5931V21.36H40.8651V24.972C41.0571 24.692 41.3211 24.444 41.6571 24.228C41.9931 24.012 42.4251 23.904 42.9531 23.904C43.5291 23.904 44.0371 24.04 44.4771 24.312C44.9171 24.584 45.2611 24.956 45.5091 25.428C45.7651 25.9 45.8931 26.436 45.8931 27.036C45.8931 27.636 45.7651 28.172 45.5091 28.644C45.2611 29.108 44.9171 29.476 44.4771 29.748C44.0371 30.012 43.5251 30.144 42.9411 30.144ZM42.7251 29.04C43.2691 29.04 43.7171 28.856 44.0691 28.488C44.4211 28.112 44.5971 27.624 44.5971 27.024C44.5971 26.632 44.5171 26.284 44.3571 25.98C44.1971 25.676 43.9771 25.44 43.6971 25.272C43.4171 25.096 43.0931 25.008 42.7251 25.008C42.1811 25.008 41.7331 25.196 41.3811 25.572C41.0371 25.948 40.8651 26.432 40.8651 27.024C40.8651 27.624 41.0371 28.112 41.3811 28.488C41.7331 28.856 42.1811 29.04 42.7251 29.04ZM50.0528 30.144C49.4848 30.144 48.9728 30.016 48.5168 29.76C48.0688 29.496 47.7128 29.132 47.4488 28.668C47.1848 28.196 47.0528 27.648 47.0528 27.024C47.0528 26.4 47.1848 25.856 47.4488 25.392C47.7208 24.92 48.0848 24.556 48.5408 24.3C48.9968 24.036 49.5048 23.904 50.0648 23.904C50.6328 23.904 51.1408 24.036 51.5888 24.3C52.0448 24.556 52.4048 24.92 52.6688 25.392C52.9408 25.856 53.0768 26.4 53.0768 27.024C53.0768 27.648 52.9408 28.196 52.6688 28.668C52.4048 29.132 52.0448 29.496 51.5888 29.76C51.1328 30.016 50.6208 30.144 50.0528 30.144ZM50.0528 29.052C50.3568 29.052 50.6368 28.976 50.8928 28.824C51.1568 28.672 51.3688 28.448 51.5288 28.152C51.6888 27.848 51.7688 27.472 51.7688 27.024C51.7688 26.576 51.6888 26.204 51.5288 25.908C51.3768 25.604 51.1688 25.376 50.9048 25.224C50.6488 25.072 50.3688 24.996 50.0648 24.996C49.7608 24.996 49.4768 25.072 49.2128 25.224C48.9568 25.376 48.7488 25.604 48.5888 25.908C48.4288 26.204 48.3488 26.576 48.3488 27.024C48.3488 27.472 48.4288 27.848 48.5888 28.152C48.7488 28.448 48.9568 28.672 49.2128 28.824C49.4688 28.976 49.7488 29.052 50.0528 29.052ZM57.2364 30.144C56.6684 30.144 56.1564 30.016 55.7004 29.76C55.2524 29.496 54.8964 29.132 54.6324 28.668C54.3684 28.196 54.2364 27.648 54.2364 27.024C54.2364 26.4 54.3684 25.856 54.6324 25.392C54.9044 24.92 55.2684 24.556 55.7244 24.3C56.1804 24.036 56.6884 23.904 57.2484 23.904C57.8164 23.904 58.3244 24.036 58.7724 24.3C59.2284 24.556 59.5884 24.92 59.8524 25.392C60.1244 25.856 60.2604 26.4 60.2604 27.024C60.2604 27.648 60.1244 28.196 59.8524 28.668C59.5884 29.132 59.2284 29.496 58.7724 29.76C58.3164 30.016 57.8044 30.144 57.2364 30.144ZM57.2364 29.052C57.5404 29.052 57.8204 28.976 58.0764 28.824C58.3404 28.672 58.5524 28.448 58.7124 28.152C58.8724 27.848 58.9524 27.472 58.9524 27.024C58.9524 26.576 58.8724 26.204 58.7124 25.908C58.5604 25.604 58.3524 25.376 58.0884 25.224C57.8324 25.072 57.5524 24.996 57.2484 24.996C56.9444 24.996 56.6604 25.072 56.3964 25.224C56.1404 25.376 55.9324 25.604 55.7724 25.908C55.6124 26.204 55.5324 26.576 55.5324 27.024C55.5324 27.472 55.6124 27.848 55.7724 28.152C55.9324 28.448 56.1404 28.672 56.3964 28.824C56.6524 28.976 56.9324 29.052 57.2364 29.052ZM61.636 30V21.36H62.908V26.508L65.188 24.048H66.712L64.18 26.748L67.084 30H65.476L62.908 26.952V30H61.636Z" fill="white"></path><path d="M103.847 2.93149C104.777 1.73879 103.927 -1.34355e-08 102.415 -7.949e-08L81.8199 -9.79747e-07C80.0981 -1.05501e-06 79.3425 2.17349 80.6938 3.24146L87.1113 8.31496C87.3479 8.50215 87.5389 8.74047 87.6702 9.01204C87.8015 9.28361 87.8696 9.58138 87.8693 9.88302L87.8693 18.1798C87.8693 19.9089 90.0586 20.6609 91.1193 19.295L103.847 2.93149Z" fill="#f97316"></path></svg>
                            </div>
                        </div>
                        <div className="absolute flex items-center justify-center  left-36 group bottom-1/4">
                            <div className="relative ">
                                {/* svg here */}
                                <svg width="106" height="42" viewBox="0 0 106 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="10" width="81" height="32" rx="8" fill="#f97316"></rect><path d="M12.852 30V21.6H14.124V30H12.852ZM15.7806 30V24.048H16.9086L17.0046 25.092C17.1886 24.724 17.4566 24.436 17.8086 24.228C18.1686 24.012 18.5806 23.904 19.0446 23.904C19.7646 23.904 20.3286 24.128 20.7366 24.576C21.1526 25.024 21.3606 25.692 21.3606 26.58V30H20.1006V26.712C20.1006 25.56 19.6286 24.984 18.6846 24.984C18.2126 24.984 17.8206 25.152 17.5086 25.488C17.2046 25.824 17.0526 26.304 17.0526 26.928V30H15.7806ZM25.2347 30.144C24.4827 30.144 23.8627 29.96 23.3747 29.592C22.8867 29.224 22.6067 28.736 22.5347 28.128H23.8187C23.8827 28.4 24.0347 28.636 24.2747 28.836C24.5147 29.028 24.8307 29.124 25.2227 29.124C25.6067 29.124 25.8867 29.044 26.0627 28.884C26.2387 28.724 26.3267 28.54 26.3267 28.332C26.3267 28.028 26.2027 27.824 25.9547 27.72C25.7147 27.608 25.3787 27.508 24.9467 27.42C24.6107 27.348 24.2747 27.252 23.9387 27.132C23.6107 27.012 23.3347 26.844 23.1107 26.628C22.8947 26.404 22.7867 26.104 22.7867 25.728C22.7867 25.208 22.9867 24.776 23.3867 24.432C23.7867 24.08 24.3467 23.904 25.0667 23.904C25.7307 23.904 26.2667 24.064 26.6747 24.384C27.0907 24.704 27.3347 25.156 27.4067 25.74H26.1827C26.1427 25.484 26.0227 25.284 25.8227 25.14C25.6307 24.996 25.3707 24.924 25.0427 24.924C24.7227 24.924 24.4747 24.992 24.2987 25.128C24.1227 25.256 24.0347 25.424 24.0347 25.632C24.0347 25.84 24.1547 26.004 24.3947 26.124C24.6427 26.244 24.9667 26.352 25.3667 26.448C25.7667 26.536 26.1347 26.64 26.4707 26.76C26.8147 26.872 27.0907 27.04 27.2987 27.264C27.5067 27.488 27.6107 27.816 27.6107 28.248C27.6187 28.792 27.4067 29.244 26.9747 29.604C26.5507 29.964 25.9707 30.144 25.2347 30.144ZM31.2727 30C30.6887 30 30.2247 29.86 29.8807 29.58C29.5367 29.292 29.3647 28.784 29.3647 28.056V25.116H28.3447V24.048H29.3647L29.5207 22.536H30.6367V24.048H32.3167V25.116H30.6367V28.056C30.6367 28.384 30.7047 28.612 30.8407 28.74C30.9847 28.86 31.2287 28.92 31.5727 28.92H32.2567V30H31.2727ZM35.6442 30.144C35.1402 30.144 34.7242 30.06 34.3962 29.892C34.0682 29.724 33.8242 29.504 33.6642 29.232C33.5042 28.952 33.4242 28.648 33.4242 28.32C33.4242 27.744 33.6482 27.288 34.0962 26.952C34.5442 26.616 35.1842 26.448 36.0162 26.448H37.5762V26.34C37.5762 25.876 37.4482 25.528 37.1922 25.296C36.9442 25.064 36.6202 24.948 36.2202 24.948C35.8682 24.948 35.5602 25.036 35.2962 25.212C35.0402 25.38 34.8842 25.632 34.8282 25.968H33.5562C33.5962 25.536 33.7402 25.168 33.9882 24.864C34.2442 24.552 34.5642 24.316 34.9482 24.156C35.3402 23.988 35.7682 23.904 36.2322 23.904C37.0642 23.904 37.7082 24.124 38.1642 24.564C38.6202 24.996 38.8482 25.588 38.8482 26.34V30H37.7442L37.6362 28.98C37.4682 29.308 37.2242 29.584 36.9042 29.808C36.5842 30.032 36.1642 30.144 35.6442 30.144ZM35.8962 29.112C36.2402 29.112 36.5282 29.032 36.7602 28.872C37.0002 28.704 37.1842 28.484 37.3122 28.212C37.4482 27.94 37.5322 27.64 37.5642 27.312H36.1482C35.6442 27.312 35.2842 27.4 35.0682 27.576C34.8602 27.752 34.7562 27.972 34.7562 28.236C34.7562 28.508 34.8562 28.724 35.0562 28.884C35.2642 29.036 35.5442 29.112 35.8962 29.112ZM42.7673 28.176C42.4553 28.176 42.1673 28.14 41.9033 28.068L41.3873 28.572C41.4753 28.628 41.5833 28.676 41.7113 28.716C41.8393 28.756 42.0193 28.792 42.2513 28.824C42.4833 28.856 42.7993 28.888 43.1993 28.92C43.9913 28.992 44.5633 29.184 44.9153 29.496C45.2673 29.8 45.4433 30.208 45.4433 30.72C45.4433 31.072 45.3473 31.404 45.1553 31.716C44.9713 32.036 44.6793 32.292 44.2793 32.484C43.8873 32.684 43.3833 32.784 42.7673 32.784C41.9353 32.784 41.2593 32.624 40.7393 32.304C40.2273 31.992 39.9713 31.516 39.9713 30.876C39.9713 30.628 40.0353 30.38 40.1633 30.132C40.2993 29.892 40.5113 29.664 40.7993 29.448C40.6313 29.376 40.4833 29.3 40.3553 29.22C40.2353 29.132 40.1273 29.044 40.0313 28.956V28.668L41.0633 27.612C40.5993 27.212 40.3673 26.688 40.3673 26.04C40.3673 25.648 40.4593 25.292 40.6433 24.972C40.8353 24.644 41.1113 24.384 41.4713 24.192C41.8313 24 42.2633 23.904 42.7673 23.904C43.1033 23.904 43.4153 23.952 43.7033 24.048H45.9233V24.888L44.8673 24.948C45.0593 25.276 45.1553 25.64 45.1553 26.04C45.1553 26.44 45.0593 26.8 44.8673 27.12C44.6833 27.44 44.4113 27.696 44.0513 27.888C43.6993 28.08 43.2713 28.176 42.7673 28.176ZM42.7673 27.18C43.1353 27.18 43.4313 27.084 43.6553 26.892C43.8873 26.692 44.0033 26.412 44.0033 26.052C44.0033 25.684 43.8873 25.404 43.6553 25.212C43.4313 25.02 43.1353 24.924 42.7673 24.924C42.3913 24.924 42.0873 25.02 41.8553 25.212C41.6313 25.404 41.5193 25.684 41.5193 26.052C41.5193 26.412 41.6313 26.692 41.8553 26.892C42.0873 27.084 42.3913 27.18 42.7673 27.18ZM41.1713 30.756C41.1713 31.1 41.3233 31.356 41.6273 31.524C41.9313 31.7 42.3113 31.788 42.7673 31.788C43.2073 31.788 43.5633 31.692 43.8353 31.5C44.1073 31.316 44.2433 31.068 44.2433 30.756C44.2433 30.524 44.1513 30.324 43.9673 30.156C43.7833 29.996 43.4353 29.896 42.9233 29.856C42.5393 29.832 42.1993 29.796 41.9033 29.748C41.6233 29.9 41.4313 30.064 41.3273 30.24C41.2233 30.416 41.1713 30.588 41.1713 30.756ZM47.0579 30V24.048H48.1979L48.3059 25.176C48.5139 24.784 48.8019 24.476 49.1699 24.252C49.5459 24.02 49.9979 23.904 50.5259 23.904V25.236H50.1779C49.8259 25.236 49.5099 25.296 49.2299 25.416C48.9579 25.528 48.7379 25.724 48.5699 26.004C48.4099 26.276 48.3299 26.656 48.3299 27.144V30H47.0579ZM53.6325 30.144C53.1285 30.144 52.7125 30.06 52.3845 29.892C52.0565 29.724 51.8125 29.504 51.6525 29.232C51.4925 28.952 51.4125 28.648 51.4125 28.32C51.4125 27.744 51.6365 27.288 52.0845 26.952C52.5325 26.616 53.1725 26.448 54.0045 26.448H55.5645V26.34C55.5645 25.876 55.4365 25.528 55.1805 25.296C54.9325 25.064 54.6085 24.948 54.2085 24.948C53.8565 24.948 53.5485 25.036 53.2845 25.212C53.0285 25.38 52.8725 25.632 52.8165 25.968H51.5445C51.5845 25.536 51.7285 25.168 51.9765 24.864C52.2325 24.552 52.5525 24.316 52.9365 24.156C53.3285 23.988 53.7565 23.904 54.2205 23.904C55.0525 23.904 55.6965 24.124 56.1525 24.564C56.6085 24.996 56.8365 25.588 56.8365 26.34V30H55.7325L55.6245 28.98C55.4565 29.308 55.2125 29.584 54.8925 29.808C54.5725 30.032 54.1525 30.144 53.6325 30.144ZM53.8845 29.112C54.2285 29.112 54.5165 29.032 54.7485 28.872C54.9885 28.704 55.1725 28.484 55.3005 28.212C55.4365 27.94 55.5205 27.64 55.5525 27.312H54.1365C53.6325 27.312 53.2725 27.4 53.0565 27.576C52.8485 27.752 52.7445 27.972 52.7445 28.236C52.7445 28.508 52.8445 28.724 53.0445 28.884C53.2525 29.036 53.5325 29.112 53.8845 29.112ZM58.3196 30V24.048H59.4476L59.5556 24.888C59.7476 24.584 59.9996 24.344 60.3116 24.168C60.6316 23.992 60.9996 23.904 61.4156 23.904C62.3596 23.904 63.0156 24.276 63.3836 25.02C63.5996 24.676 63.8876 24.404 64.2476 24.204C64.6156 24.004 65.0116 23.904 65.4356 23.904C66.1796 23.904 66.7636 24.128 67.1876 24.576C67.6116 25.024 67.8236 25.692 67.8236 26.58V30H66.5516V26.712C66.5516 25.56 66.1116 24.984 65.2316 24.984C64.7836 24.984 64.4156 25.152 64.1276 25.488C63.8476 25.824 63.7076 26.304 63.7076 26.928V30H62.4356V26.712C62.4356 25.56 61.9916 24.984 61.1036 24.984C60.6636 24.984 60.2996 25.152 60.0116 25.488C59.7316 25.824 59.5916 26.304 59.5916 26.928V30H58.3196Z" fill="white"></path><path d="M104.847 2.93149C105.777 1.73879 104.927 -1.34355e-08 103.415 -7.949e-08L82.8199 -9.79747e-07C81.0981 -1.05501e-06 80.3425 2.17349 81.6938 3.24146L88.1113 8.31496C88.3479 8.50215 88.5389 8.74047 88.6702 9.01204C88.8015 9.28361 88.8696 9.58138 88.8693 9.88302L88.8693 18.1798C88.8693 19.9089 91.0586 20.6609 92.1193 19.295L104.847 2.93149Z" fill="#f97316"></path></svg>
                            </div>
                        </div>
                        <div className="absolute right-0 flex items-center justify-center  group top-1/2">
                            <div className="relative ">
                                {/* svg here */}
                                <svg width="89" height="43" viewBox="0 0 89 43" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="63.9972" height="31.9986" rx="8" transform="matrix(-1 0 0 1 89 10.0149)" fill="#f97316"></rect><path d="M39.8215 30.0142V22.6462H37.3375V21.6142H43.5655V22.6462H41.0935V30.0142H39.8215ZM45.2396 30.0142L43.4876 24.0622H44.7596L45.9116 28.5502L47.2076 24.0622H48.6236L49.9196 28.5502L51.0716 24.0622H52.3436L50.5916 30.0142H49.2836L47.9156 25.3342L46.5476 30.0142H45.2396ZM54.1114 22.9342C53.8714 22.9342 53.6714 22.8622 53.5114 22.7182C53.3594 22.5662 53.2834 22.3782 53.2834 22.1542C53.2834 21.9302 53.3594 21.7462 53.5114 21.6022C53.6714 21.4502 53.8714 21.3742 54.1114 21.3742C54.3514 21.3742 54.5474 21.4502 54.6994 21.6022C54.8594 21.7462 54.9394 21.9302 54.9394 22.1542C54.9394 22.3782 54.8594 22.5662 54.6994 22.7182C54.5474 22.8622 54.3514 22.9342 54.1114 22.9342ZM53.4754 30.0142V24.0622H54.7474V30.0142H53.4754ZM58.9226 30.0142C58.3386 30.0142 57.8746 29.8742 57.5306 29.5942C57.1866 29.3062 57.0146 28.7982 57.0146 28.0702V25.1302H55.9946V24.0622H57.0146L57.1706 22.5502H58.2866V24.0622H59.9666V25.1302H58.2866V28.0702C58.2866 28.3982 58.3546 28.6262 58.4906 28.7542C58.6346 28.8742 58.8786 28.9342 59.2226 28.9342H59.9066V30.0142H58.9226ZM63.7741 30.0142C63.1901 30.0142 62.7261 29.8742 62.3821 29.5942C62.0381 29.3062 61.8661 28.7982 61.8661 28.0702V25.1302H60.8461V24.0622H61.8661L62.0221 22.5502H63.1381V24.0622H64.8181V25.1302H63.1381V28.0702C63.1381 28.3982 63.2061 28.6262 63.3421 28.7542C63.4861 28.8742 63.7301 28.9342 64.0741 28.9342H64.7581V30.0142H63.7741ZM68.7613 30.1582C68.1773 30.1582 67.6573 30.0302 67.2013 29.7742C66.7533 29.5102 66.4013 29.1462 66.1453 28.6822C65.8893 28.2182 65.7613 27.6782 65.7613 27.0622C65.7613 26.4382 65.8853 25.8902 66.1333 25.4182C66.3893 24.9462 66.7413 24.5782 67.1893 24.3142C67.6453 24.0502 68.1733 23.9182 68.7733 23.9182C69.3573 23.9182 69.8653 24.0502 70.2973 24.3142C70.7293 24.5702 71.0653 24.9142 71.3053 25.3462C71.5453 25.7782 71.6653 26.2542 71.6653 26.7742C71.6653 26.8542 71.6613 26.9422 71.6533 27.0382C71.6533 27.1262 71.6493 27.2262 71.6413 27.3382H67.0093C67.0493 27.9142 67.2373 28.3542 67.5733 28.6582C67.9173 28.9542 68.3133 29.1022 68.7613 29.1022C69.1213 29.1022 69.4213 29.0222 69.6613 28.8622C69.9093 28.6942 70.0933 28.4702 70.2133 28.1902H71.4853C71.3253 28.7502 71.0053 29.2182 70.5253 29.5942C70.0533 29.9702 69.4653 30.1582 68.7613 30.1582ZM68.7613 24.9622C68.3373 24.9622 67.9613 25.0902 67.6333 25.3462C67.3053 25.5942 67.1053 25.9702 67.0333 26.4742H70.3933C70.3693 26.0102 70.2053 25.6422 69.9013 25.3702C69.5973 25.0982 69.2173 24.9622 68.7613 24.9622ZM72.9852 30.0142V24.0622H74.1252L74.2332 25.1902C74.4412 24.7982 74.7292 24.4902 75.0972 24.2662C75.4732 24.0342 75.9252 23.9182 76.4532 23.9182V25.2502H76.1052C75.7532 25.2502 75.4372 25.3102 75.1572 25.4302C74.8852 25.5422 74.6652 25.7382 74.4972 26.0182C74.3372 26.2902 74.2572 26.6702 74.2572 27.1582V30.0142H72.9852Z" fill="white"></path><path d="M1.15729 2.94665C0.227391 1.754 1.07738 0.0152893 2.58846 0.0152892L23.183 0.0152883C24.9048 0.0152883 25.6603 2.18868 24.3091 3.25661L17.8918 8.32988C17.6553 8.51707 17.4642 8.75538 17.333 9.02693C17.2017 9.29849 17.1336 9.59625 17.1338 9.89787L17.1338 18.1943C17.1338 19.9233 14.9447 20.6752 13.884 19.3094L1.15729 2.94665Z" fill="#f97316"></path></svg>
                            </div>
                        </div>
                        <div className="absolute flex items-center justify-center  right-36 group bottom-1/4">
                            <div className="relative ">
                                {/* svg here */}
                                <svg width="97" height="43" viewBox="0 0 97 43" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="71.9971" height="31.9987" rx="8" transform="matrix(-1 0 0 1 97 10.1016)" fill="#f97316"></rect><path d="M37.8535 30.1009V21.7009H39.1255V29.0929H42.9415V30.1009H37.8535ZM44.9825 23.0209C44.7425 23.0209 44.5425 22.9489 44.3825 22.8049C44.2305 22.6529 44.1545 22.4649 44.1545 22.2409C44.1545 22.0169 44.2305 21.8329 44.3825 21.6889C44.5425 21.5369 44.7425 21.4609 44.9825 21.4609C45.2225 21.4609 45.4185 21.5369 45.5705 21.6889C45.7305 21.8329 45.8105 22.0169 45.8105 22.2409C45.8105 22.4649 45.7305 22.6529 45.5705 22.8049C45.4185 22.9489 45.2225 23.0209 44.9825 23.0209ZM44.3465 30.1009V24.1489H45.6185V30.1009H44.3465ZM47.2977 30.1009V24.1489H48.4257L48.5217 25.1929C48.7057 24.8249 48.9737 24.5369 49.3257 24.3289C49.6857 24.1129 50.0977 24.0049 50.5617 24.0049C51.2817 24.0049 51.8457 24.2289 52.2537 24.6769C52.6697 25.1249 52.8777 25.7929 52.8777 26.6809V30.1009H51.6177V26.8129C51.6177 25.6609 51.1457 25.0849 50.2017 25.0849C49.7297 25.0849 49.3377 25.2529 49.0257 25.5889C48.7217 25.9249 48.5697 26.4049 48.5697 27.0289V30.1009H47.2977ZM54.3758 30.1009V21.4609H55.6478V26.6089L57.9278 24.1489H59.4518L56.9198 26.8489L59.8238 30.1009H58.2158L55.6478 27.0529V30.1009H54.3758ZM63.1363 30.2449C62.5523 30.2449 62.0323 30.1169 61.5763 29.8609C61.1283 29.5969 60.7763 29.2329 60.5203 28.7689C60.2643 28.3049 60.1363 27.7649 60.1363 27.1489C60.1363 26.5249 60.2603 25.9769 60.5083 25.5049C60.7643 25.0329 61.1163 24.6649 61.5643 24.4009C62.0203 24.1369 62.5483 24.0049 63.1483 24.0049C63.7323 24.0049 64.2403 24.1369 64.6723 24.4009C65.1043 24.6569 65.4403 25.0009 65.6803 25.4329C65.9203 25.8649 66.0403 26.3409 66.0403 26.8609C66.0403 26.9409 66.0363 27.0289 66.0283 27.1249C66.0283 27.2129 66.0243 27.3129 66.0163 27.4249H61.3843C61.4243 28.0009 61.6123 28.4409 61.9483 28.7449C62.2923 29.0409 62.6883 29.1889 63.1363 29.1889C63.4963 29.1889 63.7963 29.1089 64.0363 28.9489C64.2843 28.7809 64.4683 28.5569 64.5883 28.2769H65.8603C65.7003 28.8369 65.3803 29.3049 64.9003 29.6809C64.4283 30.0569 63.8403 30.2449 63.1363 30.2449ZM63.1363 25.0489C62.7123 25.0489 62.3363 25.1769 62.0083 25.4329C61.6803 25.6809 61.4803 26.0569 61.4083 26.5609H64.7683C64.7443 26.0969 64.5803 25.7289 64.2763 25.4569C63.9723 25.1849 63.5923 25.0489 63.1363 25.0489ZM70.0722 30.2449C69.4962 30.2449 68.9882 30.1089 68.5482 29.8369C68.1082 29.5649 67.7642 29.1929 67.5162 28.7209C67.2682 28.2489 67.1442 27.7129 67.1442 27.1129C67.1442 26.5129 67.2682 25.9809 67.5162 25.5169C67.7642 25.0449 68.1082 24.6769 68.5482 24.4129C68.9962 24.1409 69.5082 24.0049 70.0842 24.0049C70.5562 24.0049 70.9682 24.0969 71.3202 24.2809C71.6802 24.4649 71.9602 24.7249 72.1602 25.0609V21.4609H73.4322V30.1009H72.2922L72.1602 29.1769C71.9682 29.4569 71.7042 29.7049 71.3682 29.9209C71.0322 30.1369 70.6002 30.2449 70.0722 30.2449ZM70.3002 29.1409C70.8442 29.1409 71.2882 28.9529 71.6322 28.5769C71.9842 28.2009 72.1602 27.7169 72.1602 27.1249C72.1602 26.5249 71.9842 26.0409 71.6322 25.6729C71.2882 25.2969 70.8442 25.1089 70.3002 25.1089C69.7562 25.1089 69.3082 25.2969 68.9562 25.6729C68.6042 26.0409 68.4282 26.5249 68.4282 27.1249C68.4282 27.5169 68.5082 27.8649 68.6682 28.1689C68.8282 28.4729 69.0482 28.7129 69.3282 28.8889C69.6162 29.0569 69.9402 29.1409 70.3002 29.1409ZM75.0839 30.1009V21.7009H76.3559V30.1009H75.0839ZM78.0125 30.1009V24.1489H79.1405L79.2365 25.1929C79.4205 24.8249 79.6885 24.5369 80.0405 24.3289C80.4005 24.1129 80.8125 24.0049 81.2765 24.0049C81.9965 24.0049 82.5605 24.2289 82.9685 24.6769C83.3845 25.1249 83.5925 25.7929 83.5925 26.6809V30.1009H82.3325V26.8129C82.3325 25.6609 81.8605 25.0849 80.9165 25.0849C80.4445 25.0849 80.0525 25.2529 79.7405 25.5889C79.4365 25.9249 79.2845 26.4049 79.2845 27.0289V30.1009H78.0125Z" fill="white"></path><path d="M1.15729 3.03336C0.227389 1.84071 1.07738 0.10199 2.58847 0.10199L23.1831 0.101989C24.9049 0.101989 25.6604 2.27539 24.3092 3.34332L17.8919 8.41661C17.6554 8.6038 17.4643 8.84211 17.333 9.11367C17.2018 9.38523 17.1337 9.68298 17.1339 9.98461L17.1339 18.2811C17.1339 20.0101 14.9448 20.762 13.8841 19.3962L1.15729 3.03336Z" fill="#f97316"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroContent