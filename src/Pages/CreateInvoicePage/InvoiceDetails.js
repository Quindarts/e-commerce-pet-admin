import React from 'react'
import Button from '../../../src/Components/ui/Button/Button.js'
import { APP_ICON } from '../../Utils/Constants.js'
import { Icon } from '@iconify/react'
import Avatar from '../../Components/ui/Avatar/Avatar.js'

const InvoiceDetails = () => {
    return (
        <div>
            <div className="py-6">
                <div className="mx-auto my-0 w-3/4 rounded-lg bg-white p-8 max-md:w-full">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="text-lg font-semibold text-[#121f43]">Invoice Info</div>
                        <div>
                            <Button size="lg" color="grey" icon variant="outline">
                                <Icon icon={APP_ICON.i_pen} />
                            </Button>
                        </div>
                    </div>
                    <div className="grid auto-rows-auto grid-cols-3 max-md:grid-cols-2">
                        <div>
                            <div className="text-[13px] font-semibold text-[#5F748D]">Order Number</div>
                            <div className="text-base font-medium text-[#121f43]">#46876458</div>
                        </div>
                        <div>
                            <div className="text-[13px] font-semibold text-[#5F748D]">Order Date</div>
                            <div className="text-base font-medium text-[#121f43]">02.12.2021</div>
                        </div>
                        <hr className="col-start-1 col-end-4 my-6 border-t border-[#D3E6F3]" />
                        <div className="col-start-1 col-end-2">
                            <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Bill To</div>
                            <div className="text-base font-semibold text-[#121f43]">Jhone Hanks</div>
                            <div className="text-[13px] font-medium text-[#121f43]">Arizona, USA</div>
                            <div className="text-[13px] font-medium text-[#121f43]">+003344422</div>
                        </div>
                        <div className="col-start-2 col-end-3">
                            <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Bill From</div>
                            <div className="text-base font-semibold text-[#121f43]">UI lib</div>
                            <div className="text-[13px] font-medium text-[#121f43]">Zindabazar, Sylhet</div>
                            <div className="text-[13px] font-medium text-[#121f43]">+013145813</div>
                        </div>
                        <hr className="col-start-1 col-end-4 my-6 border-t border-[#D3E6F3]" />
                        <div className="col-start-1 col-end-2">
                            <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Client</div>
                            <div className="flex">
                                <Avatar
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                    size="md"
                                    badge={{
                                        status: 'online',
                                        color: 'green',
                                        position: 'top-left',
                                        animation: 'blink-badge',
                                    }}
                                    className="mr-1"
                                />
                                <div>
                                    <div className="text-[13px] font-semibold text-[#121f43]">Jhone Hanks</div>
                                    <div className="text-[13px] font-medium text-[#5F748D]">UI Designer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-2 col-end-3">
                            <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Item Name</div>
                            <div className="text-[13px] font-medium text-[#121f43]">UI Lib Uko</div>
                        </div>
                        <div className="col-start-3 col-end-4 max-md:col-start-1 max-md:col-end-3">
                            <div className="grid auto-rows-auto grid-cols-2 max-md:pt-4">
                                <div>
                                    <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Price</div>
                                    <div className="text-[13px] font-medium text-[#121f43]">$450</div>
                                </div>
                                <div>
                                    <div className="mb-3 text-[13px] font-semibold text-[#5F748D]">Quantity</div>
                                    <div className="text-[13px] font-medium text-[#121f43]">2</div>
                                </div>
                            </div>
                        </div>
                        <hr className="col-start-1 col-end-4 my-6 border-t border-[#D3E6F3]" />
                        <div className="col-start-1 col-end-2 min-w-[200px]">
                            <div className="text-base font-semibold text-[#121f43]">Amount</div>
                            <div className="my-2 flex justify-between text-[13px] font-medium text-[#121f43]">
                                <div>Subtotal</div>
                                <div>$428.00</div>
                            </div>
                            <div className="mb-2 flex justify-between text-[13px] font-medium text-[#121f43]">
                                <div className="whitespace-pre-wrap">
                                    Discount
                                    <span className="text-sm text-[#5F748D]">(BLACKFRIDAY)</span>
                                </div>
                                <div>-$8.00</div>
                            </div>
                            <div className="flex justify-between text-[13px] font-medium text-[#121f43]">
                                <div>VAT</div>
                                <div>$20.00</div>
                            </div>
                            <hr className="my-4 border-t border-[#D3E6F3]" />
                            <div className="flex justify-between text-[13px] font-semibold text-[#121f43]">
                                <div>Total</div>
                                <div>$20.00</div>
                            </div>
                            <div className="mt-2 flex justify-between text-[13px] font-semibold text-[#121f43]">
                                <div>Status</div>
                                <div>Unpaid</div>
                            </div>
                            <div className="mt-8 flex justify-start">
                                <div className="mr-4">
                                    <Button
                                        className="whitespace-nowrap font-semibold text-[#121f43]"
                                        size="sm"
                                        variant="outline"
                                        color="primary"
                                    >
                                        Print Invoice
                                    </Button>
                                </div>
                                <div>
                                    <Button className="font-semibold" size="sm" color="primary">
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails
