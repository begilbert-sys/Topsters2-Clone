'use client';
import { Courier_Prime } from 'next/font/google'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import SideBar from '@/app/components/sidebar';

const courier_prime = Courier_Prime({subsets: ['latin'], weight: "400"});
export default function Home() {
    return (
        <div className={courier_prime.className}>
            <DndProvider backend={HTML5Backend}>
                <SideBar />
            </DndProvider>
        </div>
    );
}
