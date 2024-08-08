import { Fragment } from "react"


const CurrentOrder = () => {
    return (
        <Fragment>
            <div className="bg-grey w-full h-full px-8 py-6 my-2  rounded-md shadow-md">

                <div className="text-lg space-x-1 mb-4">
                    <span className="font-semibold">Order No.10</span>
                    <span>|</span>
                    <span className=" font-light">Lunch</span>
                </div>

                <div className="flex gap-10">
                    <div className=" flex flex-col flex-1 space-y-4 font-light">

                        <div>Invoice Number <span>:</span> <span>XXXXXX</span></div>
                        <div>Subscriber Name <span>:</span> <span>Dharma</span> </div>
                        <div>Subscriber Address <span>:</span> <span>Noida</span> </div>
                        <div>Delivery Partner <span>:</span> <span>ABCD</span> </div>
                        <div>Amount <span>:</span> <span>Rs.1234.00</span></div>
                        <div>Total Distance Covered<span>:</span> <span>15 km</span> </div>
                    </div>

                    <div className="flex flex-col flex-1 space-y-4 font-light">
                        <div>Homechef Name <span>:</span> <span>Dharma</span></div>
                        <div>Homechef Address <span>:</span> <span>Dharma</span> </div>
                        <div>Pick up time <span>:</span> <span>20/08/2024</span> </div>
                        <div>Delivery Time <span>:</span> <span>02:00 pm</span> </div>
                        <div>Date<span>:</span> <span>20/08/2024</span> </div>
                        <div className="text-secondary-500 font-light">Out For Delivery</div>

                    </div>

                </div>
            </div>
        </Fragment >
    )
}

export default CurrentOrder
