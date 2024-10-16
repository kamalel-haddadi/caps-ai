
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function CustomerFeedback() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center py-20">
                <div className="">
                    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative hidden lg:block overflow-hidden">
                                <div className="inline-flex gap-2 items-center font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-t border-b-0 border-x-0 border-foreground/20 bg-white/10 backdrop-blur-md text-foreground rounded-full py-1.5 text-sm px-3 cursor-pointer relative z-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#a8a29e" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    <span className="text-white">Our customer</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-6 text-white text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">Unlock the Right Plan for Your Business</h2>
                        <p className="max-w-lg mt-6 text-center text-neutral-500">Our pricing plans are designed to meet the needs of your business. Get started with our free plan and upgrade as you grow.</p>
                    </div>
                </div>
                {/* <h1 className="text-white text-5xl p-5 bg-orange-600 mt-10">animated customer slidee </h1> */}
                {/* animated customer slidee */}

                <Carousel className="mt-20 w-full max-w-4xl mx-auto">
                    <CarouselContent>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div
                                role="alert"
                                class="mx-auto cursor-pointer  select-none  max-w-lg border-stone  p-4 shadow-lg sm:p-6 lg:p-8 border-2 border-b-orange-600/40 border-x-orange-600/30 border-t-orange-600/20 rounded-2xl md:p-8 lg:rounded-3xl bg-[#040102] backdrop-blur-md overflow-hidden">
                                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-[#ea580c] top-0 inset-x-0"></div>
                                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-[#ea580c] bottom-0 inset-x-0"></div>
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 rounded-full bg-[#ea580c] p-2 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-[20px] w-[20px]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <div className="flex flex-col py-1">
                                        <p className="font-medium sm:text-sm text-white">kamal EL-HADDADI</p>
                                        <p className="font-normal text-[15px] text-[#ea580c]">Co-Founder</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-white font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore?

                                </p>
                            </div>

                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="text-white transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-ring active:ring-opacity-50 select-none bg-[#ea580c] hover:bg-[#ea5a0ce0] hover:text-white" />
                    <CarouselNext className="text-white transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-ring active:ring-opacity-50 select-none bg-[#ea580c] hover:bg-[#ea5a0ce0] hover:text-white" />
                </Carousel>

            </div>
        </>
    )
}
export default CustomerFeedback