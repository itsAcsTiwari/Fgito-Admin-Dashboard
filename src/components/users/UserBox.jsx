import UsersData from '@src/components/data/placeholderData.json';
import { User } from '@src/core/icons';
import classNames from 'classnames';
import { Fragment } from 'react';

const UserBox = ({ onClick, selectedId }) => {
    const usersData = UsersData.users;

    const handleClick = (users) => {
        onClick(users);
    };

    return (
        <Fragment>
            {usersData.map(users => (
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
                        <div className='flex flex-row gap-1'>
                            <span>{users.id}</span>
                            <span>|</span>
                            <span>
                                {users.type === "Homechef" ? users.POC_Name : users.type === "Subscriber" ? users.mealsPerDay : ""}
                            </span>
                        </div>
                    </div>
                </div>
            ))
            }
        </Fragment >
    );
};

export default UserBox;
