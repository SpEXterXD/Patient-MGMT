import {DataTable} from '@/components/table/DataTable'
import { StatCard } from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {columns} from '@/components/table/columns'

const Admin = async () => {
    const appointments = await getRecentAppointmentList()

    return (
        <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
            <header className="admin-header">
                <Link href="/" className="cursor-pointer">
                    <Image 
                        src="/assets/icons/logo-full.svg"
                        height={32}
                        width={162}
                        alt="Logo"
                        className='h-8 w-fit'
                    />
                </Link>

                <p className="text-16-semibold">Admin Dashboard</p>
            </header>

            <main className='admin-main'>
                <section className='w-full space-y-4'>
                    <h1 className='header'>Welcome 👋</h1>
                    <p className="text-dark-700">Start the day with managing new appointments</p>
                </section>

                <section className="admin-stat">
                    <StatCard 
                        type="appointments"
                        count={appointments.scheduledCount}
                        lable="Scheduled Appointments"
                        icon="/assets/icons/appointments.svg"
                    />
                    <StatCard 
                        type="pending"
                        count={appointments.pendingCount}
                        lable="Pending Appointments"
                        icon="/assets/icons/pending.svg"
                    />
                    <StatCard
                        type="cancelled"
                        count={appointments.cancelledCount}
                        lable="Cancelled Appointments"
                        icon="/assets/icons/cancelled.svg"
                    />
                </section>

                <DataTable columns={columns} data={appointments.documents}/>
            </main>
        </div>
  )
}

export default Admin