import { connectDB } from "@/lib/mongodb";
import Project from "@/database/project.model";

const Projects = async () => {
    await connectDB();
    const projects = await Project.find().sort({ order: 1 }).lean();

    return (
        <section id="projects" className="bg-paper py-24">
            <div className="max-w-6xl mx-auto px-6">
        <span className="text-accent-deep text-sm font-semibold uppercase tracking-wide">
          — Projects
        </span>
                <h2 className="font-heading text-3xl font-semibold text-body mt-3 mb-10">
                    An overview of a project that I&apos;ve been involved.
                </h2>

                <div className="border-t border-line">
                    {projects.map((project, index) => (
                        <div
                            key={project._id.toString()}
                            className="border-b border-line py-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start"
                        >
              <span className="text-sm text-body-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

                            <div>
                                <h3 className="font-heading text-lg font-semibold text-body mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-body-muted max-w-xl">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 md:justify-end">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-body-muted border border-line rounded-full px-2.5 py-1"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;