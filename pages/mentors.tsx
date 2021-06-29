import Head from 'next/head';
import Link from 'next/link';
import prisma from '../lib/prisma';
import Shell from '../components/Shell';
// import {getSession, useSession} from 'next-auth/client';
// import {CheckIcon, ClockIcon, InformationCircleIcon} from '@heroicons/react/outline';
// import DonateBanner from '../components/DonateBanner';
// import { useState } from "react";
import Avatar from '../components/Avatar';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Mentors(props) {
   
    return (
        <div>
            <Head>
                <title>Mentorship</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Shell heading="Mentors" hideHeader="true">

                <div className="md:grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                            <div>
                                <div>
                                    <div className="flow-root">
                                        <ul className="-mb-8">
                                            {props.users.map((user, _id) => (
                                                    <div className="rounded-lg bg-white shadow">
                                                        <div className="mt-8 bg-white shadow overflow-hidden rounded-md space-x-1">
                                                        <Link href={user.username} >
                                                            <div className="relative flex pt-5 pb-2 px-6">
                                                            <span className="h-12 w-12 rounded-full flex items-center justify-center ring-4 ring-white"> 
                                                                    <Avatar user={user} />
                                                            </span>
                                                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 px-6">
                                                                <div>
                                                                    <p className="text-sm text-gray-500">
                                    
                                                                            <a className="font-medium text-gray-900">
                                                                                {user.name}
                                                                            </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                {/* <DonateBanner /> */}

            </Shell>
        </div>
    );
}

export async function getServerSideProps(context) {
    // const session = await getSession(context);

    let users = [];
    // let credentials = [];
    // let eventTypes = [];

    // if (session) {
        users = await prisma.user.findMany({
            where: { NOT: [{ username: null }] },
            select: {
                id: true,
                username: true,
                name:true,
                email:true
            }
        });

       console.log("PPP users", users);
    // }
    return {
        props: { users }, // will be passed to the page component as props
    }
}