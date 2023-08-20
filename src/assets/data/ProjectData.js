import asl from "../images/asl.png";
import proteinarium from "../images/proteinarium.png";
import vgc from "../images/vgc.png";
import search from "../images/search.png";
import database from "../images/database.png";

const projectData = [
    {
        id: 1,
        title: 'Variant Graph Craft (VGC)',
        description: 'An interactive genomic variant visualization and analysis program.',
        longDescription: ['An interactive genomic variant visualization and analysis program.', 'Variant Graph Craft (VGC) offers a wide range of features for exploring genetic variations, including gene & range queries, graph representations, and statistical analyses. '],
        image: vgc,
        git: 'https://github.com/alperuzun/VGC',
        link: '',
        technologies: ['Electron', 'Java', 'Javascript', 'Tailwind CSS']
    },
    {
        id: 2,
        title: 'Real-time ASL Recognition',
        description: 'A deep learning model to identify ASL fingerspelling in real time.',
        longDescription: ['A deep learning architecture to label American Sign Language (ASL) fingerspelling from (1) static images and (2) real time footage.', 'Final project for CS 1470: Deep Learning, and a collaboration project by Grace Wan, Kyle Lam, Claire Yang, and Jennifer Li. '],
        image: asl,
        git: 'https://github.com/plumol/csci1470-final-project-ASL',
        link: '',
        technologies: ['Python', 'Numpy', 'Scikit Learn', 'OpenCV']
    },
    {
        id: 3,
        title: 'Proteinarium',
        description: 'An interactive web application for generating multi-layer graph networks from protein interactomes.',
        longDescription: ['An interactive web application for generating multi-layer graph networks from protein interactomes. Protein-protein interaction data based on Dijkstra or DIAMoND was used, and graphs were clustered by network similarity.', 'A collaboration project with the Dr. Uzun and Dr. Schuster labs.'],
        image: proteinarium,
        git: '',
        link: 'https://proteinarium.brown.edu/',
        technologies: ['React', 'Apache Spark', 'Typescript', 'Java']
    },
    {
        id: 4,
        title: 'Search Engine',
        description: 'An implementation of the Google PageRank algorithm; indexes XML documents and process search queries.',
        longDescription: ['An implementation of the Google PageRank algorithm; indexes XML documents and process search queries.', 'Optimizes search results by relevance, and outputs the top 10 most relevant documents.'],
        image: search,
        git: '',
        link: '',
        technologies: ['Python', 'XML']
    },
    {
        id: 5,
        title: 'Database',
        description: 'A simple server to manage a database of key-value pairs over a network. Supports multiple simultaneous users.',
        longDescription: ['A simple server to manage a database of key-value pairs over a network. ', 'Supports multiple simultaneous users, and allows for multi-threading, thread-safety, signal handling, and client cancellation.'],
        image: database,
        git: '',
        link: '',
        technologies: ['C', 'Shell', 'Makefile']
    }
  ];
  
  export default projectData;