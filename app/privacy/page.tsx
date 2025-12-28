import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ohi',
  description: 'Privacy Policy for Ohi App',
}

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-navbar">
        <div className="logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Ohi Logo" 
            width={40}
            height={40}
            style={{ height: '40px' }}
          />
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/" className="inline-link">Back to Home</Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="legal-hero">
          <h1>Privacy Policy</h1>
          <div className="legal-meta">Revised on: 15th September 2025</div>
        </div>

        <section className="legal-section">
          <p>
            O hi is a social app - The Real-Time Social Media App for Real People. Because now, if YOU are a consumer— YOU are a CONSUMER INFLUENCER.
            Far away from polished feeds, perfect selfies, and staged content O Hi is India&apos;s most unfiltered social app that&apos;s creating waves for your rawest content! From midnight overthinking to cooking Maggi, chai breaks to Netflix marathons; O Hi makes your everyday — your &quot;What You Doing&quot; moment.
          </p>

          <p>
            Our products and services — including posting and hosting brands that link to this Privacy Policy — provide making connections with people around you as per your choice.
            By using our services, you agree to our collection and use of your information in accordance with this Privacy Policy. For certain categories of sensitive information, we will request your explicit consent.
            That&apos;s why we&apos;ve written this Privacy Policy. If you still have questions about anything in our Privacy Policy, just contact us at <a href="mailto:contact@ohiapp.com" className="inline-link">contact@ohiapp.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <p>
            It goes without saying, we can&apos;t help you develop meaningful connections without some information about you, such as basic profile details and the types of people you&apos;d like to meet. We also collect information generated as you use our services, for example access logs, as well as information from third parties, like when you access our services through a social media account. If you want additional info, more details are provided below.
          </p>

          <p>
            There are three basic categories of information we collect:
          </p>
          <ul>
            <li>Information you provide.</li>
            <li>Information we get when you use our services.</li>
            <li>Information we get from third parties.</li>
          </ul>

          <p>Here&apos;s a little more detail on each of these categories.</p>
        </section>

        <section className="legal-section">
          <h2>Information You Provide</h2>
          <p>
            When you interact with our services, we collect information that you provide to us. For example, most of our services require you to set up an account, so we need to collect a few important details about you, such as your name, username, email address, phone number.
          </p>

          <p>
            When you contact customer support or communicate with us in any other way, we&apos;ll collect whatever information you volunteer or that we need to resolve your question.
          </p>

          <h3>Information you give us</h3>
          <p>
            You choose to give us certain information when using our services. This includes:
          </p>
          <ul>
            <li>When you create an account, you provide us with at least your login credentials, as well as some basic details necessary for the service to work, such as your gender and date of birth.</li>
            <li>When you complete your profile, you can share with us additional information, such as details on your personality, lifestyle, interests and other details about you, as well as content such as photos and videos. To add certain content, like pictures or videos, you may allow us to access your camera or photo album. We will request explicit consent before processing sensitive personal data, including but not limited to racial or ethnic origin, political opinions, religious beliefs, or sexual orientation. By choosing to provide this information, you consent to our processing of that information.</li>
            <li>The pictures and videos you post through your device&apos;s camera to share with people.</li>
            <li>If you ask us to communicate with or otherwise process information of other people (for example, if you ask us to send an email on your behalf to one of your friends), we collect the information about others that you give us in order to complete your request.</li>
            <li>Of course, we also process your chats with other users as well as the content you publish, as part of the operation of the services.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Usage Information</h2>
          <p>
            We collect information about your activity on our services, for instance how you use them (e.g., date and time you logged in, features you&apos;ve been using, searches, clicks and pages which have been shown to you, referring webpage address, advertising that you click on) and how you interact with other users (e.g., users you connect and interact with, time and date of your exchanges, number of messages you send and receive).
          </p>
        </section>

        <section className="legal-section">
          <h2>Device Information</h2>
          <p>
            We collect information from and about the device(s) you use to access our services, including:
          </p>
          <ul>
            <li>hardware and software information such as IP address, device ID and type, device-specific and apps settings and characteristics, app crashes, advertising IDs (such as Google&apos;s AAID and Apple&apos;s IDFA, both of which are randomly generated numbers that you can reset by going into your device&apos; settings), browser type, version and language, operating system, time zones, identifiers associated with cookies or other technologies that may uniquely identify your device or browser (e.g., IMEI/UDID and MAC address);</li>
            <li>information on your wireless and mobile network connection, like your service provider and signal strength;</li>
            <li>information on device sensors such as accelerometers, gyroscopes and compasses.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Content Usage</h2>
          <p><strong>(1) No Product/Service Provision</strong></p>
          <p>
            We do not sell, distribute, or provide any products or services of any brand to users. Any product-related discussions or mentions are solely user-generated and not endorsed by O hi App.
          </p>

          <p><strong>(2) No Content Creation Guidance</strong></p>
          <p>
            We do not encourage, train, or guide users in any specific content creation format. All content shared is at the sole discretion and responsibility of the user.
          </p>

          <p><strong>(3) Rights to Showcase Content</strong></p>
          <p>
            By posting on O hi App, you grant us a non-exclusive, royalty-free, worldwide license to showcase and feature your product-related content. Such content may be displayed on LED billboards, hoardings, and other media placements across India and globally for promotional purposes.
          </p>

          <p><strong>(4) User Responsibility</strong></p>
          <p>
            By posting on O hi App, you grant us a non-exclusive, royalty-free, worldwide license to showcase and feature your product-related content. Any third-party brand references in user content are the sole responsibility of the user and not of O hi App.
          </p>

          <p><strong>(5) Content Usage Limitation</strong></p>
          <p>
            Featured content will not be altered beyond formatting or sizing adjustments necessary for display. We will not claim ownership of your content; rights remain with the creator.
          </p>
        </section>

        <section className="legal-section">
          <h2>Other information with your consent</h2>
          <p>
            If you give us permission, we can collect your precise geolocation (latitude and longitude) through various means, depending on the service and device you&apos;re using, including GPS, Bluetooth or Wi-Fi connections. Background location tracking is optional and disabled by default. You can enable or disable this via in-app settings at any time. If you consent on allowing location access and checkin to cafe chatrooms you go to, your profile will appear in chatroom for 12 hours and also past checked in users. If you decline permission for us to collect your geolocation, we will not collect it. Similarly, if you consent, we may collect your photos and videos (for instance, if you want to publish a photo, video or streaming on the services).
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Get When You Use Our Services</h2>
          <p>
            When you use our services, we collect information about which of those services you&apos;ve used and how you&apos;ve used them. We might know, for instance, that you searched this restaurant and you spend this much time using this feature. Here&apos;s a fuller explanation of the types of information we collect when you use our services:
          </p>

          <h3>Chat Data</h3>
          <p>
            Chat content is end-to-end stored on devices. We do not monitor, analyze, or access your chat messages unless explicitly required by law or with user consent. However, we do not monitor your chat data, take any action based on your chat data, or disclose it to third party.
          </p>

          <h3>Usage Information</h3>
          <p>
            We collect information about your activity through our services. For example, we may collect information about how you interact with our services, such as which filters you use, or which search queries you submit.
          </p>

          <h3>Device Information</h3>
          <p>
            Sensor data is only collected to improve feature functionality, such as location-based chatrooms. You may disable sensor access via your device settings. For example, we collect information about your wireless and mobile network connections, such as mobile phone number, service provider, IP address, and signal strength.
          </p>

          <h3>Location Information</h3>
          <p>
            When you use our services, we may collect information about your location. With your permission, we may also collect information about your precise location using methods that include GPS, wireless networks, cell towers, Wi-Fi access points etc.
          </p>

          <h3>Log Information</h3>
          <p>
            We also collect log information when you use our website, such as details about how you&apos;ve used our services; access times; pages viewed; IP address; browser; identifiers associated with cookies or other technologies that may uniquely identify your device.
          </p>
        </section>

        <section className="legal-section">
          <h2>Access to Contact List</h2>
          <p><strong>Optional Access:</strong> Granting access to your contact list is entirely optional. You can use O hi without providing access to your contact list, although some features, such as inviting friends, sharing app links, and sending chatroom invitations, may be limited or unavailable.</p>

          <p><strong>Purpose of Access:</strong> By optionally granting access to your contact list, you enable O hi to provide features that allow you to:
          </p>
          <ul>
            <li>Invite your friends to join the app by sending them an invitation link.</li>
            <li>Share links to our app with your contacts.</li>
            <li>Send chatroom invitations to your contacts.</li>
          </ul>

          <p><strong>Information Collected:</strong> When you permit O hi to access your contact list, we collect the following information: Contact Names and Phone Numbers.</p>

          <p><strong>Use of Information:</strong> The contact information collected is used solely for the purposes mentioned above. We do not use this information for any other purposes without your explicit consent.</p>

          <p><strong>Sharing and Disclosure:</strong> We do not share your contact information with third parties, except as required by law or with your explicit consent. We may disclose your contact information if required to do so by law or in response to valid legal requests by public authorities.</p>

          <p><strong>Data Security:</strong> We take the security of your contact information seriously. Measures we have in place include: Encryption of contact information during transmission and storage, and restricted access to contact information to authorized personnel only.</p>

          <p><strong>Your Choices:</strong></p>
          <ul>
            <li>You can choose whether to grant or deny access to your contact list.</li>
            <li>You can view and manage the contacts that our app has accessed at any time.</li>
            <li>You can revoke our access to your contact list at any time through your device settings.</li>
            <li>You can request the deletion of your contact information from our servers by contacting our support team.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Use Information</h2>
          <p>
            The main reason we use your information is to deliver and improve our services. Additionally, we use your info to help keep you safe and to provide you with advertising that may be of interest to you. Read on for a more detailed explanation of the various reasons we use your information, together with practical examples.
          </p>

          <ul>
            <li><strong>To administer your account and provide our services to you:</strong>
              <ul>
                <li>Create and manage your account</li>
                <li>Provide you with customer support and respond to your requests</li>
                <li>Complete your transactions</li>
                <li>Communicate with you about our services, including order management and billing</li>
              </ul>
            </li>

            <li><strong>To help you connect with other users:</strong>
              <ul>
                <li>Analyze your profile, activity on the service, and preferences to recommend meaningful connections to you and recommend you to others; For more information on our profiling and automated decision-making.</li>
                <li>Show users&apos; profiles to one another</li>
              </ul>
            </li>

            <li><strong>To ensure a consistent experience across your devices:</strong>
              <p>Link the various devices you use so that you can enjoy a consistent experience of our services on all of them. We do this by linking devices and browser data, such as when you log into your account on different devices or by using partial or full IP address, browser version and similar data about your devices to help identify and link them.</p>
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Social Cookies &amp; Google Analytics</h2>
          <p>
            <strong>Social Cookies:</strong> To allow you to share content on social media, some features of this website use social media plug-ins (e.g., Instagram™ &quot;Share to Instagram&quot; or LinkedIn™ &quot;in&quot; buttons). Depending on your social media account settings, we automatically receive information from the social media platform when you use the corresponding button on our website. To learn more about social media cookies, we suggest you refer to your social media platform&apos;s cookie policy and privacy policy.
          </p>

          <p>
            <strong>Google Analytics:</strong> We use Google Analytics, which is a Google service that uses cookies and other data collection technologies to collect information about your use of the website and services in order to report website trends.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect from Third Parties</h2>
          <p>
            Advertisers, app developers, publishers, and other third parties may share information with us as well.
          </p>
        </section>

        <section className="legal-section">
          <h2>How We Share Information</h2>
          <p>
            We may share information about you in the following ways:
          </p>
          <ul>
            <li>information about you, such as your username, name, information about how you have interacted with our services to understand your connections with others using our services, and any additional information you have directed us to share;</li>
            <li>public information like your name, username, profile pictures;</li>
            <li>With third parties. We may share information about you with service providers who perform services on our behalf, including to measure and optimize the performance of ads and deliver more relevant information, including on third-party websites and apps;</li>
            <li>We may share information about you with business partners that provide services and functionality on our services;</li>
            <li>We may share information about you, such as device and usage information, to help us and others prevent fraud;</li>
            <li>We may share information about you for legal, safety, and security reasons if we reasonably believe that disclosing the information is needed to comply with valid legal process, investigate or enforce potential Terms of Service violations, protect rights or safety, or detect and resolve fraud or security concerns;</li>
            <li>We may share information about you as part of a merger or acquisition or alliance. If O hi gets involved in a merger, asset sale, financing, liquidation or bankruptcy, or acquisition of all or some portion of our business to another company, we may share your information with that company before and after the transaction closes;</li>
            <li>We may also share with third parties that provide services to us or perform business purposes for us aggregated, non-personally identifiable, or de-identified information.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Keep Your Information</h2>
          <p>
            We store your basic account information—like your name, phone number, and email address—and list of friends until you ask us to delete them.
          </p>

          <p>
            We store location information for different lengths of time based on how precise it is and which services you use. For example, if you use the Map, we store information about your favorite places so we can personalize and improve your experience.
          </p>

          <p>
            We&apos;re constantly collecting and updating information about the things you might like and dislike, so we can provide you with more relevant content!
          </p>

          <p>
            Keep in mind that, while our systems are designed to carry out our deletion practices automatically, we cannot promise that deletion will occur within a specific time frame. There may be legal requirements to store your data and we may need to suspend those deletion practices if we receive valid legal process asking us to preserve content, if we receive reports of abuse or other Terms of Service violations, or if your account or content created by you is flagged by our automated systems for abuse or other Terms of Service violations. Finally, we may also retain certain information in backup for a limited period of time or as required by law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Control Over Your Information</h2>
          <p>
            We want you to be in control of your information, so we provide you with the following tools.
          </p>

          <ul>
            <li><strong>Access, Correction, and Portability.</strong> You can access and edit most of your basic account information right in our app. Because your privacy is important to us, we will ask you to verify your identity or provide additional information before we let you access or update your personal information.</li>

            <li><strong>Revoking permissions.</strong> In most cases, if you let us use your information, you can simply revoke your permission by changing the settings in the app or on your device if your device offers those options. Of course, if you do that, certain services may lose full functionality.</li>

            <li><strong>Deletion.</strong> While we hope you&apos;ll remain a lifelong user of O hi, if for some reason you ever want to delete your account you can delete by going to edit profile and choose to deactivate / delete the account or write us to at <a href="mailto:contact@ohiapp.com" className="inline-link">contact@ohiapp.com</a>.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Children</h2>
          <p>
            Our services are not intended for—and we don&apos;t direct them to—anyone under 16. And that&apos;s why we do not knowingly collect personal information from anyone under 16.
          </p>
        </section>

        <section className="legal-section">
          <h2>Revisions to the Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. But when we do, we&apos;ll let you know one way or another. Sometimes, we&apos;ll let you know by revising the date at the top of the Privacy Policy that&apos;s available on our website and mobile application. Other times, we may provide you with additional notice (such as adding a statement to our websites&apos; homepages or providing you with an in-app notification).
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

