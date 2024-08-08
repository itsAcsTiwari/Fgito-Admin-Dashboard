import { User } from '@src/core/icons';
import classNames from 'classnames';
import { Fragment } from 'react';
import PartnerData from 'src/components/data/placeholderData.json'

const PartnerBox = ({ onClick, selectedId }) => {
    const partnersData = PartnerData.users.filter(user => user.type === "Delivery Partner");

    const handleClick = (users) => {
        onClick(users);
    };

    return (
        <Fragment>
            {partnersData.map(users => (
                <div
                    key={users.id}
                    className={classNames(
                        'flex flex-row border rounded-md py-2 mb-3 hover:cursor-pointer',
                        {
                            'border-2 border-primary-500': selectedId === users.id,
                            'border-black': selectedId !== users.id,
                        }
                    )}
                    onClick={() => handleClick(users)}
                >
                    <div className='px-2'><User /></div>
                    <div className='text-sm space-y-1 font-light w-full px-2'>

                        <span className='font-semibold'>{users.name}</span>

                        <div className='flex flex-row gap-2'>
                            <span>{users.type}</span>
                            <span>|</span>
                            <span>{users.contact_number}</span>
                        </div>
                        <div className='flex'>
                            <span>{users.id}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </Fragment >
    );
};

export default PartnerBox;
