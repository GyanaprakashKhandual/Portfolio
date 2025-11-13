'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen  bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block  bg-linear-to-r from-amber-600 to-orange-600 p-4 rounded-2xl mb-4"
                    >
                        <Mail className="w-12 h-12 text-white" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold  bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question or want to work together? I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Info Card */}
                        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200"
                                >
                                    <div className=" bg-linear-to-r from-amber-600 to-orange-600 p-3 rounded-lg">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Email</p>
                                        <p className="text-sm text-gray-600">gyanaprakashkhnadual@gmail.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200"
                                >
                                    <div className=" bg-linear-to-r from-amber-600 to-orange-600 p-3 rounded-lg">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Location</p>
                                        <p className="text-sm text-gray-600">BBSR, Odisha, India</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200"
                                >
                                    <div className=" bg-linear-to-r from-amber-600 to-orange-600 p-3 rounded-lg">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Phone</p>
                                        <p className="text-sm text-gray-600">+91 7606939833</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href="https://github.com/GyanaprakashKhandual"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className=" bg-linear-to-r from-amber-600 to-orange-600 p-3 rounded-xl text-white hover:shadow-lg transition-shadow"
                                >
                                    <Github className="w-6 h-6" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className=" bg-linear-to-r from-amber-600 to-orange-600 p-3 rounded-xl text-white hover:shadow-lg transition-shadow"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Email *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 transition-colors"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 transition-colors resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-50 border-2 border-green-200 text-green-700'
                                            : 'bg-red-50 border-2 border-red-200 text-red-700'
                                            }`}
                                    >
                                        {status.type === 'success' ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5" />
                                        )}
                                        <span>{status.message}</span>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full  bg-linear-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-200 max-w-2xl mx-auto">
                        <p className="text-gray-700">
                            I typically respond within <span className="font-bold text-amber-600">24 hours</span>.
                            Looking forward to connecting with you!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;