import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailModal from "./detailModal";
import { useState } from "react";

function App() {
  const [contactUsModalShow, setContactUsModalShow] = useState(false);
  const [tcModalShow, setTcModalShow] = useState(false);
  const [privacyModalShow, setPrivacyModalShow] = useState(false);
  const [refundModalShow, setRefundModalShow] = useState(false);
  return (
    <>
      <DetailModal
        description="Email:servicesprintx@gmail.com"
        title="Contact Us"
        show={contactUsModalShow}
        onHide={() => setContactUsModalShow(false)}
      />
      <DetailModal
        description="These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the “PrintX” mobile application (“Mobile Application” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and this Mobile Application developer (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Mobile Application and Services. By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application and Services.
         Accounts and membership
         You must be at least 16 years of age to use the Mobile Application and Services. By using the Mobile Application and Services and by agreeing to this Agreement you warrant and represent that you are at least 16 years of age.
         If you create an account in the Mobile Application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.
         Links to other resources
         Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.
         Prohibited uses
         In addition to other terms as set forth in the Agreement, you are prohibited from using the Mobile Application and Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Mobile Application and Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Mobile Application and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Mobile Application and Services for violating any of the prohibited uses.
         Intellectual property rights
         “Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Mobile Application and Services, are trademarks or registered trademarks of the Operator or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Mobile Application and Services may be the trademarks of other third parties. Your use of the Mobile Application and Services grants you no right or license to reproduce or otherwise use any of the Operator or third party trademarks.
         Limitation of liability
         To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of the Operator and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to the Operator for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.
         Indemnification
         You agree to indemnify and hold the Operator and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Mobile Application and Services or any willful misconduct on your part.
         Severability
         All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.
         Changes and amendments
         We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
         An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.
         Acceptance of these terms
         You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services. This terms and conditions policy was created with the terms and conditions generator.
         Contacting us
         If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:
         servicesprintx@gmail.com
         This document was last updated on October 8, 2021
         "
        title="Terms & Conditions"
        show={tcModalShow}
        onHide={() => setTcModalShow(false)}
      />
      <div className="App">
        <DetailModal
          title="Privacy Policy"
          description="PRIVACY NOTICE

          Last updated October 07, 2021
          
          
          
          Thank you for choosing to be part of our community at PrintX. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at servicesprintx@gmail.com.
          
          This privacy notice describes how we might use your information if you:
          Download and use our mobile application — PrintX
          Engage with us in other related ways ― including any sales, marketing, or events
          In this privacy notice, if we refer to:
          'App,' we are referring to any application of ours that references or links to this policy, including any listed above
          'Services,' we are referring to our App, and other related services, including any sales, marketing, or events
          The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
          
          Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
          
          TABLE OF CONTENTS
          
          1. WHAT INFORMATION DO WE COLLECT?
          2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          3. WHO WILL YOUR INFORMATION BE SHARED WITH?
          4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
          6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          7. WHAT ARE YOUR PRIVACY RIGHTS?
          8. CONTROLS FOR DO-NOT-TRACK FEATURES
          9. DO WE MAKE UPDATES TO THIS NOTICE?
          10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          11. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?
          
          1. WHAT INFORMATION DO WE COLLECT?
          
          Personal information you disclose to us
          
          In Short:  We collect personal information that you provide to us.
          
          We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App or otherwise when you contact us.
          
          The personal information that we collect depends on the context of your interactions with us and the App, the choices you make and the products and features you use. The personal information we collect may include the following:
          
          Personal Information Provided by You. We collect email addresses; names; and other similar information.
          
          Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Razorpay. You may find their privacy notice link(s) here: https://razorpay.com/privacy/.
          
          Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' below.
          
          All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
          
          Information automatically collected
          
          In Short:  Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our App.
          
          We automatically collect certain information when you visit, use or navigate the App. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our App and other technical information. This information is primarily needed to maintain the security and operation of our App, and for our internal analytics and reporting purposes.
          
          The information we collect includes:
          Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our App and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the App (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
          Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the App. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
          
          Information collected through our App
          
          In Short:  We collect information regarding your geolocation, mobile device, push notifications, when you use our App.
          
          If you use our App, we also collect the following information:
          Geolocation Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our App, to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
          Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
          Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
          This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.
          
          2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          
          In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          
          We may process or share your data that we hold based on the following legal basis:
          Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.
          Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
          Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
          Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
          Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
          More specifically, we may need to process your data or share your personal information in the following situations:
          Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
          Vendors, Consultants and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the App, which will enable them to collect data on our behalf about how you interact with our App over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.
          Business Partners. We may share your information with our business partners to offer you certain products, services or promotions.
          
          3. WHO WILL YOUR INFORMATION BE SHARED WITH?     
          
          In Short:  We only share information with the following categories of third parties.
          
          We only share and disclose your information with the following categories of third parties. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'.
          Cloud Computing Services
          Payment Processors
          
          4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?     
          
          In Short:  If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
          
          Our App offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.
          
          We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant App. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
          
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
          
          In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
          
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          
          6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          
          In Short:  We aim to protect your personal information through a system of organizational and technical security measures.
          
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our App is at your own risk. You should only access the App within a secure environment.
          
          7. WHAT ARE YOUR PRIVACY RIGHTS?
          
          In Short:  You may review, change, or terminate your account at any time.
           
          If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          
          If you are a resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
          
          If you have questions or comments about your privacy rights, you may email us at servicesprintx@gmail.com.
          
          Account Information
          
          If you would at any time like to review or change the information in your account or terminate your account, you can:
          Log in to your account settings and update your user account.
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
          
          Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
          
          8. CONTROLS FOR DO-NOT-TRACK FEATURES
          
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. 
          
          9. DO WE MAKE UPDATES TO THIS NOTICE?     
          
          In Short:  Yes, we will update this notice as necessary to stay compliant with relevant laws.
          
          We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          
          10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?     
          
          If you have questions or comments about this notice, you may email us at servicesprintx@gmail.com or by post to:
          
          ONEROOT SERVICES PVT LTD
          Mumbai, Maharashtra 400097
          India
          
          11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?     
          
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please email us on servicesprintx@gmail.com.
          "
          show={privacyModalShow}
          onHide={() => setPrivacyModalShow(false)}
        />
        <DetailModal
          title="Refund Policy"
          description="On cancelling order total amount will be refunded within 7-14 working days"
          show={refundModalShow}
          onHide={() => setRefundModalShow(false)}
        />
        {/* <div style={{
        backgroundColor: "#ffd222",
        height: '200px',
        width: "200px",
        borderRadius: "200px",
        position: "absolute",
        top: -130,
        right: -90
      }} /> */}

        <div className="firstPage">
          <img
            className="image"
            alt="mobile"
            src={require("./assets/mobile.svg").default}
          />
          {/* <div className='images'>
        <img className='image' alt='mobile' src={require('./assets/mobile.svg').default} />
      </div> */}
          <div className="firstPageContent">
            <h1 className="experience">Experience</h1>
            <label className="typing">PRINTING DOCUMENTS WITH EASE !</label>
            <a href="https://play.google.com/store/apps/details?id=com.printxcenter.printx">
              <div on className="printxBtn">
                <label>PRINTX</label>
              </div>
            </a>
            <h2>Download the app now!</h2>
          </div>
        </div>
      </div>
      <div className="SecondApp">
        <div className="SecondPage">
          <h5
            onClick={(e) => {
              e.preventDefault();
              setTcModalShow(true);
            }}
          >
            Terms & Conditions
          </h5>
          <h5
            onClick={(e) => {
              e.preventDefault();
              setContactUsModalShow(true);
            }}
          >
            Contact Us
          </h5>
          <h5
            onClick={(e) => {
              e.preventDefault();
              setPrivacyModalShow(true);
            }}
          >
            Privacy Policy
          </h5>
          <h5
            onClick={(e) => {
              e.preventDefault();
              setRefundModalShow(true);
            }}
          >
            Refund Policy
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
