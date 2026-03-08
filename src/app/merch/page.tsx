import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/join/TabComponent'
import type { Metadata } from 'next'
export default function merch() {
    return (
        <div className="flex flex-col min-h-fit">
            <Banner word="merch"></Banner>
            <div className="w-full flex flex-col items-center px-2 md:px-32 lg:px-64">
            </div>    
            <div className="w-full flex flex-col items-center pt-10 py-10">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple py-20">Interested in DUEN merch?</p>
                picture
                <p className="font-bold text-2xl font-bold text-purple py-20">Click the link below!</p>
                link
            </div>
            
            
            
        </div>
    )
}