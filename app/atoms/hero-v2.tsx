export default function Hero2() {
    return (
        <section className="text-center text-white relative z-[2] mb-0">
            <div className="w-full h-[450px] sm:h-[550px] lg:h-[700px] xl:h-[800px] bg-gradient-to-b from-[#000000] to-[#00000061]  relative z-[1] overflow-hidden">
                <div className="relative z-[99] pt-[140px] sm:pt-[180px] md:pt-[200px] lg:pt-[180px] xl:pt-[200px]">
                    <h1 className="text-2xl sm:text-[2.5rem] lg:text-5xl xl:text-[3.5rem] mb-4 sm:mb-5 lg:mb-6 text-white">
                        Discover the  <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Soul of Indonesia</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-2xl xl:text-[1.75rem] mb-6 sm:mb-8 lg:mb-8 text-white px-4 sm:px-8 lg:px-16 xl:px-24">
                        Journey through 17,000 islands of rich culture, ancient
                        traditions, and vibrant heritage
                    </p>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dmx8hcmxh/image/upload/v1767078021/Candi_Borobudur_1200_wxnzmq.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center block -z-10" />
        </section>
    );
};


