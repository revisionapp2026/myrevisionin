import type { LegalSection } from "@/components/legal-page";

/**
 * Policy text for REVISION. Contact details below are placeholders until the
 * operator supplies the registered entity name, address and support inbox.
 */
export const LEGAL_UPDATED = "20 September 2026";
export const SUPPORT_EMAIL = "reachout.revision@gmail.com";
export const COMPANY_NAME = "REVISION";

export const privacySections: LegalSection[] = [
  {
    heading: "1. Information we collect",
    paragraphs: [
      "We collect only what REVISION needs to give you your syllabus, save your revision progress and support your account.",
    ],
    bullets: [
      "Account information: your name, email address, chosen program (BBA or B.Com) and semester.",
      "Usage and technical information: device type, app version, crash logs and which screens you open, used to fix problems and improve the app.",
      "Content you provide: bookmarks, highlights, notes and the questions you type into Ask & Revise.",
      "Transaction information: plan purchased, amount, payment status and a transaction reference. Card and UPI credentials are handled by the payment provider, never stored by us.",
      "Information from sign-in providers, such as your email and name when you sign in with Google.",
    ],
  },
  {
    heading: "2. How we use information",
    bullets: [
      "To show your program's subjects, units, revision points and model papers.",
      "To create and secure your account and keep you signed in.",
      "To process premium purchases, refunds and support requests.",
      "To send in-app announcements about new revision material, model papers and premium benefits.",
      "To detect and prevent fraud, abuse and security incidents, and to meet legal obligations.",
    ],
  },
  {
    heading: "3. AI features",
    paragraphs: [
      "Ask & Revise, flashcards, illustrations and audio summaries send the topic or question you type to our AI provider so an explanation can be generated. We do not use your private content for unrelated purposes. Please avoid entering sensitive personal information into AI features.",
      "AI-generated study material is a revision aid. It can be incomplete or inaccurate, so always check it against your prescribed textbook before an exam.",
    ],
  },
  {
    heading: "4. Sharing of information",
    paragraphs: [
      "We share information only with the service providers that run REVISION — hosting, database and authentication, analytics, AI infrastructure and payment processing — and where the law requires it. We do not sell your personal information.",
    ],
  },
  {
    heading: "5. Data retention",
    paragraphs: [
      "We keep your account and study data for as long as your account is active, plus the period needed for records, disputes and legal obligations. You can ask us to delete your account at any time.",
    ],
  },
  {
    heading: "6. Security",
    paragraphs: [
      "Data is stored with row-level access rules so that your bookmarks, notes and payment records are readable only by you and by authorised administrators. No online service can be guaranteed to be completely secure.",
    ],
  },
  {
    heading: "7. Your rights",
    paragraphs: [
      `Subject to applicable law you may access, correct, export or delete your personal information, and withdraw permissions. Write to ${SUPPORT_EMAIL} and we may ask you to verify your identity before we act.`,
    ],
  },
  {
    heading: "8. Children",
    paragraphs: [
      "REVISION is built for college students and is not intended for children under 13. If we learn that a child's information was collected without permission, we will remove it.",
    ],
  },
  {
    heading: "9. Offline copies",
    paragraphs: [
      "When you read material offline or download a PDF, that copy is stored on your own device. Clearing app storage or uninstalling removes it.",
    ],
  },
  {
    heading: "10. Changes and contact",
    paragraphs: [
      `We may update this policy. Material changes will be announced inside the app. Questions: ${SUPPORT_EMAIL}.`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "1. Acceptance",
    paragraphs: [
      "By using REVISION you agree to these Terms of Use. If you do not agree, please do not use the app.",
    ],
  },
  {
    heading: "2. Eligibility and accounts",
    bullets: [
      "You must be old enough under local law to create an account and accept these terms.",
      "Give accurate details when you sign up and keep your password confidential.",
      "You are responsible for activity carried out through your account.",
    ],
  },
  {
    heading: "3. Acceptable use",
    paragraphs: [
      "Do not misuse the app: no interfering with its operation, bypassing premium locks or security controls, accessing another student's account, scraping or bulk-copying the study material, uploading unlawful content, or reselling access.",
    ],
  },
  {
    heading: "4. Study material and intellectual property",
    paragraphs: [
      "Revision points, model papers, solved answers, branding and the app itself are owned by or licensed to us and are provided for your personal exam preparation only. You may not redistribute, publish or sell them.",
      "REVISION is an independent study aid. It is not affiliated with, endorsed by or certified by any university or examination board, and it does not guarantee any exam result.",
    ],
  },
  {
    heading: "5. AI-generated output",
    paragraphs: [
      "AI explanations, flashcards, illustrations and audio are generated automatically and may be inaccurate or incomplete. Review them before relying on them.",
    ],
  },
  {
    heading: "6. Premium plans",
    paragraphs: [
      "Premium unlocks paid model papers and premium revision features for the plan you buy. Prices are shown before payment and include applicable taxes unless stated otherwise. Access begins once payment is confirmed.",
    ],
  },
  {
    heading: "7. Availability and changes",
    paragraphs: [
      'We may add, change, suspend or remove features for maintenance, security, legal or operational reasons. The app is provided on an "as is" and "as available" basis, to the extent permitted by law.',
    ],
  },
  {
    heading: "8. Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by law we are not liable for indirect, incidental or consequential loss arising from use of the app. Liability that cannot be excluded is limited to the amount you paid us in the preceding twelve months.",
    ],
  },
  {
    heading: "9. Suspension or termination",
    paragraphs: [
      "We may suspend or close an account for breach of these terms, fraud or security reasons. You may stop using REVISION at any time.",
    ],
  },
  {
    heading: "10. Governing law and contact",
    paragraphs: [
      `These terms are governed by the laws of India, and the courts of the operator's registered location have jurisdiction, subject to consumer protections that apply to you. Support: ${SUPPORT_EMAIL}.`,
    ],
  },
];

