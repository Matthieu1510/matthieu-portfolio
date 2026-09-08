import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-accent-deep text-sm font-semibold uppercase tracking-wide">
                    — About
                </span>
                <h2 className="font-heading text-3xl font-semibold text-body mt-3 mb-6">
                    A curious student who bridges design and code.
                </h2>
                <div className="space-y-4 text-body-muted">
                    <p>
                        I&apos;m a second-year BSc (Hons) Software Engineering student, passionate about front-end development and about the moment a design becomes a real, working interface.
                    </p>
                    <p>
                        I&apos;m currently interning at MetaBox Technology, in Port Louis, where I&apos;m here to discover what it&apos;s like to work on a real client project — team workflows, version control, and the tools of the trade beyond the classroom.
                    </p>
                    <p>
                        Outside of coursework and the internship, I like to play basketball, to take care of myself, watch a movie and read books.
                    </p>
                </div>
            </div>
            <div className="relative aspect-[3/4] rounded-xl  overflow-hidden">
                <Image
                    src="/images/profile1.png"
                    alt="Matthieu"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}
export default About