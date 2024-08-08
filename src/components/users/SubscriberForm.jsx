import Input from "@src/components/common/Form/Input";
import { InputTypes } from "@src/components/common/Form/InputTypes";
import classNames from 'classnames';
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const SubscriberForm = () => {
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
            <form className="flex gap-10 px-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-1 flex-col gap-4">
                    <Input
                        label="Subscriber Name"
                        name="subscriberName"
                        placeholder="Enter subscriber name"
                        {...register("subscriberName", { required: "Subscriber Name is required" })}
                        error={errors.subscriberName?.message}
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
                    <Input
                        label="Start Date"
                        name="startDate"
                        type={InputTypes.DATE}
                        {...register("startDate", { required: "Start Date is required" })}
                        error={errors.startDate?.message}
                        disabled={loading}
                    />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="homechef">Select Meals</label>
                        <select
                            {...register("homechef", { required: "Please select one of the option" })}
                            className="rounded-md text-sm border-gray-300"
                            id="homechef"
                        >
                            <option value="">Mother Cooks</option>
                        </select>
                        {errors.meals && <span className="text-red-500 text-xs px-2">{errors.meals.message}</span>}
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="meals">Select Meals</label>
                        <select
                            {...register("meals", { required: "Please select one of the option" })}
                            className="rounded-md text-sm border-gray-300"
                            id="meals"
                        >
                            <option value="">BF | L | D</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                        {errors.meals && <span className="text-red-500 text-xs px-2">{errors.meals.message}</span>}
                    </div>
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
                    <Input
                        label="End Date"
                        name="endDate"
                        type={InputTypes.DATE}
                        {...register("endDate", { required: "End Date is required" })}
                        error={errors.endDate?.message}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className={classNames(
                            'bg-primary-500 text-white rounded-full text-xs py-3 w-36 self-center mt-6',
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

export default SubscriberForm;
