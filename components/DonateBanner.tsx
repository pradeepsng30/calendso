// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 //
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIDqQ5lQQYZd8vw22PcebycblwfaHGoxU",
  authDomain: "pickmymentor.firebaseapp.com",
  projectId: "pickmymentor",
  storageBucket: "pickmymentor.appspot.com",
  messagingSenderId: "511338852678",
  appId: "1:511338852678:web:58ccc68a6c0584470bb547",
  measurementId: "G-GHC7TCCD62"
};

// Initialize Firebase
if(typeof window !== "undefined"){
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}


export default function DonateBanner() {


  return (
    <>
      <div className="h-12" />
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <p className="ml-3 text-white truncate text-sm">
                  <span className="hidden md:inline">
                    © 2021 PickMyMentor, all rights reserved
                  </span>
                </p>
              </div>


              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="/"
                  className="flex items-center justify-center px-4 py-2  text-sm font-medium   text-white "
                >
                  Home
                </a>

              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="/aboutus"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium   text-white "
                >
                  About us
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
