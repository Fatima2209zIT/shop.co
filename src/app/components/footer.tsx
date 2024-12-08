import Image from "next/image";
import mail from "@/app/images/mail.png";
import logo from "@/app/images/SHOP.CO.png";
import twitter from "@/app/images/1.png";
import facebook from "@/app/images/2.png";
import instagram from "@/app/images/3.png";
import github from "@/app/images/4.png";
import line from "@/app/images/Line 8.png";
import card2 from "@/app/images/card2.png";
import gpay from "@/app/images/Badge (4).png";
import paypal from "@/app/images/Badge (3).png";
import visa from "@/app/images/visa.jpg";
import apple from "@/app/images/Badge (2).png";

export default function Footer() {
  return (
    <div>
      <div className="w-full lg:w-[1240px] h-[589px] relative z-10 px-4">
        {/* Top Banner */}
        <div className="w-full lg:w-[1240px] h-[293px] lg:h-[180px] flex flex-col lg:flex-row justify-between px-[64px] py-[36px] bg-black rounded-[20px] relative">
          <h1 className="lg:w-[551px] w-[297px] lg:h-[94px] h-[105px] font-integral font-bold lg:text-[40px] text-[32px] lg:leading-[45px] leading-[35px] text-white">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="lg:w-[349px] w-[311px] flex flex-col lg:top-[35px] top-[150px] gap-[14px]">
            <div className="flex items-center w-full bg-white rounded-[62px] px-[16px] py-[12px]">
              <Image src={mail} alt="mail" width={24} height={24} />
              <p className="ml-4 font-satoshi font-normal text-[16px] text-[#00000066]">
                Enter Your Email Address
              </p>
            </div>
            <div className="flex items-center w-full bg-white rounded-[62px] px-[16px] py-[12px] hover:bg-[#8e9291f5]">
              <p className="ml-[70px] font-satoshi font-medium text-[16px] text-black">
                Subscribe to Newsletter
              </p>
            </div>
          </div>
        </div>

{/* Bottom Content */}
<div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 px-[64px] py-[36px] text-white">
  {/* Logo and Description */}
  <div className="flex flex-col lg:w-[167px] items-center lg:items-start gap-4">
    <Image src={logo} alt="logo" width={144} height={20} className="w-[167px] h-[20px]" />
    
    {/* Text and Social Icons */}
    <div className="flex flex-col items-center lg:items-start gap-4">
      <p className="text-[14px] text-[#00000099] lg:text-base lg:leading-6 text-center lg:text-left">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
      </p>
      <div className="flex gap-4 justify-center">
        <Image src={twitter} alt="twitter" width={24} height={24} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
        <Image src={facebook} alt="facebook" width={24} height={24} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
        <Image src={instagram} alt="instagram" width={24} height={24} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
        <Image src={github} alt="github" width={24} height={24} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
      </div>
    </div>
  </div>





          {/* Links Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 w-full text-center lg:text-left">
            {/* Company Links */}
            <div className="flex flex-col gap-4">
              <div className="font-satoshi font-medium text-[16px] tracking-[3px] text-black">COMPANY</div>
              <div className="flex flex-col text-[#00000099] text-[16px] gap-3">
                <span>About</span>
                <span>Features</span>
                <span>Work</span>
                <span>Career</span>
              </div>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-4">
              <div className="font-satoshi font-medium text-[16px] tracking-[3px] text-black">HELP</div>
              <div className="flex flex-col text-[#00000099] text-[16px] gap-3">
                <span>Customer Support</span>
                <span>Delivery Details</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
              </div>
            </div>

            {/* FAQ Links */}
            <div className="flex flex-col gap-4">
              <div className="font-satoshi font-medium text-[16px] tracking-[3px] text-black">FAQ</div>
              <div className="flex flex-col text-[#00000099] text-[16px] gap-3">
                <span>Account</span>
                <span>Manage Deliveries</span>
                <span>Orders</span>
                <span>Payments</span>
              </div>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col gap-4">
              <div className="font-satoshi font-medium text-[16px] tracking-[3px] text-black">RESOURCES</div>
              <div className="flex flex-col text-[#00000099] text-[16px] gap-3">
                <span>Free eBooks</span>
                <span>Development Tutorial</span>
                <span>How to - Blog</span>
                <span>Youtube Playlist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full px-4">
          <Image src={line} alt="line" width={0} height={0} />
        </div>

        {/* Footer Text */}
        <div className="w-full text-center py-4 text-[#00000099] text-[14px]">
          Shop.co ©, Mehmil Zeeshan, All Rights Reserved
        </div>

        {/* Payment Options */}
        <div className="w-full flex justify-center gap-4 py-4">
          <Image src={visa} alt="visa" width={40} height={40} />
          <Image src={card2} alt="card" width={40} height={40} />
          <Image src={paypal} alt="paypal" width={40} height={40} />
          <Image src={apple} alt="apple" width={40} height={40} />
          <Image src={gpay} alt="gpay" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
