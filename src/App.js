import "./App.css";

function App() {
  return (
    <>
      <div className="overflow-x-hidden bg-white">
        <div className="flex flex-row items-start justify-center ">
          <div className="flex flex-row items-center justify-between  absolute z-50 lg:py-6 text-lg py-3 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5">
            <div className="">
              <a href="/">
                <img
                  src="./images/logo-no-background.svg"
                  className="lg:h-10 md:h-7 h-7 "
                  alt="fulldao"
                />
              </a>
            </div>
            <div className="flex">
              <a href="/" target="_blank">
                <div className="text-white pt-2 px-3 text-base">Document</div>
              </a>
              <button className="font-semibold text-sm  text-white rounded-md lg:h-11 lg:w-auto sm:px-9 h-11 sm:w-44 w-28 border-red-500 ">
                <div className="flex flex-row items-center justify-center  bg-[#8B8DFC] rounded-3xl h-full px-4 py-2">
                  <div className="bg-white bg-clip-text text-transparent">
                    Launch App
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-black h-screen w-screen">
          <div className='bg-[url("/public/images/zkeypro.png")] bg-no-repeat md:bg-right bg-center h-screen w-screen '>
            <div className="flex flex-row items-start justify-start md:max-w-screen-md lg:max-w-screen-lg xl:maxrow-w-screen-xl mx-auto w-full px-5  pt-32 sm:items-center sm:flex- lg:pl-40">
              <img
                src="./images/indexDivider.svg"
                className="lg:h-80 lg:w-6 md:h-50 md:w-3 h-50 w-3"
              />
              <div className="flex flex-row items-start justify-start sm:flex-col ">
                <div className="lg:mb-8 md:mb-8 font-bold mb-2 text-white lg:text-5xl md:text-4xl text-2xl">
                  Basic key element
                  <br className="lg:inline" />
                  for mass adoption of
                  <br className="lg:inline" />
                  crypto on <span className="text-indigo-500">mkSync</span>
                </div>
                <div className="flex flex-row items-start sm:justify-start md:mb-8 mb-2 justify-center  ">
                  <div className="font-thin text-xs text-white">Powered by</div>
                  <img
                    src="/images/avalanche.svg"
                    alt="avalancheIcon"
                    className="mx-2 h-2/5 w-2/5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black scrolldest">
          <div className="grid grid-cols-2 lg:gap-11 gap-6 lg:mb-0 mb-11 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5 pt-5">
            <div className="black rounded-sm flex shadow-[rgba(0, 0, 0, 0) 0px 0px 15px] lg:flex-col text-center 2xl:col-span-1 lg:col-span-1 col-span-4 hover:scale-110 hover:transition-all hover:ease-linear lg:rounded-sm rounded-sm ">
              <div className="black rounded-sm md:h-64 lg:h-96 h-36 flex items-center justify-center lg:mb-3 lg:w-full sm:w-1/2 w-2/5">
                <img
                  src="./images/vaultsbanner.png"
                  alt="image"
                  className="sm:h-full h-28 sm:ml-0 ml-2"
                />
              </div>
              <div className="flex  text-black-900 font-black lg:text-5xl md:text-3xl sm:text-2xl text-xl xl:px-18 lg:mb-8 flex-col justify-center lg:items-center items-start">
                <div className="lg:text-center text-left">
                  <span className="text-4xl text-white">
                    <span className="text-indigo-500">mkey</span> Aggregator
                  </span>
                </div>
                <div className="relative">
                  <button className="font-semibold text-sm lg:text-semibold text-white rounded-md bg-[#8B8DFC] p-[1px]  sm:h-11 xl:h-10.5 h-9 lg:w-80 md:w-40 w-33.25 border-red-500 lg:mb-10 mt-2  ">
                    <div className="flex flex-row items-center justify-center  bg-[#8B8DFC] rounded-md h-full px-4 py-2">
                      <div className="bg-white bg-clip-text text-transparent">
                        Get started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="black rounded-sm flex  shadow-[rgba(0, 0, 0, 0) 0px 0px 15px] lg:flex-col text-center 2xl:col-span-1 lg:col-span-1 col-span-4 hover:scale-110 hover:transition-all hover:ease-linear lg:rounded-sm rounded-sm ">
              <div className="black rounded-sm md:h-64 lg:h-96 h-36 flex items-center justify-center lg:mb-3 lg:w-full sm:w-1/2 w-2/5">
                <img
                  src="./images/vaultsbanner2.png"
                  alt="image"
                  className="sm:h-full h-28 sm:ml-0 ml-2"
                />
              </div>
              <div className="flex  text-black-900 font-black lg:text-5xl md:text-3xl sm:text-2xl text-xl xl:px-18 lg:mb-8 flex-col justify-center lg:items-center items-start">
                <div className="lg:text-center text-left">
                  <div className="text-4xl text-white">
                    <span className="text-indigo-500">mkey</span> Launchpad
                  </div>
                </div>
                <div className="relative">
                  <button className="font-semibold text-sm lg:text-semibold text-white rounded-md bg-[#8B8DFC] p-[1px]  sm:h-11 xl:h-10.5 h-9 lg:w-80 md:w-40 w-33.25 border-red-500 lg:mb-10 mt-2  ">
                    <div className="flex flex-row items-center justify-center  bg-[#8B8DFC] rounded-md h-full px-4 py-2">
                      <div className="bg-white bg-clip-text text-transparent">
                        Get started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-cover -mt-7 overflow-hidden">
            <div className="lg:mb-0 mb-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5">
              <div className="flex flex-row items-center justify-start 2xl:pt-37 lg:pt-27.25 pt-14 lg:pb-20 pb-5 lg:justify-center ">
                <div>
                  <img src="./images/zkeylogo.svg" />
                </div>
              </div>
              <div className="max-md:grid max-md:grid-cols-3   gap-2  overflow-clip" />
              <span className="lg:flex lg:justify-evenly lg:items-center">
                <div className="flex relative lg:w-60 pr-3 hover:scale-110 hover:transition-all hover:ease-linear justify-center lg:shadow-md lg:shadow-red-800 ">
                  <img
                    src="./images/vaults.png"
                    alt="image"
                    className="w-52 "
                  />
                </div>
                <div className="flex relative lg:w-60 pr-3 hover:scale-110 hover:transition-all hover:ease-linear justify-center lg:shadow-md lg:shadow-red-800 ">
                  <img
                    src="./images/lending.png"
                    alt="image"
                    className=" w-52  "
                  />
                </div>
                <div className="flex relative lg:w-60 pr-3 hover:scale-110 hover:transition-all hover:ease-linear justify-center lg:shadow-md lg:shadow-red-800 ">
                  <img
                    src="./images/governance.png"
                    alt="image"
                    className=" w-52  "
                    // width="200px"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black bg-cover ">
        <div className="sm:pb-20 lg:mb-0 mb-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5">
          <div className="flex flex-row items-center  2xl:pt-44 xl:pt-38.75 lg:pt-30 pt-12 lg:pb-15 pb-8 justify-center">
            <img src="./images/ProcessTitle.svg" className="md:h-10 h-9" />
          </div>
          <img
            className="w-full rounded-sx shadow-sm shadow-red-800"
            src="./images/diagram.svg"
          />
        </div>
      </div>
      <div className="bg-[url('/public/images/wave1.png')]  bg-cover bg-center bg-black ">
        <div
          className="lg:mt-0 mt-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5"
          id="reason"
        >
          <div className="flex flex-row items-center justify-center md:mb-19 mb-8">
            <img src="./images/reason.png" className="h-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-x-30 lg:gap-y-11 features">
            <div className="bg-[url('/public/images/bgcard.svg')] hover:scale-110 hover:transition-all hover:ease-linear max-sm:text-ellipsis max-sm:overflow-hidden bg-no-repeat rounded-sm md:block flex md:p-11 py-5 pl-5 pr-1 md:w-80 md:h-72 h-28 mx-auto lg:mb-0 sm:mb-6 mb-2  shadow-md shadow-red-800 w-full">
              <img
                className="lg:w-auto w-16 md:mb-4 md:mr-0 mr-2"
                src="/images/inovation.svg"
                alt="icon"
              />
              <div>
                <h1 className="mb-2 md:leading-6 md:text-2xl font-bold text-white">
                  Inovation
                </h1>
                <p className="max-md:leading-4 text-white md:text-sm text-[10px]">
                  First-ever combination of DEX Aggregator, Launchpad &amp;
                  Bridge with interconnected features, becoming a gate way for
                  projects and users to mkSync.
                </p>
              </div>
            </div>
            <div className="bg-[url('/public/images/bgcard.svg')] hover:scale-110 hover:transition-all hover:ease-linear max-sm:text-ellipsis max-sm:overflow-hidden bg-no-repeat rounded-sm md:block flex md:p-11 py-5 pl-5 pr-1 md:w-80 md:h-72 h-28 mx-auto lg:mb-0 sm:mb-6 mb-2  shadow-md shadow-red-800 w-full">
              <img
                className="lg:w-auto w-16 md:mb-4 md:mr-0 mr-2"
                src="/images/zkCompatibility.svg"
                alt="icon"
              />
              <div>
                <h1 className="mb-2 md:leading-6.5 md:text-2xl font-bold text-white  ">
                  mkSync compatibility
                </h1>
                <p className="max-md:leading-4 text-white md:text-sm text-[10px]">
                  Being highly compatible to mkSync, the transaction throughput
                  on mkey Protocol is extremely high with low gas fees
                </p>
              </div>
            </div>
            <div className="bg-[url('/public/images/bgcard.svg')] hover:scale-110 hover:transition-all hover:ease-linear max-sm:text-ellipsis max-sm:overflow-hidden bg-no-repeat rounded-sm md:block flex md:p-11 py-5 pl-5 pr-1 md:w-80 md:h-72 h-28 mx-auto lg:mb-0 sm:mb-6 mb-2  shadow-md shadow-red-800 w-full">
              <img
                className="lg:w-auto w-16 md:mb-4 md:mr-0 mr-2"
                src="/images/dualStake.svg"
                alt="icon"
              />
              <div>
                <h1 className="mb-2 md:leading-6.5 md:text-2xl font-bold text-white  ">
                  Dual stake
                </h1>
                <p className="max-md:leading-4 text-white md:text-sm text-[10px]">
                  Staking on just one platform to receive reward from all mkey
                  Protocol products. mkey Protocol incentitives and motivates
                  our contributors.
                </p>
              </div>
            </div>
            <div className="bg-[url('/public/images/bgcard.svg')] hover:scale-110 hover:transition-all hover:ease-linear max-sm:text-ellipsis max-sm:overflow-hidden bg-no-repeat rounded-sm md:block flex md:p-11 py-5 pl-5 pr-1 md:w-80 md:h-72 h-28 mx-auto lg:mb-0 sm:mb-6 mb-2  shadow-md shadow-red-800 w-full">
              <img
                className="lg:w-auto w-16 md:mb-4 md:mr-0 mr-2"
                src="/images/simplity.svg"
                alt="icon"
              />
              <div>
                <h1 className="mb-2 md:leading-6 md:text-2xl font-bold text-white  ">
                  Simplity
                </h1>
                <p className="max-md:leading-4 text-white md:text-sm text-[10px]">
                  mkey Protocol provides smooth, fast and convenient experience
                  to users with simple interface
                </p>
              </div>
            </div>
            <div className="bg-[url('/public/images/bgcard.svg')] hover:scale-110 hover:transition-all hover:ease-linear  bg-no-repeat rounded-sm md:block flex md:p-11 py-5 pl-5 pr-1 md:w-80 md:h-72 h-28 mx-auto lg:mb-0 sm:mb-6 mb-2  shadow-md shadow-red-800 w-full">
              <img
                className="lg:w-auto w-16 md:mb-4 md:mr-0 mr-2"
                src="/images/security.svg"
                alt="icon"
              />
              <div>
                <h1 className="mb-2 md:leading-6 md:text-2xl font-bold text-white  ">
                  Security
                </h1>
                <p className="max-md:leading-4 text-white md:text-sm text-[10px]">
                  Security above everything! Interaction in mkProtocol is
                  transparent, private and secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/public/images/wave2.png')] bg-right-top bg-no-repeat bg-black lg:h-60 h-20"></div>
      <div className="text-white lg:pt-36 md:pt-20 pt-10 md:bg-[url('/public/images/bgFoorter.png')] bg-foorterMobile bg-cover bg-black">
        <div className="flex flex-col items-center justify-between  lg:items-start lg:flex-row md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-5 md:mb-26 mb-8">
          <div className="flex flex-row items-start lg:flex-row w-full lg:justify-start justify-between">
            <div className="lg:mb-0 mb-2 lg:px-8">
              <div className="text-white font-bold lg:text-xl md:mb-4 mb-1 text-left lg:leading-9">
                About US
              </div>
              <div className="flex flex-col items-start justify-start lg:flex-col">
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="undefined"
                >
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white mb-2 mr-0">
                    <div className="sm:text-base text-sm font-semibold sm:font-medium lg:text-left text-center lg:leading-5">
                      Documentation
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="lg:mb-0 mb-2 lg:px-8">
              <div className="text-white font-bold lg:text-xl md:mb-4 mb-1 text-left lg:leading-9">
                Products
              </div>
              <div className="flex flex-col items-start justify-start lg:flex-col">
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="undefined"
                >
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white mb-2 mr-0">
                    <div className="sm:text-base text-sm font-semibold sm:font-medium lg:text-left text-center lg:leading-5">
                      mkey Aggregator
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="undefined"
                >
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white mb-2 mr-0">
                    <div className="sm:text-base text-sm font-semibold sm:font-medium lg:text-left text-center lg:leading-5">
                      mkey Launchpad
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start lg:mr-14 lg:w-fit w-full">
            <div className="lg:mb-0 mb-2 lg:px-8">
              <div className="text-white font-bold lg:text-xl md:mb-4 mb-1 text-left lg:leading-9">
                Social
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-2">
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="mr-1"
                >
                  <img src="/images/twitter.png" alt="icon" />
                </a>
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="mr-1"
                >
                  <img src="/images/dicord.png" alt="icon" />
                </a>
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="mr-1"
                >
                  <img src="/images/telegram.png" alt="icon" />
                </a>
                <a
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                  className="mr-1"
                >
                  <img src="/images/telegramAnn.png" alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center md:pb-12 pb-6">
          <img
            src="/images/copyright.png"
            className="lg:w-auto w-7 lg:mr-4 mr-3"
            alt="copyrightSymbol"
          />
          <div className="text-white lg:font-normal font-medium">
            mkey Protocol 2023, All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
