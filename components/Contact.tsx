"use client";

import React from 'react';
import {useActionState} from "react";
import {sendMessage, type ContactState} from "@/lib/actions/contact.actions";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const initialState: ContactState = {
    success: false
};

const Contact = () => {
    const [state, formAction, pending] = useActionState(sendMessage, initialState);
    return (
        <section id="contact" className="bg-ink py-24">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <span className="text-accent text-sm font-semibold uppercase tracking-wide">Contact</span>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mt-3 mb-4">
                    Let&apos;s discuss your next project ...
                </h2>
                <p className="text-muted mb-10">
                    I&apos;m currently interning at MetaBox Technology and always open to new opportunities to keep growing as a developer. Feel free to reach out — I usually reply quickly.
                </p>
                <form action={formAction} className="text-left space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm text-muted mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full rounded-lg bg-ink-soft border border-white/10 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-muted mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-lg bg-ink-soft border border-white/10 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm text-muted mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full rounded-lg bg-ink-soft border border-white/10 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                            placeholder="What would you like to say?"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-accent text-ink font-medium px-5 py-3 rounded-lg hover:bg-accent-deep transition-colors disabled:opacity-60"
                    >
                        {pending ? "Sending..." : "Send message →"}
                    </button>

                    {state.success && (
                        <p className="text-accent text-sm text-center">
                            Thanks! Your message has been sent.
                        </p>
                    )}
                    {state.error && (
                        <p className="text-sm text-center text-red-400">{state.error}</p>
                    )}
                </form>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-10 text-sm text-muted">
                    <a href="https://linkedin.com/" target={"_blank"}
                       className="flex items-center gap-2 hover:text-white transition-colors">
                       <FaLinkedin size={16}/> LinkedIn
                    </a>
                    <a href="https://github.com/Matthieu1510" target={"_blank"}
                       className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaGithub size={16} />GitHub
                    </a>
                    <a href="/cv.pdf" target={"_blank"}
                        className="flex items-center gap-2 hover:text-white transition-colors">
                        < FaFileAlt size={16}/>CV
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Contact
