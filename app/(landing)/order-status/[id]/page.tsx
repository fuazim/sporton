"use client"

import Submitted from "../../components/order-status/submitted";
import Confirm from "../../components/order-status/confirm";
import Rejected from "../../components/order-status/rejected";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Transaction } from "@/app/types";
import { getTransactionById } from "@/app/services/transaction.service";

export default function OrderStatus() {
    const { id } = useParams();
    const [transaction, setTransaction] = useState<Transaction | null>(null);

    useEffect(() => {
        const fetchTransaction = async () => {
            const data = await getTransactionById(id as string);
            setTransaction(data);
        };
        fetchTransaction();
    }, [id]);

    if (!transaction) return <div>Loading...</div>;
    return (
        <main className='bg-gray-100 min-h-[80vh] py-10'>
            <div className='max-w-5xl mx-auto py-10 flex flex-col gap-10'>
                <h1 className='font-bold text-black text-5xl text-center'>Order Status</h1>
                <div className='flex justify-center items-center'>
                    {transaction.status === "paid" && <Confirm />}
                    {transaction.status === "rejected" && <Rejected />}
                    {transaction.status === "pending" && <Submitted />}
                </div>
            </div>
        </main>
    )
}
