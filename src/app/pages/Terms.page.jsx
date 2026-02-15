"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Shield,
  Clock,
  Users,
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsAndConditions() {
  const router = useRouter();

  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            These Terms and Conditions (&quot;Terms&quot;) constitute a legally
            binding agreement between you (&quot;you&quot;, &quot;user&quot;)
            and Gyana Prakash Khandual (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) regarding your access to and use of
            https://gyanprakash.vercel.app (the &quot;Site&quot;).
          </p>
          <p>
            By accessing, browsing, or using the Site, you acknowledge that you
            have read, understood, and agree to be bound by these Terms. If you
            do not agree, you must not use the Site.
          </p>
        </div>
      ),
    },
    {
      title: "2. Use of the Site",
      icon: FileText,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            You agree to use the Site only for lawful purposes and in accordance
            with these Terms. You must not:
          </p>
          <ul className="ml-6 space-y-2 list-disc">
            <li>
              Use the Site in any way that violates any applicable law or
              regulation
            </li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the Site or servers</li>
            <li>
              Copy, reproduce, modify, distribute, or create derivative works
              from any content without permission
            </li>
            <li>
              Use any robot, spider, scraper, or other automated means to access
              the Site
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Intellectual Property",
      icon: Shield,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            All content on the Site, including text, graphics, logos, images,
            code, projects, and documentation (&quot;Content&quot;), is owned by
            us or our licensors and protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license
            to view and access the Content for personal, non-commercial use
            only. Any other use requires our prior written consent.
          </p>
        </div>
      ),
    },
    {
      title: "4. User Content & Conduct",
      icon: Users,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            If you submit any content (e.g., through contact forms or messages),
            you grant us a non-exclusive, royalty-free, perpetual, irrevocable
            license to use, reproduce, modify, and display such content for the
            purpose of operating and improving the Site.
          </p>
          <p>
            You are solely responsible for any content you submit and agree not
            to post anything that is unlawful, harmful, threatening, abusive,
            defamatory, or infringes on third-party rights.
          </p>
        </div>
      ),
    },
    {
      title: "5. Third-Party Links & Services",
      icon: ExternalLink,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            The Site may contain links to third-party websites or services
            (e.g., GitHub, LinkedIn, project demos). We do not endorse or
            control these third parties and are not responsible for their
            content, privacy practices, or availability.
          </p>
          <p>
            Your use of any third-party sites is at your own risk and subject to
            their terms.
          </p>
        </div>
      ),
    },
    {
      title: "6. Disclaimer of Warranties",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            The Site and all Content are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, express or implied,
            including but not limited to warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, error-free,
            secure, or free of viruses or other harmful components.
          </p>
        </div>
      ),
    },
    {
      title: "7. Limitation of Liability",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of or inability to use the Site, even
            if advised of the possibility of such damages.
          </p>
          <p>Our total liability shall not exceed INR 1,000 (or equivalent).</p>
        </div>
      ),
    },
    {
      title: "8. Changes to Terms",
      icon: Clock,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We may update these Terms at any time. Changes will be posted on
            this page with an updated &quot;Last updated&quot; date. Your
            continued use of the Site after changes constitutes acceptance of
            the new Terms.
          </p>
          <p className="font-medium">Last updated: January 27, 2026</p>
        </div>
      ),
    },
    {
      title: "9. Governing Law & Dispute Resolution",
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            These Terms shall be governed by the laws of India, without regard
            to conflict of law principles. Any disputes arising from these Terms
            or your use of the Site shall be resolved exclusively in the courts
            located in Delhi, India.
          </p>
        </div>
      ),
    },
    {
      title: "10. Contact Us",
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            If you have any questions about these Terms, please contact us at:
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
      {/* Header / Back */}
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
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Governing your use of this website
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

          {/* Footer note */}
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
