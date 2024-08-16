"use client";

import { useState, useEffect } from "react";

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "What is the purpose of getStaticProps?",
    answer: "getStaticProps is used to fetch data at build time in Next.js.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("faqSearchTerm");
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    localStorage.setItem("faqSearchTerm", newSearchTerm);
  };

  const handleToggleExpand = (index) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleExpandAll = () => {
    setExpandAll(true);
    setExpandedIndex(null);
  };

  const handleCollapseAll = () => {
    setExpandAll(false);
    setExpandedIndex(null);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Frequently Asked Questions</h1>

      <input
        type='text'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search questions...'
        className='border border-gray-300 rounded p-2 mb-4 w-full'
      />

      <div className='mb-4'>
        <button
          onClick={handleExpandAll}
          className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
        >
          Expand All
        </button>
        <button
          onClick={handleCollapseAll}
          className='bg-gray-500 text-white px-4 py-2 rounded'
        >
          Collapse All
        </button>
      </div>

      {filteredFaqs.map((faq, index) => (
        <div key={index} className='mb-2 border-b border-gray-200 bg-slate-300'>
          <button
            onClick={() => handleToggleExpand(index)}
            className='w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none'
          >
            {faq.question}
          </button>
          {(expandAll || expandedIndex === index) && (
            <div className='px-4 py-2'>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
