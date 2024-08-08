import { Fragment } from "react"


const OrderHistory = () => {
    return (
        <Fragment>
            <div className="my-2 space-y-6">
                <div className="bg-grey w-full h-full px-6 py-2 rounded-md shadow-md font-light">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-lg font-semibold">Order No.1</span>
                            <span className="text-lg">|</span>
                            <span className="font-light">Lunch</span>
                        </div>

                        <div className="space-x-1">
                            <span>Invoice Number</span>
                            <span>:</span>
                            <span>XXXXXX</span>
                        </div>

                        <div className="flex justify-between">
                            <div className="space-x-1">
                                <span>Subscriber Name</span>
                                <span>:</span>
                                <span>Dharma</span>
                            </div>
                            <div className="space-x-1">
                                <span>Date</span>
                                <span>:</span>
                                <span>08/08/2024</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="space-x-1">
                                <span>Amount</span>
                                <span>:</span>
                                <span>Rs.1234.00</span>
                            </div>
                            <div className="text-primary-400 font-medium">
                                Completed
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-grey w-full h-full px-6 py-2 rounded-md shadow-md font-light">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-lg font-semibold">Order No.2</span>
                            <span className="text-lg">|</span>
                            <span className="font-light">Lunch</span>
                        </div>

                        <div className="space-x-1">
                            <span>Invoice Number</span>
                            <span>:</span>
                            <span>XXXXXX</span>
                        </div>

                        <div className="flex justify-between">
                            <div className="space-x-1">
                                <span>Subscriber Name</span>
                                <span>:</span>
                                <span>Dharma</span>
                            </div>
                            <div className="space-x-1">
                                <span>Date</span>
                                <span>:</span>
                                <span>08/08/2024</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="space-x-1">
                                <span>Amount</span>
                                <span>:</span>
                                <span>Rs.1234.00</span>
                            </div>
                            <div className="text-primary-400 font-medium">
                                Completed
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default OrderHistory
