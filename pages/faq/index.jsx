import FaqComponent from "@/components/section/Faq";
import { questions } from "@/utils/data/faq";
import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-blue-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-20">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        </p>
        <div className="space-y-4 text-2xl">
          {questions.map((faq) => (
            <FaqComponent
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
