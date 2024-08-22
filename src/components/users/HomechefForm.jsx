import FormField from "@src/components/common/Form/FormField";
import classNames from 'classnames';
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const HomeChefForm = () => {
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

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <Fragment>
            <form className="flex gap-10 px-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-1 flex-col gap-3">
                    <FormField
                        label="Homechef Name"
                        name="homechefName"
                        placeholder="Enter homechef name"
                        error={errors.homechefName?.message}
                        disabled={loading}
                        {...register("homechefName", { required: "Homechef Name is required" })}
                    />
                    <FormField
                        label="Mobile Number"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        error={errors.mobileNumber?.message}
                        disabled={loading}
                        {...register("mobileNumber", { required: "Mobile Number is required" })}
                    />
                    <FormField
                        label="Address"
                        name="address"
                        placeholder="Enter address"
                        error={errors.address?.message}
                        disabled={loading}
                        {...register("address", { required: "Address is required" })}
                    />

                    <div className="flex flex-col gap-2">
                        <label>FSAI Exist</label>
                        <div
                            className={`h-6 w-12 rounded-full relative border flex items-center cursor-pointer py-2 transition-colors duration-300 ${isToggled ? 'bg-primary-500 border-primary-500' : 'bg-grey-300'
                                }`}
                            onClick={handleToggle}
                        >
                            <span
                                className={`w-5 h-5 rounded-full absolute transition-transform duration-300 shadow-md ${isToggled ? 'bg-white right-0.5' : 'bg-white left-0.5'
                                    }`}
                            ></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <FormField
                        label="POC Name"
                        name="pocName"
                        placeholder="Enter POC name"
                        error={errors.pocName?.message}
                        disabled={loading}
                        {...register("pocName", { required: "POC Name is required" })}
                    />
                    <FormField
                        label="WhatsApp Number"
                        name="whatsAppNumber"
                        placeholder="Enter WhatsApp number"
                        error={errors.whatsAppNumber?.message}
                        disabled={loading}
                        {...register("whatsAppNumber", { required: "WhatsApp Number is required" })}
                    />
                    <FormField
                        label="Google Location Link"
                        name="googleLocationLink"
                        placeholder="Enter Google location link"
                        error={errors.googleLocationLink?.message}
                        disabled={loading}
                        {...register("googleLocationLink", { required: "Google Location Link is required" })}
                    />
                    {isToggled && (
                        <FormField
                            label="FSAI Number"
                            name="FSAINumber"
                            placeholder="Enter your FSAI Number"
                            error={errors.FSAINumber?.message}
                            disabled={loading}
                            {...register("FSAINumber", { required: "FSAI Number is required" })}
                        />
                    )}
                    <button
                        type="submit"
                        className={classNames(
                            'bg-primary-500 text-white rounded-full text-xs mt-2 py-3 w-36 self-end hover:bg-primary-600 duration-200',
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

export default HomeChefForm;
