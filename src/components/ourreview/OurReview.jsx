import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const OurReview = ({ content }) => {
    const { bgColor, foldBg, subtitle, title, paragraphs, showSubtitle, textColor } = content;
    return (
        <>
            <section className={`${bgColor} h-full flex items-center py-12 lg:py-20 relative z-10 overflow-hidden`}>
                <Image src={foldBg} alt="ORM" fill={true} className="hidden xl:block -z-10 object-fill object-right" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center xl:gap-10">
                        <div className="col-span-12 xl:col-span-6 xl:mr-10">
                            {showSubtitle && (
                                <p className="text-[25px] leading-normal font-semibold font-poppins">{subtitle}</p>
                            )}
                            <h2 className={`text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins ${textColor} text-center md:text-left mb-3 xl:mb-5`}>{title}</h2>
                            {paragraphs.map((para, index) => (
                                <p key={index} className={`text-[16px] tracking-wide leading-loose font-poppins ${textColor} mb-5`}>{para}</p>
                            ))}
                            <div className="flex items-center gap-6 lg:gap-10">
                                <CTA
                                    text="Book Consultation"
                                    href="tel:123456789"
                                />
                                <CTA
                                    text="Watch Demo"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 hidden xl:block"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default OurReview;