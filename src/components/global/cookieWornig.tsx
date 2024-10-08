import { useEffect, useState } from "react";

const CookieWrnig = () => {
    const [showCookieWrnig, setShowCookieWrnig] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowCookieWrnig(true), 3000);
    }, []);

    return (
        <div className={showCookieWrnig ? 'visible' : 'invisible'}>
            <section className="fixed bottom-0 w-full bg-gray-50">
                <div className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
                    <p className="text-gray-600 ">By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.</p>

                    <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
                        <button className="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto focus:outline-none">
                            Cookie Setting
                        </button>

                        <button onClick={() => setShowCookieWrnig(false)} className=" text-sm w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                            Accept All Cookies
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookieWrnig;