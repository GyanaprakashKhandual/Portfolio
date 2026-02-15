"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Scale, Clock, Users, FileText, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  const sections = [
    {
      title: "1. Information We Collect",
      icon: FileText,
      content: (
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="ml-6 space-y-2 text-gray-700 list-disc dark:text-gray-300">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Messages and communication content</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            We also automatically collect certain information when you visit our
            site, such as:
          </p>
          <ul className="ml-6 space-y-2 text-gray-700 list-disc dark:text-gray-300">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring/exit pages</li>
            <li>Operating system</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      icon: Users,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>We use the collected information to:</p>
          <ul className="ml-6 space-y-2 list-disc">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and communications</li>
            <li>Send you updates, newsletters (only with consent)</li>
            <li>Detect, prevent, and address technical issues or fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Data Sharing & Disclosure",
      icon: Shield,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We do <strong>not</strong> sell your personal information.
          </p>
          <p>We may share your information only in these limited cases:</p>
          <ul className="ml-6 space-y-2 list-disc">
            <li>
              With service providers who assist us (under strict
              confidentiality)
            </li>
            <li>To comply with legal requirements or valid legal process</li>
            <li>
              To protect the rights, property, or safety of us, our users, or
              the public
            </li>
            <li>
              In connection with a merger, acquisition, or sale of assets (with
              notice)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Data Security",
      icon: Shield,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, loss,
            misuse, or alteration.
          </p>
          <p className="text-sm italic">
            However, no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>
        </div>
      ),
    },
    {
      title: "5. Your Rights & Choices",
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="ml-6 space-y-2 list-disc">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent (where processing is based on consent)</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us at the email listed
            below.
          </p>
        </div>
      ),
    },
    {
      title: "6. Cookies & Tracking Technologies",
      icon: Clock,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and deliver personalized content.
          </p>
          <p>
            You can manage cookie preferences through your browser settings.
            Note that disabling cookies may limit site functionality.
          </p>
        </div>
      ),
    },
    {
      title: "7. Changes to This Policy",
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the new policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>
          <p className="font-medium">Last updated: January 27, 2026</p>
        </div>
      ),
    },
    {
      title: "8. Contact Us",
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="font-medium">
            Email:{" "}
            <a
              href="mailto:gyanaprakashkhnadual@gmail.com"
              className="hover:text-blue-600 dark:hover:text-white"
            >
              gyanaprakashkhnadual@gmail.com
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen text-black bg-white dark:bg-black dark:text-white">
      {/* Back button + Header */}
      <section className="px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-8 text-gray-600 group hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black/5 dark:bg-white/5">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              How we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-gray-200 shadow-sm bg-gray-50 dark:bg-gray-950 dark:border-gray-800 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  {section.icon && (
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5">
                      <section.icon className="w-6 h-6" />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>

                {section.content}
              </motion.div>
            ))}
          </div>

          {/* Final note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-sm text-center text-gray-500 dark:text-gray-500"
          >
            <p>© 2026 Gyana Prakash Khandual. All rights reserved.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
