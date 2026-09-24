import { MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaTwitch } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useState } from "react";



export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);

        }, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div flex items-start space-x-4>
                                <div className="h-6 w-6 text-primary/10">
                                    <MdEmail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="tel:+11234567890"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        hello@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-6 w-6 text-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+11234567890"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="h-6 w-6 text-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Vancouver, BC, Canada
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Links to connect */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <FaLinkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href="#" target="_blank">
                                    <FaTwitter />
                                </a>
                                <a href="#" target="_blank">
                                    <FaTwitch />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="pedro"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="john@gmail"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="Hello, I'd like to talk about...."
                                />
                            </div>
                            {/* Button to submit the form */}
                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {/* Send Message */}
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};