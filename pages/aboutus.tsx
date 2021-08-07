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
            <meta name="description" 
            content="movement to bridge the gap between the students and the professional world. Founder - Jai Bansal">
            </meta>   
                <title>PickMyMentor | About Us</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <ShellPublic heading="About Us" hideHeader="true" noLogin="true ">

                <div className="md:grid grid-cols-3 gap-8 mx-10p">


                        <div className="rounded-lg bg-white shadow col-span-2  px-5 py-6 ">
       
                                        <p className="text-xl text-gray-600">
                                            PickMyMentor is a movement to bridge the gap between the students and the professional world. The aim is to educate budding professionals so that they can make informed choices and create plans to achieve their goals.
                                        </p>
                                        <br/>
                                        <p className="text-xl text-gray-600">
                                            The recent situation has disproportionately affected summer internships and professional prospects for soon-to-be ready college graduates. There is a large gap in alumni interaction with current students and most of them find it difficult to find someone to guide them on their career choices. Having this thought in mind, PickMyMentor brings an opportunity to get insights on how to structure professional plans ahead and connect with Alumni.
                                         </p>
                                         <br/>
                                        <p className="text-xl text-gray-600">
                                        PickMyMentor aims to build a bond of trust with the students and their families by providing good advice that students can act on. Emotional support and handholding apart, the team also gives students guidance on skills such as independence and housekeeping, to be able to cope with the different social cultures outside of school                                     
                                        </p>
                                        <br/>
                                        <p className="text-xl text-gray-600">
                                            <b>
                                            What was the need?
                                             </b>
                                        </p>
                                        <p className="text-xl text-gray-600">
                                        College equips a student with necessary professional skills to adapt to a variety of professions one may choose to pursue, but often it is equally important to have concurrent awareness of the latest market trends and skill set enhancement which is possible only with a strong student- alumni connect, something which is often neglected
                                        </p>

                                        <br/>

                                        <p className="text-xl text-gray-600">
                                            <b>
                                            How did we discover? 
                                             </b>
                                        </p>
                                        <p className="text-xl text-gray-600">
                                            <ul>
                                            <li>When we started working and taking interviews to hire people , we realised most students were theoretically sound with their concepts but didn’t know how to apply them to current situations.</li>
                                            <li>Some Reputed Engineering  and Business Schools had painstakingly developed a strong alum-student connect which helped young graduates grow both professionally and personally</li>
                                            </ul>
                                        </p>
                                        <br/>

                                        <p className="text-xl text-gray-600">
                                            <b>
                                            What do we offer?
                                             </b>
                                        </p>
                                        <p className="text-xl text-gray-600">
                                        We provide one on one mentorship program having panel of mentors from a range of professional domains
                                        </p>





                         </div>
                        <div className="rounded-lg bg-white shadow col-span-1  px-5 py-6 justify-center text-center">
                            <p className="text-2xl text-blue-700">
                                Our people
                            </p>
                            <br/>
                            <Link href="https://www.linkedin.com/in/jai-bansal-056589102/" >
                                                            <div className="">
                                                            <div className="rounded-full flex items-center justify-center ring-4 ring-white"> 
                                                                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFF2_zDXuW73g/profile-displayphoto-shrink_400_400/0/1517042262365?e=1633564800&v=beta&t=Gmo0AvxiX9Ucua5kW1GKnqxllIivPzQUCpfSeCVqgHs"
                                                                     className="relative rounded-full w-30 h-30" />
                                                            </div>
                                                            <div className="min-w-0 text-center px-6 mt-4">
                                                                    <p className="text-xl text-gray-700">
                                                                        Jai Bansal
                                                                    </p>
                                                        
                                                                    <p className="text-gray-500">
                                                                        Founder
                                                                    </p>
                                                                    {/* <p className="text-gray-500">
                                                                    </p> */}
                                                            </div>
                                                            </div>
                                                        </Link>
                                                        <br/>
                                                        <br/>
                                                        <Link href="https://www.linkedin.com/in/mahesh-yogi-58251a91/" >
                                                            <div className="">
                                                            <div className="rounded-full flex items-center justify-center ring-4 ring-white"> 
                                                                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQH7bhUOF5hk-A/profile-displayphoto-shrink_200_200/0/1577101183801?e=1633564800&v=beta&t=MkAAqyCnphplBWFtoTfi3R_jaSCsi7twXh18qrxpoT0"
                                                                     className="relative rounded-full w-30 h-30" />
                                                            </div>
                                                            <div className="min-w-0 text-center px-6 mt-4">
                                                                    <p className="text-xl text-gray-700">
                                                                       Mahesh Yogi
                                                                    </p>
                                                        
                                                                    <p className="text-gray-500">
                                                                        Co-Founder
                                                                    </p>
                                        
                                                            </div>
                                                            </div>
                                                        </Link>
                                                        <br/>
                                                        <Link href="https://www.linkedin.com/in/pradeepsng30/" >
                                                            <div className="">
                                                            <div className="rounded-full flex items-center justify-center ring-4 ring-white"> 
                                                                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQHBlfufuz1mSg/profile-displayphoto-shrink_400_400/0/1521040737592?e=1633564800&v=beta&t=TiMQ4VjS43P5qM7S2e1crN6j9mr2eGkw14wdRz2B1YA"
                                                                     className="relative rounded-full w-30 h-30" />
                                                            </div>
                                                            <div className="min-w-0 text-center px-6 mt-4">
                                                                    <p className="text-xl text-gray-700">
                                                                        Pradeep Singh
                                                                    </p>
                                                                    <p className="text-gray-500">
                                                                        Co-Founder
                                                                    </p>
                                                            </div>
                                                            </div>
                                                        </Link>
                         </div>
                        <div className="rounded-lg bg-white shadow col-span-2  px-5 py-6 items-center justify-center text-center">

                        <p className="text-2xl text-blue-700">
                            Write to us 
                        </p>
                        <a target="_blank" href="mailto:support@pickmymentor.in">support@pickmymentor.in</a>

                           <br/>
                           <br/>
  
                           {/* <p className="text-2xl text-blue-700">
                            Connect with us 
                        </p>              */}
                        <a target="_blank" href="https://www.linkedin.com/company/pickmymentor/" className="fa fa-linkedin"></a>
                        <a target="_blank" href="https://www.instagram.com/pickmymentor/" className="fa fa-instagram"></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCWEjRZbv44ucNBN-s2Iyprw" className="fa fa-youtube"></a>
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