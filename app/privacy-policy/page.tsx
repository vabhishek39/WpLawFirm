import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wp Law Firm',
  description: 'Privacy Policy and Legal Disclaimer for Wp Law Firm.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">Privacy Policy & Legal Disclaimer</h1>
        
        <div className="max-w-none">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Welcome to Wp Law Firm. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. The Data We Collect About You</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
            <li><strong className="text-gray-300">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong className="text-gray-300">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong className="text-gray-300">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong className="text-gray-300">Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-serif font-bold text-white mb-8">Legal Disclaimer</h2>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on &apos;I Agree&apos; below, the user acknowledges that:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
            <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</li>
            <li>The user wishes to gain more information about us for his/her own information and use;</li>
            <li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user&apos;s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and</li>
            <li>None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.</li>
          </ul>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Wp Law Firm is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>
      </div>
    </div>
  );
}