export const refundSections: LegalSection[] = [
  {
    heading: "1. Plans covered",
    paragraphs: [
      "This policy applies to premium purchases made inside REVISION, including the ₹199 and ₹399 plans. Where an app store or the law provides a different mandatory refund right, that right prevails.",
    ],
  },
  {
    heading: "2. When a refund is available",
    bullets: [
      "Duplicate or failed-but-charged transactions are refunded in full after verification.",
      "If premium material you paid for stays unavailable because of a problem on our side, we will refund, credit or extend your access.",
      "Requests made within 7 days of purchase where no premium paper has been opened are reviewed case by case.",
      "Change of mind after using premium material, or non-use of the plan, is generally not refundable.",
    ],
  },
  {
    heading: "3. How to request a refund",
    paragraphs: [
      `Email ${SUPPORT_EMAIL} from your registered address with the transaction reference, purchase date, plan name and a short reason. We may ask for details needed to verify the payment.`,
    ],
  },
  {
    heading: "4. Processing time",
    paragraphs: [
      "Approved refunds are initiated within 5–10 business days. The money reaching your account depends on your bank, UPI app or card issuer.",
    ],
  },
  {
    heading: "5. Cancellation",
    paragraphs: [
      "One-time plans do not renew, so there is nothing to cancel. If a renewing plan is offered in future, you can cancel it from Settings before the renewal date; cancelling stops future charges and does not by itself refund a period already paid for.",
    ],
  },
  {
    heading: "6. App store purchases",
    paragraphs: [
      "If you bought premium through Google Play or the Apple App Store, that store is the merchant of record and refunds must be requested through it.",
    ],
  },
  {
    heading: "7. Policy changes",
    paragraphs: [
      "We may update this policy. The version shown at the time of your purchase applies to that purchase.",
    ],
  },
];
