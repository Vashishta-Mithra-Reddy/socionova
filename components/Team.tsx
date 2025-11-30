"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-nippo font-bold mb-4">
            The Team
          </h2>
          <p className="text-zinc-400 text-lg">
            The minds behind your exponential growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group w-full max-w-[250px]"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:border-primary transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full scale-100 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold font-nippo">{member.name}</h3>
              <p className="text-primary font-medium text-sm mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
