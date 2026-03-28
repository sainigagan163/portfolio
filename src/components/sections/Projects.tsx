import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: 'End-to-End Chicken Disease Classification',
    description: 'Developed a CNN-based deep learning model to classify chicken diseases from images. Managed the workflow, including configuration setup, pipeline creation, and version control with DVC. Automated deployment on AWS and Azure through CI/CD using GitHub Actions.',
    technologies: ['Python', 'TensorFlow', 'Docker', 'AWS', 'GitHub Actions', 'DVC'],
    imageUrl: 'images/projects/chicken-disease.jpg',
    githubUrl: 'https://github.com/sainigagan163/CNN-Chicken-Disease-Classification',
    category: 'ML',
  },
  {
    title: 'End-to-End Text Summarizer with AWS',
    description: 'Developed a text summarization pipeline using NLP techniques. The project included configuration management, pipeline creation, and deployment automation via CI/CD using GitHub Actions. Dockerized the application and deployed it on AWS EC2.',
    technologies: ['Python', 'NLP', 'AWS', 'Docker', 'GitHub Actions'],
    imageUrl: 'images/projects/text-summarizer.jpg',
    githubUrl: 'https://github.com/sainigagan163/NLP-Text-Summarizer',
    category: 'NLP',
  },
  {
    title: 'LLM Agents Using LangChain & OpenAI',
    description: 'Built agents with LangChain and OpenAI for tasks like weather retrieval and word count analysis. Integrated OpenWeatherMap and DuckDuckGo Search for real-time data.',
    technologies: ['LangChain', 'OpenAI', 'Python', 'APIs'],
    imageUrl: 'images/projects/llm-agents.jpg',
    githubUrl: 'https://github.com/sainigagan163/LLM-Agents-LangChain-And-OpenAI',
    category: 'NLP',
  },
  {
    title: 'LLM Conversational RAG Application',
    description: 'Integrated Pinecone as the vector database to provide contextually accurate and relevant responses. Utilized LangChain for managing prompt templates, retrievers, and document loaders.',
    technologies: ['LangChain', 'Pinecone', 'RAG', 'Python'],
    imageUrl: 'images/projects/rag-app.jpg',
    githubUrl: 'https://github.com/sainigagan163/LLM-Conversational-RAG-App-LangChain-and-OpenAI',
    category: 'NLP',
  },
  {
    title: 'RNN LSTM Sentiment Analysis IMDB Reviews',
    description: 'This project uses RNN and LSTM models for sentiment analysis on IMDB movie reviews, classifying them as positive or negative.',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    imageUrl: 'images/projects/imdb.jpg',
    githubUrl: 'https://github.com/sainigagan163/RNN-LSTM-Sentiment-Analysis-IMDB-Reviews',
    category: 'ML',
  },
  {
    title: 'RNN LSTM Next Word Prediction Application',
    description: 'RNN-LSTM Next Word Prediction Application is a machine learning project that uses Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) networks to predict the next word in a sequence.',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    imageUrl: 'images/projects/next-word.jpg',
    githubUrl: 'https://github.com/sainigagan163/RNN-LSTM-Next-Word-Prediction-Application',
    category: 'ML',
  },
  {
    title: 'Brain Tumor Segmentation K-Means Clustering',
    description: 'This project involves segmenting brain tumors from MRI images using the K-Means clustering algorithm. The objective is to perform unsupervised image segmentation to isolate tumor regions from the MRI scans.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
    imageUrl: 'images/projects/brain-tumor.jpg',
    githubUrl: 'https://github.com/sainigagan163/Brain-Tumor-Segmentation-K-Means-Clusturing',
    category: 'ML',
  },
  {
    title: 'Fake News Detection',
    description: 'NLP project for detecting fake news using advanced text analysis and machine learning techniques. Implemented text preprocessing, feature extraction, and classification models.',
    technologies: ['Python', 'NLP', 'Scikit-learn', 'NLTK'],
    imageUrl: 'images/projects/fake-news.jpg',
    githubUrl: 'https://github.com/sainigagan163/Fake-News-Prediction-NLP',
    category: 'NLP',
  },
  {
    title: 'CNN Potato Disease Classification',
    description: 'Potato Disease Classification: A machine learning project for identifying potato leaf diseases, featuring a Streamlit web interface and a FastAPI backend for predictions.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'Streamlit'],
    imageUrl: 'images/projects/potato.jpg',
    githubUrl: 'https://github.com/sainigagan163/CNN-Potato-Disease-Classification-Streamlit-FastApi',
    category: 'ML',
  },
  {
    title: 'AWS Sagemaker Build And Deploy Model',
    description: 'An end-to-end machine learning solution built using Amazon SageMaker, integrating AWS services like Lambda, API Gateway, IAM, and S3.',
    technologies: ['AWS Lambda', 'API Gateway', 'IAM', 'Amazon S3'],
    imageUrl: 'images/projects/sagemaker.jpg',
    githubUrl: 'https://github.com/sainigagan163/AWS-Sagemaker-Build-And-Deploy-Model',
    category: 'DevOps',
  },
  {
    title: 'GitHub Docker and Jenkins CI-CD Pipeline',
    description: 'This project contains code for setting up a CI/CD pipeline using Docker and Jenkins. The pipeline automates the process of building, testing, and deploying applications.',
    technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'CI-CD'],
    imageUrl: 'images/projects/jenkins-app.jpg',
    githubUrl: 'https://github.com/sainigagan163/GitHub-Docker-and-Jenkins-CI-CD-Pipeline',
    category: 'DevOps',
  },
  {
    title: 'Trendy Restaurant E Commerce Platform',
    description: "Cafe ZARZA's online food ordering system offers a modern dining experience with a visually stunning interface. Features include a homepage, product catalog, shopping cart, checkout process, and user authentication.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    imageUrl: 'images/projects/zarza.jpg',
    githubUrl: 'https://github.com/sainigagan163/Trendy-Restaurant-E-Commerce-Platform',
    category: 'Full Stack',
  },
];

const categories = ['All', 'ML', 'NLP', 'DevOps', 'Full Stack'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isVisible } = useScrollReveal();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Projects"
          subtitle="Selected case studies in ML, analytics, and data platforms"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-500/25'
                  : 'border border-emerald-400/20 text-gray-300 hover:border-emerald-400/50 hover:text-white bg-slate-900/60'
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-70">
                ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="animate-fadeIn">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
