
import Image from 'next/image';
import Breakfast from 'public/hc_breakfast.jpg';
import Dinner from 'public/hc_dinner.jpg';
import Lunch from 'public/hc_lunch.jpg';
import { useState } from 'react';

import ImageModal from './ImageModal';


const MenuBox = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState({
        breakfast: false,
        lunch: false,
        dinner: false,
    });

    const openModal = (image, alt) => {
        setSelectedImage({ src: image, alt });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const handleUpload = async (mealType) => {
        setLoading(prev => ({ ...prev, [mealType]: true }));
        // upload process
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(prev => ({ ...prev, [mealType]: false }));
    };

    const menuItems = [
        { src: Breakfast, alt: 'breakfast icon', buttonText: 'Upload B-Fast', mealType: 'breakfast' },
        { src: Lunch, alt: 'lunch icon', buttonText: 'Upload Lunch', mealType: 'lunch' },
        { src: Dinner, alt: 'dinner icon', buttonText: 'Upload Dinner', mealType: 'dinner' },
    ];

    return (
        <>
            <h2 className='text-center text-3xl font-semibold'>Upload Menu</h2>
            <div className='grid grid-cols-3 gap-6'>
                {menuItems.map((item, index) => (
                    <div key={index} className='rounded-md border border-black space-y-4 pb-4 overflow-hidden'>
                        <div
                            className='cursor-pointer'
                            onClick={() => openModal(item.src, item.alt)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                className='lg:h-48 xl:h-56 w-full object-cover hover:scale-105 transition duration-300'
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button
                                className='bg-primary-500 text-white lg:px-4 xl:px-6 py-3 rounded-full hover:bg-primary-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                                onClick={() => handleUpload(item.mealType)}
                                disabled={loading[item.mealType]}
                            >
                                {loading[item.mealType] ? 'Uploading...' : item.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ImageModal
                isOpen={modalOpen}
                onClose={closeModal}
                imageSrc={selectedImage?.src}
                altText={selectedImage?.alt}
            />
        </>
    );
};

export default MenuBox;
