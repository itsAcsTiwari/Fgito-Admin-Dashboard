import SubscribersData from '@src/components/data/placeholderData.json';
import { User } from '@src/core/icons';
import classNames from 'classnames';
import { Fragment } from 'react';

const Userbox = ({ onClick, selectedId }) => {
    const subscribersData = SubscribersData.subscribers;

    const userBoxClass = (id) => classNames(
        'flex flex-row border rounded-md py-2 lg:mb-6 xl:mb-3 hover:cursor-pointer',
        {
            'border-2 border-primary-500': selectedId === id,
            'border-black': selectedId !== id,
        }
    );

    const statusClass = (status) => classNames(
        'text-xs font-normal',
        {
            'text-primary-500': status === 'Active',
            'text-red-500': status !== 'Active'
        }
    );

    const handleClick = (subscriber) => {
        onClick(subscriber);
    };

    return (
        <Fragment>
            {subscribersData.map(subscriber => (
                <div
                    key={subscriber.id}
                    className={userBoxClass(subscriber.id)}
                    onClick={() => handleClick(subscriber)}
                >
                    <div className='px-2'><User /></div>
                    <div className='lg:text-xs xl:text-sm space-y-1 font-light w-full px-2'>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='font-semibold'>{subscriber.name}</span>
                            <span className={statusClass(subscriber.isSubscribed)}>
                                {subscriber.isSubscribed}
                            </span>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <span>{subscriber.subscription_details.subscription_type}</span>
                            <span>|</span>
                            <span>BF . L . D</span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span>{subscriber.id}</span>
                            <span>|</span>
                            <span>Total: {subscriber.total_order}</span>
                            <span>|</span>
                            <span>Cooking</span>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default Userbox;
