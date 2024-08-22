import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FormField from "../common/Form/FormField";
import { InputTypes } from "../common/Form/InputTypes";

const SubscriberModal = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();  // Add this line
    const [loading, setLoading] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            // Simulate a network request
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Send data to the backend
            console.log(data);

            // Reset form fields if necessary
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <dialog open className="modal">
            <div className="modal-box scrollbar-hide w-1/2 max-w-none">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <h3 className="font-bold text-lg">Create New Subscriber</h3>

                <form className="flex gap-10 px-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-1 flex-col gap-4">
                        <FormField
                            label="Subscriber Name"
                            name="subscriberName"
                            placeholder="Enter subscriber name"
                            {...register("subscriberName", { required: "Subscriber Name is required" })}
                            error={errors.subscriberName?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="Mobile Number"
                            name="mobileNumber"
                            placeholder="Enter mobile number"
                            {...register("mobileNumber", { required: "Mobile Number is required" })}
                            error={errors.mobileNumber?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="Address"
                            name="address"
                            placeholder="Enter address"
                            {...register("address", { required: "Address is required" })}
                            error={errors.address?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="Start Date"
                            name="startDate"
                            type={InputTypes.DATE}
                            {...register("startDate", { required: "Start Date is required" })}
                            error={errors.startDate?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="Select Meals"
                            name="homechef"
                            type="select"
                            options={[
                                { value: "", label: "Mother Cooks" },
                                { value: "meal1", label: "Meal 1" },
                                { value: "meal2", label: "Meal 2" }
                            ]}
                            {...register("homechef", { required: "Please select one of the options" })}
                            error={errors.homechef?.message}
                            disabled={loading}
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                        <FormField
                            label="Select Meals"
                            name="meals"
                            type="select"
                            options={[
                                { value: "", label: "BF | L | D" },
                                { value: "breakfast", label: "Breakfast" },
                                { value: "lunch", label: "Lunch" },
                                { value: "dinner", label: "Dinner" }
                            ]}
                            {...register("meals", { required: "Please select one of the options" })}
                            error={errors.meals?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="WhatsApp Number"
                            name="whatsAppNumber"
                            placeholder="Enter WhatsApp number"
                            {...register("whatsAppNumber", { required: "WhatsApp Number is required" })}
                            error={errors.whatsAppNumber?.message}
                            disabled={loading}
                        />
                        <FormField
                            label="Google Location Link"
                            name="googleLocationLink"
                            placeholder="Enter Google location link"
                            {...register("googleLocationLink", { required: "Google Location Link is required" })}
                            error={errors.googleLocationLink?.message}
                            disabled={loading}
                        />
                        <FormField
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
                                'bg-primary-500 text-white rounded-full text-xs py-3 w-36 self-center mt-10  hover:bg-primary-600 duration-200',
                                { 'opacity-50 cursor-not-allowed': loading }
                            )}
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default SubscriberModal;
