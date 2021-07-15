import Head from 'next/head';
import Link from 'next/link';
import prisma from '../lib/prisma';
import ShellPublic from '../components/ShellPublic';
// import {getSession, useSession} from 'next-auth/client';
// import {CheckIcon, ClockIcon, InformationCircleIcon} from '@heroicons/react/outline';
// import DonateBanner from '../components/DonateBanner';
// import { useState } from "react";
import Avatar from '../components/Avatar';
import { InferGetServerSidePropsType } from "next";

export default function Mentors(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   
    return (
        <div>
            <Head>
                <title>Mentorship</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ShellPublic heading="Mentors" hideHeader="true" noLogin="true">

                <div className="md:grid grid-cols-3 gap-8 mx-10p">

                {props.users.map((user, _id) => (
                                                    <div className="rounded-lg bg-white shadow p-2">
                                                        <Link href={user.username} >
                                                            <div className="">
                                                            <div className="rounded-full flex items-center justify-center ring-4 ring-white"> 
                                                                    <Avatar user={user} className="relative rounded-full w-40 h-40" />
                                                            </div>
                                                            <div className="min-w-0 text-center px-6 mt-4">
                                                                    <p className="text-xl text-gray-700">
                                                                        {user.name}
                                                                    </p>
                                                                    <p className="text-gray-500">
                                                                        {user.college} {user.passYear}
                                                                    </p>
                                                            </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                            ))}
                </div>

                {/* <DonateBanner /> */}

            </ShellPublic>
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
            where: { NOT: [{ username: null }], 
            userType: "MENTOR", 
        },
            select: {
                id: true,
                username: true,
                name:true,
                email:true,
                college: true,
                passYear:true,
                avatar:true
            },
            orderBy:{
                id:'asc'
            }
        });

    // }
    return {
        props: { users }, // will be passed to the page component as props
    }
}