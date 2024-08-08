import Input from "@src/components/common/Form/Input";
import classNames from 'classnames';
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const DeliveryBoyForm = () => {
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
                <div className="flex flex-1 flex-col gap-4">
                    <Input
                        label="Partner Name"
                        name="partnerName"
                        placeholder="Enter partner name"
                        {...register("partnerName", { required: "Partner Name is required" })}
                        error={errors.partnerName?.message}
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
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <label htmlFor="">Address</label>
                            <span className="rounded-full bg-red-500 w-2 h-2"></span>
                        </div>
                        <Input
                            name="address"
                            placeholder="Enter address"
                            {...register("address", { required: "Address is required" })}
                            error={errors.address?.message}
                            disabled={loading}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <label htmlFor="">Driving License Number</label>
                            <span className="rounded-full bg-red-500 w-2 h-2"></span>
                        </div>
                        <Input
                            name="drivingLicenseNumber"
                            placeholder="Enter driving license number"
                            {...register("drivingLicenseNumber", { required: "Driving License Number is required" })}
                            error={errors.drivingLicenseNumber?.message}
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <label htmlFor="">Pan Card Number</label>
                            <span className="rounded-full bg-red-500 w-2 h-2"></span>
                        </div>
                        <Input
                            name="panCardNumber"
                            placeholder="Enter pan card number"
                            {...register("panCardNumber", { required: "Pan Card Number is required" })}
                            error={errors.panCardNumber?.message}
                            disabled={loading}
                        />
                    </div>
                    <Input
                        label="WhatsApp Number"
                        name="whatsAppNumber"
                        placeholder="Enter WhatsApp number"
                        {...register("whatsAppNumber", { required: "WhatsApp Number is required" })}
                        error={errors.whatsAppNumber?.message}
                        disabled={loading}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <label htmlFor="">Adhaar Card Number</label>
                            <span className="rounded-full bg-red-500 w-2 h-2"></span>
                        </div>
                        <Input
                            name="adhaarCardNumber"
                            placeholder="Enter adhaar card number"
                            {...register("adhaarCardNumber", { required: "Adhaar Card Number is required" })}
                            error={errors.adhaarCardNumber?.message}
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className={classNames(
                            'bg-primary-500 text-white rounded-full text-xs py-3 w-36 self-center mt-8',
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

export default DeliveryBoyForm;
