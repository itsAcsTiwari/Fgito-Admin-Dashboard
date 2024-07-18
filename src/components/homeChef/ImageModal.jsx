import Image from 'next/image';
import { Fragment } from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
    if (!isOpen) return null;

    return (
        <Fragment>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center"
                    >
                        x
                    </button>
                    <Image
                        src={imageSrc}
                        alt={altText}
                        className="max-h-3/4 max-w-3/4 object-contain"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ImageModal;
