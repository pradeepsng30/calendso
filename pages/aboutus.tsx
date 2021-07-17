import Head from 'next/head';
import Link from 'next/link';
import prisma from '../lib/prisma';
import ShellPublic from '../components/ShellPublic';
// import {getSession, useSession} from 'next-auth/client';
// import {CheckIcon, ClockIcon, InformationCircleIcon} from '@heroicons/react/outline';
import DonateBanner from '../components/DonateBanner';
// import { useState } from "react";
import Avatar from '../components/Avatar';
import { InferGetServerSidePropsType } from "next";

export default function AboutUs(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   
    return (
        <div>
            <Head>
                <title>PickMyMentor | About Us</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <ShellPublic heading="About Us" hideHeader="true" noLogin="true ">

                <div className="md:grid grid-cols-3 gap-8 mx-10p">


                        <div className="rounded-lg bg-white shadow col-span-2  px-5 py-6 ">
       
                                        <p className="text-xl text-gray-600">
                                            PickMyMentor is a movement to bridge that gap between the students and the professional world. The aim is to educate budding professionals so that they can make informed choices and create plans to achieve their goals.
                                        </p>
                                        <br/>
                                        <p className="text-xl text-gray-600">
                                            The recent situation has disproportionately affected summer internships and professional prospects for soon-to-be ready college graduates. There is a large gap in alumni interaction with current students and most of them find it difficult to find someone to guide them on their career choices. Having this thought in mind, PickMyMentor brings an opportunity to get insights on how to structure professional plans ahead and connect with Alumni.
                                         </p>
                                         <br/>
                                        <p className="text-xl text-gray-600">
                                            Bringing career hacks and wisdom from ‘Alumni’– to students, graduates, and upcoming professionals, we bring them closer by facilitating 1-1 mentorships sessions on various topics like -Jobs in a different sector, Higher studies within, and outside the country. We believe A mentor can help not only discuss ideas to improve focus but the mentorship itself can incite a certain drive in mentees to do better.                                         
                                        </p>
                        </div>
                        <div className="rounded-lg bg-white shadow col-span-1  px-5 py-6 items-center justify-center text-center">

                        <p className="text-2xl text-blue-700">
                            Write to us 
                        </p>
                        <a href="mailto:support@pickmymentor.in">support@pickmymentor.in</a>

                           <br/>
                           <br/>
  
                           {/* <p className="text-2xl text-blue-700">
                            Connect with us 
                        </p>              */}
                        <a href="#" className="fa fa-linkedin"></a>
                        <br/>
                        <a href="#" className="fa fa-instagram"></a>
                        <br/>
                        <a href="#" className="fa fa-youtube"></a>

                        </div>
                </div>


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