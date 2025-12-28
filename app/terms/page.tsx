import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Ohi',
  description: 'Terms and Conditions for Ohi App',
}

export default function TermsPage() {
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
          <h1>Terms &amp; Conditions</h1>
          <div className="legal-meta">Last updated: 15th September 2025</div>
        </div>

        <section className="legal-section">
          <h2>Terms of Use</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity (&quot;you&quot;) and O hi (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and
            use of the application as well as any other media form, media channel, mobile website or mobile
            application related, linked, or otherwise connected thereto (collectively, the &quot;Application&quot;).
          </p>

          <p>
            You agree that by accessing the application, you have read, understood, and agree to be bound by all of
            these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are
            expressly prohibited from using the application and you must discontinue use immediately.
          </p>

          <p>
            Supplemental terms and conditions or documents that may be posted on the application from time to time
            are hereby expressly incorporated herein by reference. We may update these Terms & Conditions from
            time to time. For any material changes, Continued use without such consent may result in limited access.
          </p>

          <p>
            We will alert you about any changes by updating the &quot;Last updated&quot; date of these Terms and Conditions,
            and you waive any right to receive specific notice of each such change.
          </p>

          <p>
            It is your responsibility to periodically review these Terms and Conditions to stay informed of updates.
            You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes
            in any revised Terms and Conditions by your continued use of the application after the date such revised
            Terms and Conditions are posted.
          </p>

          <p>
            The information/Live information provided on the application is not intended for distribution to or use by
            any person or entity in any jurisdiction or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration requirement within such jurisdiction or
            country.
          </p>

          <p>
            Accordingly, those persons who choose to access the application from other locations will not be able to
            use the application because of privacy concerns.
          </p>

          <p>
            The Application is intended for users who are at least 16 years old. Users under 16 must obtain verifiable
            parental or guardian consent, in compliance with applicable data protection laws. Persons under the age of
            16 are not permitted to register for the Site.
          </p>

          <p>
            All users who are minors in the jurisdiction in which they reside (generally under the age of 16) must
            have the permission of, and be directly supervised by, their parent or guardian to use the application. If
            you are a minor, you must have your parent or guardian read and agree to these Terms and Conditions
            prior to you using the application.
          </p>
        </section>

        <section className="legal-section">
          <h2>INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            Unless otherwise indicated, the application is our proprietary property and all source code, databases,
            functionality, software, hardwares, website designs, audio, video, text, photographs, and graphics on the
            application (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein
            (the &quot;Marks&quot;) are owned or controlled by us or licensed to us and These Terms shall be governed by and
            construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall
            be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan, India.
          </p>

          <p>
            The Content and the Marks are provided on the application &quot;AS IS&quot; for your information and personal use
            only. Except as expressly provided in these Terms and Conditions, no part of the application and no
            Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
            commercial purpose whatsoever, without our express prior written permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>USER REPRESENTATIONS</h2>
          <p>
            By using the application, you represent and warrant that:
          </p>
          <p>
            [(1) all registration information you submit will be true, accurate, current, and complete;
            (2) you will maintain the accuracy of such information and promptly update such registration information
            as necessary;]
          </p>
          <p>
            (3) you have the legal capacity and you agree to comply with these Terms and Conditions;
          </p>
          <p>
            [(4) you are not under the age of 16;]
          </p>
          <p>
            (5) not a minor in the jurisdiction in which you reside [, or if a minor, you have received parental
            permission to use the application];
          </p>
          <p>
            (6) you will not access the application through automated or non-human means, whether through a bot,
            script, or otherwise;
          </p>
          <p>
            (7) you will not use the application for any illegal or unauthorized purpose;
          </p>
          <p>
            (8) your use of the application will not violate any applicable law or regulation.
          </p>
          <p>
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
            suspend or terminate your account and refuse any and all current or future use of the application (or any
            portion thereof).
          </p>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, O Hi shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use of the application.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your Commitments</h2>
          <p>
            Providing a safe and secure Service for a diverse community requires that we all do our part. In return for
            our Commitment to provide our Services, we require you to make some commitments to us. Please note that
            you will solely bear the costs and consequences of any actions taken by you on the O hi Platform
            (including any violation of these Terms) along with the commitments given by you below.
          </p>

          <p>
            As part of the O hi platform we provide the Drop wall where you can update status and Live feeds feature
            which allows you to broadcast real-time photos/videos of yourself on the platform. Other users can
            comment on drop notes and photos/videos broadcasted by you thus allowing for real-time communication.
            All content uploaded using the Dropwall and feed feature is subject to the O hi Content and Community
            Guidelines. We may remove content that violates these Terms or our Community Guidelines. Users will
            be notified with a reason and may appeal such actions. We may, from time to time, add, remove or alter
            the functionality of the Wall and feed feature. We may also discontinue the wall and Live feed feature
            from the O hi platform at any time. We do not warrant that the Live feed feature will be error-free or
            always available, the wall and Live feed feature would always function without disruptions, or any
            content posted by other users using the Live feed feature will be accurate. Your profile will be accessible
            to users once you check in to cafes you visit for 12 hours, and it also stays in last checkin users profiles.
            We provide the wall and feed feature for you to interact on a real-time basis with other users but you shall
            not misuse the feature to upload content that is prohibited under the O hi Content and Community
            Guidelines. We do not warranty the continued availability of this feature.
          </p>

          <p>
            By using our Services, you agree and acknowledge the following:
          </p>
        </section>

        <section className="legal-section">
          <h2>No Impersonation or False Information to be Provided.</h2>
          <p>
            While you do not have to use your actual name on our Platform, you are required to input your correct
            phone number and gender to use our Services. You will not falsely represent yourself as another person or
            representative of another person to use our Services. In the event you are operating a parody account for
            satirical or comedic purposes, you must state the same in your O hi Bio.
          </p>
        </section>

        <section className="legal-section">
          <h2>Device Security</h2>
          <p>
            We have implemented measures to ensure that our Platform is secure. However, there is no guarantee that
            our Platform is immune to hacking and virus attacks. You will ensure that you have requisite anti-malware
            and antivirus software on your mobile device and computer to ensure its safety. You will not allow any
            person to use your phone number, and not allow multiple accounts to be linked to your phone number.
            You will be responsible for all content posted by any account linked to your phone number. While we do
            everything we can to secure your use of our Services, keep in mind that we cannot contemplate all forms
            of attack on our Platform. You should, as a matter of practice, ensure that your mobile device and
            computer are not used wrongly or tampered with in any way.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content Removal and Termination</h2>
          <p>
            Your usage of our Platform is governed by the O hi Content and Community Guidelines. If any of our
            users report your content which violates the O hi Content Community Guidelines, If your content is
            removed or your account is restricted, we will notify you with the reason and provide an option to appeal
            within 7 days via contact@ohiapp.com. In the event that multiple reports are made regarding
            violation of the O hi Content and Community Guidelines, we may be compelled to terminate your account
            with us and block you from registering with us. If you wish to appeal any such removal, you may write to
            us at contact@ohiapp.com.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content Rights and Liabilities</h2>
          <p>
            We strongly believe in the freedom of expression and allow you to share your thoughts on Drop wall and
            photographs, images, videos, and other content on our Platform. We do not have any ownership over any
            of the content shared by you and the rights in the content remain only with you. You will not use our
            Platform to violate or infringe upon our or any third-party&apos;s intellectual property rights. Such content is
            against O hi Content and Community Guidelines and may be removed from the Platform. Further, if you
            use any content developed by us, then we shall continue to own the intellectual property rights vested in
            such content.
          </p>

          <p>
            By posting content, you grant us a non-exclusive, revocable, royalty-free license to use such content
            solely for operating and promoting the service. This license terminates upon deletion of the content or
            your account, unless shared by other users. If not run, copy, publicly perform or display, translate, and
            create derivative works of your content (consistent with your privacy and application settings). You may
            delete your content and/or account at any point. However, your content may continue to appear on the
            Platform if it has been shared with others.
          </p>

          <p>
            You remain solely responsible for the content you post on our Platform. We do not endorse and are not
            responsible for any content shared or posted on or through our Platform, and for any consequences
            resulting out of such sharing or posting. The presence of our logo or any trademark on any content shared
            by you does not mean that we have endorsed or sponsored your content. Further, we will not be liable for
            or responsible for the consequences of any transactions made or entered into by you with other users of
            the Platform or advertisers on the Platform.
          </p>

          <p>
            You will always have ownership and responsibilities for the content you share. We will never claim that
            we have intellectual property rights over your content, but we will have a zero cost, permanent license to
            use what you share and post on our Platform.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content Usage</h2>
          <p><strong>(1) No Product/Service Provision</strong></p>
          <p>
            We do not sell, distribute, or provide any products or services of any brand to users.
            Any product-related discussions or mentions are solely user-generated and not endorsed by O hi App.
          </p>

          <p><strong>(2) No Content Creation Guidance</strong></p>
          <p>
            We do not encourage, train, or guide users in any specific content creation format.
            All content shared is at the sole discretion and responsibility of the user.
          </p>

          <p><strong>(3) Rights to Showcase Content</strong></p>
          <p>
            By posting on O hi App, you grant us a non-exclusive, royalty-free, worldwide license to showcase and
            feature your product-related content. Such content may be displayed on LED billboards, hoardings, and
            other media placements across India and globally for promotional purposes.
          </p>

          <p><strong>(4) User Responsibility</strong></p>
          <p>
            By posting on O hi App, you grant us a non-exclusive, royalty-free, worldwide license to showcase and
            feature your product-related content. Any third-party brand references in user content are the sole
            responsibility of the user and not of O hi App.
          </p>

          <p><strong>(5) Content Usage Limitation</strong></p>
          <p>
            Featured content will not be altered beyond formatting or sizing adjustments necessary for display.
            We will not claim ownership of your content; rights remain with the creator.
          </p>
        </section>

        <section className="legal-section">
          <h2>Safety; Your Interactions with Other Members</h2>
          <p>
            Though O hi strives to encourage a respectful member experience through features like the double opt-in
            that allows members to communicate only after they have both indicated interest in one another, O hi is
            not responsible for the conduct of any member on or off of the Service. You agree to use caution in all
            interactions with other members, particularly if you decide to communicate off the Service or meet in
            person. You agree that you will not provide your financial information (for example, your credit card or
            bank account information), or wire or otherwise send money to other members.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your Content</h2>
          <p>
            Our Products allow you and others around the world to share your pictures and videos to interact with
            each other in real time, and to share recordings of those interactions for others to enjoy later. They also
            allow you to post content, including visual images, text, and symbols. Anything you say, post, or make
            available in our Products is referred to as &quot;User Content.&quot;
          </p>
        </section>

        <section className="legal-section">
          <h2>User-Generated Content</h2>
          <p>
            O hi is not responsible for any music or other content uploaded or posted by the users. Users are solely
            responsible for ensuring that their content complies with all applicable laws and copyright regulations.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content Moderation and Tag Removal</h2>
          <p>
            O hi reserves the right to remove any tags that do not comply with the terms and conditions.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content Control and Reporting</h2>
          <p>
            O hi does not moderate user-posted content. However, users can report if they find any content which is
            inappropriate, offensive, infringing content or in violation of these Terms via the provided reporting
            process.
          </p>
        </section>

        <section className="legal-section">
          <h2>A. Your rights and responsibilities</h2>
          <p>
            O hi is a place for people to tell stories, develop ideas, deepen friendships, and meet interesting new
            people around the world. As part of this community, you must follow some guidelines as under when you
            use our Products. You are responsible for any activity that occurs in your account, so it&apos;s important that
            you keep your account secure. If you think that someone has gained unauthorized access to your account,
            please advise us immediately. You retain all ownership rights in the User Content you contribute to O hi.
            But you also give us legal permission to use that content as explained in the next section.
          </p>
          <p>
            Your content should not include anything that is violating the under –
          </p>
        </section>

        <section className="legal-section">
          <h2>Behavior that&apos;s not OK</h2>
          <p><strong>Harassing people</strong></p>
          <p>
            Don&apos;t harass anyone. Don&apos;t make lewd propositions, use extreme insults, or celebrate or mock someone
            experiencing a tragedy. Don&apos;t doxx people. Don&apos;t share, threaten to share, or incentivize the sharing of
            other people&apos;s private information.
          </p>

          <p><strong>Hateful or discriminatory speech or conduct</strong></p>
          <p>
            Don&apos;t incite hatred or discriminate against based on things like race, religion, national origin, caste, age,
            sex, gender identity, sexual orientation, or disability. This covers, but is not limited to, slurs, insults, and
            conspiracies. Accounts whose purpose is to promote hateful conduct are absolutely prohibited, as are hate
            organizations.
          </p>

          <p><strong>Threats of violence</strong></p>
          <p>
            Don&apos;t threaten violence or harm against any individual or group of individuals, glorify acts of violence
            against others, or encouraging others to commit acts of violence.
          </p>

          <p><strong>Trolling or disrupting the stage</strong></p>
          <p>
            Don&apos;t behave in a way that intentionally disrupts or ruins the experience for other people, like joining a
            stage and making abusive statements or loud noises. If you feel compelled to randomly make air horn
            sounds, please seek help.
          </p>
        </section>

        <section className="legal-section">
          <h2>Content that&apos;s not OK</h2>
          <p><strong>Child endangerment</strong></p>
          <p>
            Don&apos;t do anything to endanger children ever. We absolutely prohibit any sexualization of or solicitation of
            minors, and any content that may endanger their welfare. This includes the sharing of suggestive, sexual,
            mature, graphic, abusive, or otherwise inappropriate content with minors. Where appropriate, we report
            child endangerment to the National Centre for Missing and Exploited Children (NCMEC).
          </p>

          <p><strong>Graphic violence</strong></p>
          <p>
            Don&apos;t share media that includes excessive gore, themes of violence, harm to animals, or other forms of
            extreme violence that may shock or disgust people.
          </p>

          <p><strong>Harmful misinformation and disinformation</strong></p>
          <p>
            Don&apos;t spread harmful health misinformation, spread misinformation for the purpose of making money, or
            for the purpose of manipulating or interfering in elections or other civic processes. The promotion of
            &quot;synthetic&quot; or manipulated media that is intended or likely to cause harm is also prohibited.
          </p>

          <p><strong>Illegal activities and the sale of regulated goods or services</strong></p>
          <p>
            Don&apos;t share illegal content or use O hi to conduct any unauthorized or illegal activities, promote illegal
            activities, or to sell or market highly regulated goods and services.
          </p>

          <p><strong>Intellectual property violations</strong></p>
          <p>
            Don&apos;t engage in any conversations or upload any content that violates any intellectual property or other
            proprietary rights. If content violates your trademark or intellectual property, We will only investigate
            requests that are submitted by the rights-holder or their authorized representative.
          </p>

          <p><strong>Sexual exploitation</strong></p>
          <p>
            Don&apos;t share non-consensual sexual images, content that depicts or promotes sexual assault, or content that
            sexualize the unique attributes of young children in any way, even if that content features actual adults
            pretending to be children.
          </p>

          <p><strong>Suicide and Self-harm</strong></p>
          <p>
            Don&apos;t encourage or promote acts of self-harm or suicide.
          </p>

          <p><strong>Terrorism or violent extremism</strong></p>
          <p>
            Don&apos;t do anything that praises or promotes terrorism, violence, or proscribed terror groups. These
            organizations are neither welcome nor allowed on O hi, and the existence of accounts or use of accounts
            for the purpose of furthering violent or extremist ideologies or activities is prohibited.
          </p>

          <p><strong>Nudity</strong></p>
          <p>
            Just don&apos;t put content with No shirt, no bra, no pants, no undies, no service. We don&apos;t allow nudity or
            pornographic images on O hi.
          </p>

          <p><strong>Artificial behavior</strong></p>
          <p>
            Don&apos;t misrepresent or misuse your account in ways that could be confusing for other users. This includes
            adding fake &quot;account&quot; check marks (we don&apos;t have verification right now), fake information to your
            profile photo. We prohibit the artificial amplification or suppression of information, like bot audiences,
            and any attempts to manipulate the platform to enable this.
          </p>

          <p><strong>False reporting</strong></p>
          <p>
            Don&apos;t abuse our reporting systems. Mass fake incident report submissions or otherwise intentionally false
            reports of Community Guidelines violations are not allowed, and we suspend accounts who abuse reports.
          </p>

          <p><strong>Selling O hi features and growth</strong></p>
          <p>
            Don&apos;t sell O hi features. This includes but is not limited to the following: the sale or solicitation of O hi
            access, reach, or engagement (e.g., accounts, clubs, usernames, follows).
          </p>

          <p><strong>Threats to O hi</strong></p>
          <p>
            Don&apos;t threaten our team. We prohibit intentional threats to the O hi app, the privacy or security of user
            accounts, or to O hi employees, staff, or partners. This includes, but is not limited to, unwanted attempts
            to contact O hi employees, staff, or partners via personal channels including personal email addresses,
            phone numbers, in person visits, or via other unauthorized or invasive methods. Attempts to do so will
            constitute a violation and may be escalated to law enforcement.
          </p>

          <p><strong>Spam or scams</strong></p>
          <p>
            Some people like canned meat, but no one likes spam content. We don&apos;t allow irrelevant or unsolicited
            messages shared to other users, like sending unwanted or inappropriate chatroom invites, DMs, repeated
            requests to join chatrooms without their permission. We also prohibit the use of scam tactics to solicit
            money or private financial information, investment and financial schemes, or raiding funds directed
            towards individuals or organizations that may violate our guidelines.
          </p>
        </section>

        <section className="legal-section">
          <h2>YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS</h2>
          <p>
            YOU UNDERSTAND THAT O hi DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS
            MEMBERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS MEMBERS. O hi
            MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OR
            COMPATIBILITY OF MEMBERS.
          </p>
        </section>

        <section className="legal-section">
          <h2>USER REGISTRATION</h2>
          <p>
            You may be required to register with the application. You agree to keep your password confidential and
            will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or
            change a username / title you select if we determine, in our sole discretion, that such username is
            inappropriate, obscene, or otherwise objectionable.
          </p>

          <p>
            As a user you accept the terms of connecting and reaching out or allowing other people to reach out to
            you and wave at you to initiate conversation which can only begin when you wave back at them, you
            agree that you will be accessible to other users in the restaurant chatroom you are present at as part of this
            social network.
          </p>
        </section>

        <section className="legal-section">
          <h2>GUIDELINES FOR REVIEWS</h2>
          <p>
            We may provide you areas on the application/playstore/appstore to leave reviews or ratings. When posting
            a review/rating, you must comply with the following criteria:
          </p>
          <ol>
            <li>you should have firsthand experience with the person/entity/ being reviewed/rated;</li>
            <li>your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language;</li>
            <li>your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;</li>
            <li>your reviews should not contain references to illegal activity;</li>
            <li>you should not be affiliated with competitors if posting negative reviews;</li>
            <li>you should not make any conclusions as to the legality of conduct;</li>
            <li>you may not post any false or misleading statements;</li>
            <li>you may not organize a campaign encouraging others to post reviews, whether positive or negative.</li>
          </ol>

          <p>
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to
            screen reviews or to delete reviews/ratings, even if anyone considers reviews/ratings objectionable or
            inaccurate. Reviews/ratings are not endorsed by us, and do not necessarily represent our opinions or the
            views of any of our affiliates or partners.
          </p>

          <p>
            We do not assume liability for any review/rating or for any claims, liabilities, or losses resulting from any
            review/rating. By submitting a review, you grant O Hi a non-exclusive, revocable, royalty-free license to
            display and use your review solely for promotional or product improvement purposes and/or distribute all
            content relating to reviews/ratings.
          </p>
        </section>

        <section className="legal-section">
          <h2>SUBMISSIONS</h2>
          <p>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other
            information regarding the application (&quot;Submissions&quot;) provided by you to us are non-confidential and
            shall become our sole property. We shall own exclusive rights, including all intellectual property rights,
            and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful
            purpose, commercial or otherwise, without acknowledgment or compensation to you.
          </p>

          <p>
            You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such
            Submissions are original with you or that you have the right to submit such Submissions. You agree there
            shall be no recourse against us for any alleged or actual infringement or misappropriation of any
            proprietary right in your Submissions.
          </p>
        </section>

        <section className="legal-section">
          <h2>Apple Disclaimer</h2>
          <p>
            &gt; Apple Inc. is not a sponsor, nor is it involved in any way with this contest or sweepstakes.
          </p>

          <h2>Google Play Store Disclaimer</h2>
          <p>
            &gt; Play Store Inc. is not a sponsor nor is it involved in any way with this contest or sweepstakes.
          </p>
        </section>

        <section className="legal-section">
          <h2>Rewards</h2>
          <p>
            &gt; Users can redeem their earned coins in the O Hi Store, subject to the following limits per day:
          </p>
          <ul>
            <li>Minimum redemption: 500 coins</li>
            <li>Maximum redemption: 3000 coins</li>
            <li>Minimum daily redemption amount: Rs. 50 on partner platforms.</li>
          </ul>

          <h3>Reward Claim Process</h3>
          <p>
            &gt; Winners can claim their earnings directly in the O Hi Store.
          </p>
          <p>
            &gt; No separate notification or claim process is required.
          </p>

          <h3>Disclaimer</h3>
          <p>
            &gt; O Hi App is not responsible for issues or disputes arising from reward redemption.
          </p>
          <p>
            &gt; Users are responsible for complying with applicable rules and regulations related to contests and earning
            redemptions.
          </p>

          <p>
            For any questions or concerns, please contact us at rewards@ohiapp.com.
          </p>
        </section>

        <section className="legal-section">
          <h2>THIRD PARTY COLLABORATION</h2>
          <p>
            1. O hi has collaborated with a third-party provider (Partner) to offer exclusive services or promotions
            (Offer) to our users.
          </p>
          <p>
            2. The Partner is solely responsible for the Offer&apos;s content, quality, and delivery.
          </p>
          <p>
            3. We are not liable for any issues related to the Offer, including but not limited to: - Refunds or
            cancellations - Failure to transaction or delivery - Expiry of coupons or promo codes - Quality or
            performance of the Offer
          </p>
          <p>
            4. We disclaim responsibility for third-party Offers provided via the app. Any concerns must be raised
            with the Partner directly. We do not receive compensation for such Offers unless explicitly stated.
          </p>
          <p>
            5. The Partner&apos;s terms and conditions apply to the Offer, and users must agree to them before availing the
            Offer.
          </p>
          <p>
            6. We reserve the right to terminate or modify the collaboration without notice.
          </p>
          <p>
            7. These terms are governed by and construed in accordance with our standard terms and conditions and
            applicable laws.
          </p>
        </section>

        <section className="legal-section">
          <h2>Monetary Transactions and Withdrawals</h2>
          <p>
            All money withdrawals and transfers are subject to verification process. Failure to complete verification
            may result in delays or restrictions on withdrawals.
          </p>

          <h2>Earnings Disclaimer</h2>
          <p>
            O hi does not claim that users can earn money it all depends on brands liking your content.
            Accounts may be frozen and permanently restricted if suspicious activity is detected.
          </p>

          <h2>Coin Expiry</h2>
          <p>
            Coins not redeemed within 30 days on Leaderboard will expire.
          </p>
          <p>
            Coins not redeemed within 30 days on Reshare will expire.
          </p>
        </section>

        <section className="legal-section">
          <h2>O HI STORE</h2>
          <ol>
            <li>We are not responsible for any issues arising from users using their personal payment methods.</li>
            <li>Our responsibility is limited to coins redeemed through the application.</li>
            <li>Refunds for coins may take up to 30 days, and potentially longer if there is a technical issue.</li>
            <li>A single user can redeem a maximum of 1,000 coins within every 2 days.</li>
            <li>If any suspicious activity is detected, O hi reserves the right to deduct coins from that user&apos;s account.</li>
            <li>It is solely the user&apos;s responsibility to ensure the accuracy of their details while making any transaction
                on the app.</li>
            <li>Users can expect their coins to be redeemed within 24 - 48 hours; however, in case of an error, the
                process may take longer.</li>
          </ol>
        </section>

        <section className="legal-section">
          <h2>Changes to Terms &amp; Conditions</h2>
          <p>
            &gt; O Hi App reserves the right to update or modify these Terms & Conditions at any time.
          </p>
          <p>
            &gt; By participating, users acknowledge that they have read and agreed to these Terms & Conditions.
          </p>
          <p>
            &gt; O Hi App reserves the right to modify or cancel the contest without notice.
          </p>
          <p>
            &gt; Users consent to receiving communications from O Hi App.
          </p>
        </section>

        <section className="legal-section">
          <h2>Fame Tick</h2>
          <p>
            Users may apply for the fame tick that reflect their accomplishments within the app. Approvals are at the
            sole discretion of O hi and based on eligibility requirements.
          </p>
          <p>
            Badges are subject to periodic review, and O hi reserves the right to revoke Fame Tick from users who no
            longer meet the qualifying standards or violate platform policies.
          </p>
          <p>
            O hi is not liable for any personal, social, or reputational impacts that arise from displaying fame tick in
            public spaces or from interactions resulting from such visibility.
          </p>
          <p>
            O hi does not guarantee any specific outcomes, including increased public recognition, social engagement,
            or professional opportunities, as a result of fame tick display.
          </p>
        </section>

        <section className="legal-section">
          <h2>Child Sexual Abuse and Exploitation (CSAE) Policy</h2>
          <p>
            O hi is committed to protecting children from sexual abuse and exploitation. We strictly prohibit any
            content, behavior, or activity that involves child exploitation, abuse, or endangerment.
          </p>

          <p><strong>1. Zero Tolerance for CSAE</strong></p>
          <ul>
            <li>We do not allow: Any form of child sexual exploitation or abuse.</li>
            <li>Sharing or distributing CSAM (Child Sexual Abuse Material).</li>
            <li>Grooming, predatory behavior, or harmful interactions with minors.</li>
          </ul>

          <p><strong>2. Reporting &amp; Action</strong></p>
          <ul>
            <li>Users can <strong>report violations</strong> via &quot;contact@ohiapp.com&quot;.</li>
            <li>We <strong>immediately remove</strong> illegal content and report to law enforcement when necessary.</li>
            <li>Accounts violating our CSAE policy will be <strong>permanently banned</strong>.</li>
          </ul>

          <p><strong>3. Compliance with Legal Authorities</strong></p>
          <p>
            We comply with <strong>local & international laws</strong> regarding child protection, including:
          </p>
          <ul>
            <li>The Children&apos;s Online Privacy Protection Act (COPPA).</li>
            <li>The United Nations Convention on the Rights of the Child.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

