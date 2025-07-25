import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'

interface StatCardProps {
    type: 'appointments' | 'pending' | 'cancelled';
    count: number;
    lable: string;
    icon: string;
}

export const StatCard = ({count = 0, lable, icon, type}: StatCardProps) => {
  return (
    <div className={clsx('stat-card', {
        'bg-appointments': type === 'appointments',
        'bg-pending': type === 'pending',
        'bg-cancelled': type === 'cancelled'
    })}>
        <div className='flex items-center gap-4'>
            <Image
                src={icon}
                height={32}
                width={32}
                alt={lable}
                className="size-8 w-fit"
            />
            <h2 className='text-32-bold text-white'>{count}</h2>
        </div>
        
        <p className='text-14-regular'>{lable}</p>
    </div>
  )
}
