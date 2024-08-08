import classNames from 'classnames';
import React, { Fragment } from 'react';

import { InputTypes } from './InputTypes';

const Input = React.forwardRef(
    (
        {
            label,
            name,
            type = InputTypes.TEXT,
            placeholder,
            className,
            error,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <Fragment>
                <div className="flex flex-col gap-2">
                    {label && (
                        <label htmlFor={name} className="flex items-center gap-2">
                            {label}
                        </label>
                    )}
                    <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={classNames(
                            'rounded-md border-gray-300 text-sm',
                            className,
                            { 'border-gray-300': error }
                        )}
                        ref={ref}
                        disabled={disabled}
                        {...props}
                    />
                    {error && <span className="text-red-500 text-xs px-2">{error}</span>}
                </div>
            </Fragment>
        );
    }
);

Input.displayName = 'Input';

export default Input;
