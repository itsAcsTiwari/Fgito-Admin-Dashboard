import classNames from 'classnames';
import { forwardRef, Fragment } from 'react';

const FormField = forwardRef(
    (
        {
            label,
            name,
            placeholder,
            className,
            type = 'text',
            options,
            error,
            defaultValue,
            showRedDot = false,
            ...props
        },
        ref
    ) => {
        const renderInput = () => (
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={classNames('input input-bordered w-full max-w-xs', className, {
                    'border-red-500': error,
                })}
                ref={ref}
                {...props}
            />
        );

        const renderSelect = () => (
            <select
                id={name}
                name={name}
                className={classNames('select select-bordered w-full max-w-xs', className, {
                    'border-red-500': error,
                })}
                ref={ref}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );

        return (
            <Fragment>
                <div className="form-control w-full max-w-xs">
                    {/* Label Section */}
                    {label && (
                        <div className="label flex items-center justify-start gap-2">
                            <span className="label-text">{label}</span>
                            {showRedDot && <span className="rounded-full bg-red-500 w-2 h-2"></span>}
                        </div>
                    )}

                    {/* Input or Select Field */}
                    {type === 'select' ? renderSelect() : renderInput()}

                    {/* Error Message */}
                    {error && (
                        <span className="text-red-500 text-xs px-2 py-2">
                            {error}
                        </span>
                    )}
                </div>
            </Fragment>
        );
    }
);

FormField.displayName = 'FormField';

export default FormField;
