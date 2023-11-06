import React from "react"
import dayjs from "dayjs"

const PrivacyPolicyPage = () => {
  const currentDate = dayjs().format('YYYY-MM-DD ');

  return (
    <div className="">
      <div className="bg-slate-700 text-center py-[5rem] ">
        <h3 className="text-2xl font-semibold text-white ">
          Our Privacy Policy{" "}
        </h3>
      </div>
      <div className="mx-10 my-5 space-y-10">
        <p className="text-xl text-slate-500">Last Updated: [{currentDate}]</p>
        <p className="text-xl text-slate-500">
          GameBit<sup>©</sup> is committed to protecting
          the privacy and security of your personal information. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          information when you use our game and web development services. By
          accessing or using our services, you consent to the practices
          described in this Privacy Policy. If you do not agree with this
          Privacy Policy, please do not use our services.
        </p>
      <div className="space-y-[0.5rem]">
        <p className="text-2xl text-slate-500">Information We Collect</p>

        <p className="text-2xl text-slate-500">
          We may collect the following types of information:
        </p>
        <div className="space-y-1">
          <p className="text-xl text-slate-500">
            <span className="text-slate-500 text-2xl">
              Personal Information:
            </span>{" "}
            Information that can be used to identify you, including but not
            limited to your name, email address, and contact information.
          </p>
          <p className="text-xl text-slate-500">
            <span className="text-slate-500 text-2xl">Usage Data:</span>{" "}
            Information about how you use our services, including your device's
            IP address, browser type, operating system, and the pages you visit.
          </p>
          <p className="text-xl text-slate-500">
            <span className="text-slate-500 text-2xl">Game Data:</span> In the
            context of our games, we may collect data related to your in-game
            activities and progress, such as scores, achievements, and game
            preferences.
          </p>
        </div>
      </div>
      <div className="space-y-[0.5rem]">

        <p className="text-2xl text-slate-500">How We Use Your Information</p>
        <p className="text-xl text-slate-500">
          Providing and maintaining our services. Improving, customizing, and
          enhancing our services. Responding to your requests and inquiries.
          Communicating with you, such as sending updates and promotional
          materials (you can opt out of marketing communications at any time).
          Analyzing usage patterns and trends to optimize our services.
        </p>
        </div>
        <div className="space-y-[0.5rem]">

        <p className="text-2xl text-slate-500">How We Use Your Information</p>
        <p className="text-xl text-slate-500">
          We may share your information with third parties under the following
          circumstances: With your consent. To comply with legal obligations or
          protect our rights, privacy, safety, or property. With service
          providers who assist us in providing and maintaining our services. In
          connection with a merger, acquisition, or sale of all or a portion of
          our company.
        </p>
    </div>
    <div className="space-y-[0.5rem]">

        <p className="text-2xl text-slate-500">Security</p>
        <p className="text-xl text-slate-500">
        We take appropriate measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>
        </div>
        <div>

        <p className="text-2xl text-slate-500">Changes to This Privacy Policy</p>
        <p className="text-xl text-slate-500">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We recommend checking this page periodically for any updates.


        </p>
        </div>
        <div className="space-y-[0.5rem]">

        <p className="text-2xl text-slate-500">Contact Us
</p>
<p className="text-xl text-slate-500">
If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at [contact email].




        </p>
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicyPage
