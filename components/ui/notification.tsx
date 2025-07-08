import Image from "next/image";

const DownloadAppBanner = () => {
  return (
    <div className="flex absolute   items-center bg-[#f3e8ff] text-gray-800 px-4 py-3 rounded-xl max-w-md shadow-md ">
      {/* QR Code */}
      <div className="flex flex-col items-center pr-4 border-r border-gray-300">
        <Image src="/qr-code.png" alt="QR Code" width={60} height={60} />
        <span className="text-xs mt-1">Scan the QR</span>
      </div>

      {/* Middle Separator */}
      <div className="px-3 text-sm font-medium text-gray-500">Or</div>

      {/* App Details */}
      <div className="flex items-center gap-3">
        {/* App Icon */}
        <Image
          src="/app_icon.webp"
          alt="App Icon"
          width={40}
          height={40}
          className="rounded"
        />

        <div className="flex flex-col">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.apna.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/playstore_img.png"
              alt="Google Play"
              width={100}
              height={30}
            />
          </a>

          {/* Download Text */}
          <span className="text-sm font-semibold mt-1 text-purple-700">
            Download Now
          </span>
        </div>
      </div>

      {/* Close Button */}
      <button className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl">
        &times;
      </button>
    </div>
  );
};

export default DownloadAppBanner;
