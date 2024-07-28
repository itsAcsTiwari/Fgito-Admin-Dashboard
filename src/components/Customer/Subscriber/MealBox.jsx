import { Pen, Submit } from '@src/core/icons'
import Image from 'next/image';
import { Fragment, useState } from 'react';

const MealBox = ({ meal, image }) => {
    const [isLoading, setIsLoading] = useState({
        homechef: false,
        deliveryBoy: false,
        submit: false,
    });

    const handleButtonClick = (buttonType) => {
        setIsLoading((prevState) => ({
            ...prevState,
            [buttonType]: true,
        }));

        // API call
        setTimeout(() => {
            setIsLoading((prevState) => ({
                ...prevState,
                [buttonType]: false,
            }));
        }, 2000);
    };

    return (
        <Fragment>
            <div className="flex flex-row items-center justify-around rounded-md border border-primary-500 py-3 lg:text-xs xl:text-sm">
                <span className="lg:rotate-90 transform uppercase 2xl:rotate-0">{meal}</span>
                <Image
                    src={image}
                    alt='icon'
                    className='lg:w-12 lg:h-12 xl:w-20 xl:h-16 2xl:w-24 h-20 rounded-md'
                />
                <div className="mx-4 flex items-center space-x-2 rounded-md border border-primary-500 px-4 py-2">
                    <div className="flex flex-row items-center gap-2 rounded-full bg-primary-500 px-4 py-2 hover:bg-primary-600 transition duration-200">
                        <Pen />
                        <button
                            className="text-white"
                            onClick={() => handleButtonClick('homechef')}
                            disabled={isLoading.homechef}
                        >
                            {isLoading.homechef ? 'Loading...' : 'Select Homechef'}
                        </button>
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full bg-primary-500 px-4 py-2 hover:bg-primary-600 transition duration-200">
                        <Pen />
                        <button
                            className="text-white"
                            onClick={() => handleButtonClick('deliveryBoy')}
                            disabled={isLoading.deliveryBoy}
                        >
                            {isLoading.deliveryBoy ? 'Loading...' : 'Select Delivery Boy'}
                        </button>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-700">
                        <button
                            className='text-white'
                            onClick={() => handleButtonClick('submit')}
                            disabled={isLoading.submit}
                        >
                            {isLoading.submit ? '...' : <Submit />}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MealBox;
