import { SearchTickets } from '@/components/search';
import { TicketsCards } from '@/components/tickets-cards';
import { TicketsCreate } from '@/components/tickets-create';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tickets',
        href: '/ticket',
    },
];

export default function Tickets() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tickets"/>
            <div className="flex gap-4 rounded-xl p-4 grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
                <div className="flex gap-3 w-full">
                    <SearchTickets />
                    <TicketsCreate />
                </div>
            </div>

            <div className="flex gap-4 rounded-xl p-4">
                <TicketsCards />
            </div>
        </AppLayout>
    );
}
