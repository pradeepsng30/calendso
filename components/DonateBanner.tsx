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
