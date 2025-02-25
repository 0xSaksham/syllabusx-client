import Providers from '@/components/Providers';
import Scripts from '@/components/Scripts';
import { Toaster } from '@/components/ui/toaster';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'SyllabusX',
    description:
        'SyllabusX is a website that provides the syllabus and study materials for the B. Tech course offered by IPU',
    applicationName: 'SyllabusX',
    keywords: [
        'SyllabusX',
        'Syllabus',
        'IPU Syllabus',
        'IPU',
        'BTech',
        'BCA',
        'Notes',
        'PYQs',
        'Akash',
        'Practicals IPU',
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    openGraph: {
        title: 'SyllabusX',
        description:
            'SyllabusX is a website that provides the syllabus and study materials for the B. Tech course offered by IPU',
        url: 'https://syllabusx.live',
        siteName: 'SyllabusX',
        images: [
            {
                url: 'https://i.postimg.cc/TKX5Pp3g/Syllabus-X.png',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        title: 'SyllabusX',
        description:
            'SyllabusX is a website that provides the syllabus and study materials for the B. Tech course offered by IPU',
        images: [
            {
                url: 'https://i.postimg.cc/TKX5Pp3g/Syllabus-X.png',
            },
        ],
        app: {
            name: 'SyllabusX',
            id: {
                ipad: '',
                iphone: '',
                googleplay: '',
            },
            url: {
                ipad: 'https://syllabusx.live',
                iphone: 'https://syllabusx.live',
            },
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Scripts />
            <body>
                <Providers>
                    {children}
                    <Analytics />
                    <ReactQueryDevtools />
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}
