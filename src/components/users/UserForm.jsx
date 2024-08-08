import Input from "@src/components/common/Form/Input";
import classNames from 'classnames'
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            // Simulate a network request
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Send data to the backend
            console.log(data);

            // Reset form fields
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <form className="flex gap-10 px-2 py-1" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-1 flex-col gap-3">
                    <Input
                        label="Homechef Name"
                        name="homechefName"
                        placeholder="Enter homechef name"
                        {...register("homechefName", { required: "Homechef Name is required" })}
                        error={errors.homechefName?.message}
                        disabled={loading}
                    />
                    <Input
                        label="Mobile Number"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        {...register("mobileNumber", { required: "Mobile Number is required" })}
                        error={errors.mobileNumber?.message}
                        disabled={loading}
                    />
                    <Input
                        label="Address"
                        name="address"
                        placeholder="Enter address"
                        {...register("address", { required: "Address is required" })}
                        error={errors.address?.message}
                        disabled={loading}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Input
                        label="POC Name"
                        name="pocName"
                        placeholder="Enter POC name"
                        {...register("pocName", { required: "POC Name is required" })}
                        error={errors.pocName?.message}
                        disabled={loading}
                    />
                    <Input
                        label="WhatsApp Number"
                        name="whatsAppNumber"
                        placeholder="Enter WhatsApp number"
                        {...register("whatsAppNumber", { required: "WhatsApp Number is required" })}
                        error={errors.whatsAppNumber?.message}
                        disabled={loading}
                    />
                    <Input
                        label="Google Location Link"
                        name="googleLocationLink"
                        placeholder="Enter Google location link"
                        {...register("googleLocationLink", { required: "Google Location Link is required" })}
                        error={errors.googleLocationLink?.message}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className={classNames(
                            'bg-primary-500 text-white rounded-full text-xs mt-2 py-3 w-36 self-end',
                            { 'opacity-50 cursor-not-allowed': loading }
                        )}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update"}
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default UserForm;
