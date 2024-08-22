import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FormField from "../common/Form/FormField";

const DeliveryBoyModal = ({ onClose }) => {
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
                <h3 className="font-bold text-lg">Create New Delivery Partner</h3>

                <form className="flex gap-10 px-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-1 flex-col gap-4">
                        <FormField
                            label="Partner Name"
                            name="partnerName"
                            placeholder="Enter partner name"
                            {...register("partnerName", { required: "Partner Name is required" })}
                            error={errors.partnerName?.message}
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
                            showRedDot={true}
                            {...register("address", { required: "Address is required" })}
                            error={errors.address?.message}
                            disabled={loading}
                        />

                        <FormField
                            label="Driving License Number"
                            name="drivingLicenseNumber"
                            placeholder="Enter driving license number"
                            showRedDot={true}
                            {...register("drivingLicenseNumber", { required: "Driving License Number is required" })}
                            error={errors.drivingLicenseNumber?.message}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex flex-1 mt-2 flex-col gap-4">
                        <FormField
                            label="Pan Card Number"
                            name="panCardNumber"
                            placeholder="Enter pan card number"
                            showRedDot={true}
                            {...register("panCardNumber", { required: "Pan Card Number is required" })}
                            error={errors.panCardNumber?.message}
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
                            label="Adhaar Card Number"
                            name="adhaarCardNumber"
                            placeholder="Enter adhaar card number"
                            showRedDot={true}
                            {...register("adhaarCardNumber", { required: "Adhaar Card Number is required" })}
                            error={errors.adhaarCardNumber?.message}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className={classNames(
                                'bg-primary-500 text-white rounded-full text-xs py-3 w-36 self-center mt-8  hover:bg-primary-600 duration-200',
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

export default DeliveryBoyModal;
