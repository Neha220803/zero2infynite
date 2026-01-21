export const blogsData = {
  blogs: [
    {
      id: "1",
      slug: "building-local-llm-chat-app-langchain-ollama-fastapi",
      title:
        "Building a Local LLM-Powered Chat Application Using LangChain, Ollama, and FastAPI",
      author: "Mr.MELVIN",
      publishDate: "May 28, 2025",
      readTime: "3 min read",
      excerpt:
        "In the rapidly evolving world of AI, language models are no longer limited to cloud APIs. Thanks to open-source tools like LangChain, Ollama, and FastAPI, you can now run powerful conversational agents directly on your laptop.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*SAsEdrA8rGPpiELAWGqgLw.png",
      category: "AI & Machine Learning",
      content: [
        {
          type: "paragraph",
          text: "In the rapidly evolving world of AI, language models are no longer limited to cloud APIs. Thanks to open-source tools like LangChain, Ollama, and FastAPI, you can now run powerful conversational agents directly on your laptop — fully offline, fully modular, and fully under your control.",
        },
        {
          type: "paragraph",
          text: "This guide walks you through building a memory-enabled, agent-powered LLM application that supports tools like summarization, question answering, and sentiment analysis.",
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*SAsEdrA8rGPpiELAWGqgLw.png",
          alt: "LLM Application Architecture",
        },
        {
          type: "heading",
          level: 2,
          text: "Why Build a Local LLM Chat App?",
        },
        {
          type: "paragraph",
          text: "Many popular AI chatbots rely on cloud-based APIs, which can be costly and raise privacy concerns. Running an LLM locally provides full control over data and significantly reduces latency. Plus, it's a fantastic way to deepen your understanding of how these models work under the hood.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tools I Used",
        },
        {
          type: "list",
          items: [
            "LangChain: This library helps orchestrate interactions with language models, allowing you to chain prompts and manage conversations effectively.",
            "Ollama: A platform that allows running large language models locally on your device, ensuring privacy and faster response times.",
            "FastAPI: A modern, high-performance Python framework for building APIs, perfect for serving the chat backend.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Step 1: Setting Up Ollama",
        },
        {
          type: "paragraph",
          text: "First, I installed Ollama and set up a local instance of the LLM. This step is crucial because it allows the model to run on my own hardware rather than relying on external services.",
        },
        {
          type: "heading",
          level: 2,
          text: "Step 2: Integrating LangChain",
        },
        {
          type: "paragraph",
          text: "With Ollama running, I used LangChain to manage the conversation flow. LangChain lets you define how prompts are processed, enabling more dynamic and context-aware responses.",
        },
        {
          type: "heading",
          level: 2,
          text: "Step 3: Building the FastAPI Backend",
        },
        {
          type: "paragraph",
          text: "I built a simple API using FastAPI to handle requests from the front end. This API acts as the middleman — it receives user inputs, sends them to LangChain and Ollama, and returns the generated responses.",
        },
        {
          type: "paragraph",
          text: "Combined with FastAPI (for serving endpoints) and Ollama (for running LLMs like Mistral locally), LangChain unlocks a developer-friendly stack for modern AI applications.",
        },
        {
          type: "heading",
          level: 2,
          text: "Why Build This?",
        },
        {
          type: "list",
          items: [
            "✅ Privacy: Run LLMs like Mistral entirely on your machine",
            "✅ Modularity: Use FastAPI to expose endpoints cleanly",
            "✅ Memory: Track user conversations over time",
            "✅ Agents: Let the LLM decide which tool to use",
            "✅ Extensibility: Add new tools with minimal changes",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Why LangChain?",
        },
        {
          type: "paragraph",
          text: "LangChain is a powerful Python framework that simplifies the orchestration of Large Language Models (LLMs) by giving developers tools to:",
        },
        {
          type: "list",
          items: [
            "Create prompt templates",
            "Build chains of logic or tasks",
            "Store and retrieve conversation memory",
            "Use LLMs as agents that can call external tools",
            "Integrate seamlessly with APIs, vector databases, and local models",
          ],
        },
        {
          type: "paragraph",
          text: "LangChain works like a brain for your chatbot, coordinating all the moving pieces: Receives input, Routes it to tools or LLMs, Tracks conversation history, Returns clean, contextual responses.",
        },
        {
          type: "heading",
          level: 2,
          text: "How Agents Work in LangChain",
        },
        {
          type: "paragraph",
          text: "LangChain agents act as intelligent coordinators that interpret a user's intent and decide whether to respond directly or use a tool. When initialized, an agent is provided with:",
        },
        {
          type: "list",
          items: [
            "A language model (like Mistral via Ollama)",
            "A list of available tools (functions wrapped with metadata)",
            "Optional memory for context",
          ],
        },
        {
          type: "paragraph",
          text: "When the user submits a prompt, the agent:",
        },
        {
          type: "list",
          items: [
            "Uses the LLM to interpret the prompt",
            "Decides if a tool is required to answer",
            "Executes the appropriate tool if needed",
            "Returns the final answer to the user",
          ],
        },
        {
          type: "paragraph",
          text: "This allows the agent to dynamically delegate work to the right component, improving performance and making the system extensible.",
        },
        {
          type: "paragraph",
          text: "GitHub: https://github.com/MELVIN10101/LangChain-for-LLM-Application-Development",
        },
        {
          type: "paragraph",
          text: "LinkedIn: https://www.linkedin.com/in/melvin-cyberops/",
        },
      ],
    },
    {
      id: "2",
      slug: "building-advanced-rag-pipeline-chromadb-ollama",
      title:
        "Building an Advanced Retrieval-Augmented Generation (RAG) Pipeline Using ChromaDB and Ollama",
      author: "Mr.MELVIN",
      publishDate: "Jun 7, 2025",
      readTime: "3 min read",
      excerpt:
        "Retrieval-Augmented Generation (RAG) is a powerful architecture for combining information retrieval and large language models (LLMs) to give more grounded, accurate, and factual responses.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KgklGg2q54blDWZ2.png",
      category: "AI & Machine Learning",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Introduction",
        },
        {
          type: "paragraph",
          text: "Retrieval-Augmented Generation (RAG) is a powerful architecture for combining information retrieval and large language models (LLMs) to give more grounded, accurate, and factual responses. If you're a beginner aiming to go beyond toy examples of RAG and want to build something powerful using your own documents (like PDFs), this tutorial is for you.",
        },
        {
          type: "paragraph",
          text: "In this blog, I'll walk you through the complete workflow, code, and architecture of building an advanced RAG pipeline using:",
        },
        {
          type: "list",
          items: [
            "📄 PDF documents as knowledge source",
            "🧠 Ollama for LLM inference",
            "🧬 ChromaDB for vector database",
            "🤖 SentenceTransformers for embedding and re-ranking",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KgklGg2q54blDWZ2.png",
          alt: "RAG Pipeline Architecture",
        },
        {
          type: "paragraph",
          text: "GitHub: https://github.com/MELVIN10101/Advance-Retrieval--For-AI-Chroma#",
        },
        {
          type: "heading",
          level: 2,
          text: "Description of Each Step:",
        },
        {
          type: "list",
          items: [
            "PDF Document: The user provides a technical PDF (e.g., on rootkit development).",
            "Extract Text: Use PyPDF to pull raw text content.",
            "Recursive + Token Chunking: Use LangChain to break text into manageable chunks first by characters, then by token size.",
            "Embedding: Convert each chunk into vector format using SentenceTransformer.",
            "ChromaDB: Store vectors in a local vector DB to enable fast semantic search.",
            "Query Expansion: Use Ollama (Mistral) to expand the query with alternate phrasings.",
            "Search: Search ChromaDB for semantically similar documents.",
            "Re-Rank: Use CrossEncoder for precise scoring and ranking.",
            "RAG with Ollama: Pass top chunks and user query to the LLM for generation.",
            "Final Output: Show code-only answers tailored from the retrieved content.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Step-by-Step Explanation",
        },
        {
          type: "heading",
          level: 3,
          text: "1. PDF Extraction",
        },
        {
          type: "paragraph",
          text: "We begin by using pypdf to read the content from a PDF:",
        },
        {
          type: "code",
          language: "python",
          text: 'from pypdf import PdfReader\nreader = PdfReader("rootkit.pdf")\npdf_text = [p.extract_text().strip() for p in reader.pages if p.extract_text()]',
        },
        {
          type: "heading",
          level: 3,
          text: "2. Text Chunking",
        },
        {
          type: "paragraph",
          text: "To prepare for embedding, we chunk the text in two stages:",
        },
        {
          type: "paragraph",
          text: "a) Recursive Chunking",
        },
        {
          type: "code",
          language: "python",
          text: 'from langchain.text_splitter import RecursiveCharacterTextSplitter\nchar_splitter = RecursiveCharacterTextSplitter(\n    separators=["\\n\\n", "\\n", ". ", " ", ""],\n    chunk_size=1000,\n    chunk_overlap=0\n)\nchar_split_text = char_splitter.split_text(\'\\n\\n\'.join(pdf_text))',
        },
        {
          type: "paragraph",
          text: "b) Token-Aware Chunking",
        },
        {
          type: "code",
          language: "python",
          text: "from langchain.text_splitter import SentenceTransformersTokenTextSplitter\ntoken_splitter = SentenceTransformersTokenTextSplitter(chunk_overlap=0, tokens_per_chunk=256)\ntoken_split_text = []\nfor text in char_split_text:\n    token_split_text += token_splitter.split_text(text)",
        },
        {
          type: "paragraph",
          text: "This ensures chunks are within the model's context limits.",
        },
        {
          type: "heading",
          level: 3,
          text: "3. Vector Embedding and ChromaDB Storage",
        },
        {
          type: "paragraph",
          text: "Use SentenceTransformers to convert text chunks into embeddings:",
        },
        {
          type: "code",
          language: "python",
          text: "from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction\nembedding_function = SentenceTransformerEmbeddingFunction()",
        },
        {
          type: "paragraph",
          text: "Store them in ChromaDB:",
        },
        {
          type: "code",
          language: "python",
          text: 'import chromadb\nchroma_client = chromadb.Client()\nchroma_collection = chroma_client.create_collection("rootkit.pdf", embedding_function=embedding_function)\nids = [str(i) for i in range(len(token_split_text))]\nchroma_collection.add(ids=ids, documents=token_split_text)',
        },
        {
          type: "heading",
          level: 3,
          text: "4. Query Expansion Using LLM (Ollama)",
        },
        {
          type: "paragraph",
          text: "Generates multiple variations of the user query.",
        },
        {
          type: "code",
          language: "python",
          text: 'from langchain.llms import Ollama\nllm = Ollama(model="mistral")\n\ndef expand_query(query):\n    prompt = [\n        {"role": "system", "content": "You\'re an expert in query expansion. Expand the given technical query with synonyms and alternate phrasings."},\n        {"role": "user", "content": f"Expand this query for better search: {query}"}\n    ]\n    expanded = llm.invoke(query)\n    return [q.strip() for q in expanded.split("\\n") if q.strip()]',
        },
        {
          type: "heading",
          level: 3,
          text: "5. Semantic Search in ChromaDB",
        },
        {
          type: "paragraph",
          text: "This combines results across query expansions.",
        },
        {
          type: "code",
          language: "python",
          text: "result = []\nfor i in expanded_query:\n    res = chroma_collection.query(query_texts=[i], n_results=2)\n    result.extend(res['documents'][0])\nretrieved_docs = list(set(result))[:5]",
        },
        {
          type: "heading",
          level: 3,
          text: "6. CrossEncoder Re-Ranking",
        },
        {
          type: "paragraph",
          text: "Using a CrossEncoder model for precise scoring:",
        },
        {
          type: "code",
          language: "python",
          text: 'def rag(query, retrieved_documents):\n    info = "\\n\\n".join(retrieved_documents)\n    messages = [\n        {"role": "system", "content": "you are a rootkit developer, and help the user develop custom rootkit, you must give the output only as a code. answer only with the given information"},\n        {"role": "user", "content": f"question: {query}. \\n Information: {info}"}\n    ]\n    response = llm.invoke(messages)\n    print(response)',
        },
        {
          type: "paragraph",
          text: "This prompts the LLM with both query and filtered context to generate focused answers.",
        },
        {
          type: "heading",
          level: 2,
          text: "Final Thoughts",
        },
        {
          type: "paragraph",
          text: "This guide walks you through building a fully local RAG system from scratch. Every module and line of code is crafted to help you understand the workflow deeply — from parsing PDFs to re-ranking results and generating context-aware responses.",
        },
        {
          type: "paragraph",
          text: "Experiment by plugging in your own documents — be it security whitepapers, OS manuals, or machine learning research.",
        },
        {
          type: "paragraph",
          text: "✨ Hack it. Learn it. Localize it.",
        },
        {
          type: "paragraph",
          text: "Portfolio: https://melvin-cyberops-portfolio.vercel.app",
        },
      ],
    },
    {
      id: "3",
      slug: "advent-of-cyber-prep-track",
      title: "Advent of Cyber Prep Track",
      author: "Mr.MELVIN",
      publishDate: "Dec 2, 2025",
      readTime: "4 min read",
      excerpt:
        "The Advent of Cyber Prep Track provided a practical introduction to essential cybersecurity concepts and tooling covering password security, malware analysis, OS fundamentals, and log analysis.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lOzv5qT7AH4_nM3arof7oQ.png",
      category: "Cybersecurity",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Challenge 1 — Password Pandemonium",
        },
        {
          type: "paragraph",
          text: "Objective: Create a password that passes all system checks and isn't found in the leaked password list.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Click the 'view site' button",
            "Enter a password with at least 12 characters",
            "Include uppercase, lowercase, numbers, and symbols",
            "Copy the flag",
          ],
        },
        {
          type: "code",
          language: "text",
          text: "THM{StrongStart}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 2 — The Suspicious Chocolate.exe",
        },
        {
          type: "paragraph",
          text: "Objective: Determine if chocolate.exe is safe or infected.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Click the 'view site' button",
            "Click the 'Scan' Button",
            "Review the scan report (49 clean results, 1 malicious)",
            "Select malicious and click select button",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lOzv5qT7AH4_nM3arof7oQ.png",
          alt: "Malware Scan Results",
        },
        {
          type: "paragraph",
          text: "After clicking the submit button, the flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{NotSoSweet}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 3 — Welcome to the AttackBox!",
        },
        {
          type: "paragraph",
          text: "Objective: Find and read the hidden welcome message inside your AttackBox.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Click the 'view site' button",
            "Use ls to list files",
            "Use cd challenges/ to change directories",
            "Use cat welcome.txt to read the text file",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xeQ1fHE8nuogrGA4tsJjvg.png",
          alt: "Terminal Commands",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{Ready2Hack}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 4 — The CMD Conundrum",
        },
        {
          type: "paragraph",
          text: "Objective: Find the hidden flag file using Windows commands.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Click the 'view site' button",
            "Type the following commands inside the terminal",
          ],
        },
        {
          type: "code",
          language: "bash",
          text: "dir\ncd mystery_data\ndir /a\ntype hidden_flag.txt",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{WhereIsMcSkidy}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 5 — Linux Lore",
        },
        {
          type: "paragraph",
          text: "Objective: Locate McSkidy's hidden message in his Linux home directory.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Use cd /home/mcskidy/ to enter his folder",
            "Run ls -la to show all files",
            "Use cat .secret_message to reveal the flag",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hex-B1qX-FOftjtSMlJueg.png",
          alt: "Linux Terminal Output",
        },
        {
          type: "code",
          language: "text",
          text: "THM{TrustNoBunny}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 6 — The Leak in the List",
        },
        {
          type: "paragraph",
          text: "Objective: Check if McSkidy's email has appeared in a breach.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Enter mcskidy@tbfc.com into the breach checker",
            "Review results for each domain",
            "Identify the one marked 'Compromised'",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*i4f-MiMPaVOkE-QO2o12XQ.png",
          alt: "Breach Check Results",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{LeakedAndFound}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 7 — WiFi Woes in Wareville",
        },
        {
          type: "paragraph",
          text: "Objective: Log into the router and secure it with a strong new password.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Log in with username admin and password admin",
            "Go to 'Security Settings'",
            "Set a new strong password that passes validation",
          ],
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{NoMoreDefault}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 8 — The App Trap",
        },
        {
          type: "paragraph",
          text: "Objective: Find and remove the malicious connected app.",
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*4kADDmweMJjwRtrGTixb9Q.png",
          alt: "Connected Apps List",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Review the list of connected apps",
            "Select 'Eastmas Schedular'",
            "Click 'Revoke Access' for the Password Vault",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*SLcvdPVnRo1WoSCYJSBCzw.png",
          alt: "Revoke Access Confirmation",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{AppTrapped}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 9 — The Chatbot Confession",
        },
        {
          type: "paragraph",
          text: "Objective: Identify which chatbot messages contain sensitive information.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Read each line of the conversation",
            "Select the ones containing private data",
            "Submit your findings",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JNocywdDUKosdK_y6WT_yA.png",
          alt: "Chatbot Conversation Screenshot 1",
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Opcutf9ZKEll40K4B0VTjg.png",
          alt: "Chatbot Conversation Screenshot 2",
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*rz87ANUJikFyWL9cINR6Gw.png",
          alt: "Chatbot Conversation Screenshot 3",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{DontFeedTheBot}",
        },
        {
          type: "heading",
          level: 2,
          text: "Challenge 10 — The Bunny's Browser Trail",
        },
        {
          type: "paragraph",
          text: "Objective: Find the unusual User Agent in the HTTP log.",
        },
        {
          type: "paragraph",
          text: "Steps:",
        },
        {
          type: "list",
          items: [
            "Read the provided web log entries",
            "Compare them to common browsers (Chrome, Firefox, Edge)",
            "Identify and select the suspicious entry",
          ],
        },
        {
          type: "image",
          src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7n8qzpCLq9NZ5Jk2YUpLpw.png",
          alt: "HTTP Log Analysis",
        },
        {
          type: "paragraph",
          text: "The flag will be displayed. Copy and paste it.",
        },
        {
          type: "code",
          language: "text",
          text: "THM{EastmasIsComing}",
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion: Foundations in Cyber Defense",
        },
        {
          type: "paragraph",
          text: "The Advent of Cyber Prep Track provided a practical introduction to essential cybersecurity concepts and tooling. The ten challenges covered a range of basic defensive and offensive security tasks, helping to build a strong foundation in core areas:",
        },
        {
          type: "list",
          items: [
            "Authentication & Access Control (Challenges 1, 7, 8): Successfully demonstrated the importance of strong password creation and changing default credentials. It also highlighted the risk of malicious connected apps and the process of revoking unauthorized access.",
            "Malware & File Analysis (Challenge 2): Practiced the basic identification of a malicious file, distinguishing a threat from benign files based on a scan report.",
            "Operating System Fundamentals (Challenges 3, 4, 5): Gained familiarity with navigating and manipulating files in both Linux and Windows Command-Line Interfaces using commands like ls, cd, cat, dir, and type. This is critical for post-exploitation and forensic activities.",
            "Vulnerability & Breach Awareness (Challenge 6): Understood the significance of email breach checkers and recognizing when personal or organizational data has been compromised in a leak.",
            "Data Privacy & Security Policies (Challenge 9): Identified sensitive information within conversations, emphasizing the need for data privacy and controlling what information is shared, even with automated systems like chatbots.",
            "Log Analysis (Challenge 10): Introduced the basic concept of log review by identifying an unusual User Agent string in a web log, which is a common technique for detecting reconnaissance or malicious activity.",
          ],
        },
        {
          type: "paragraph",
          text: "LinkedIn: https://www.linkedin.com/in/melvin-cyberops/",
        },
        {
          type: "paragraph",
          text: "Portfolio: https://melvin-cyberops-portfolio.vercel.app/",
        },
      ],
    },
    {
      id: "4",
      slug: "advent-of-cyber-day-1-linux-cli-shells-bells",
      title: "Advent of Cyber Day 1: Linux CLI — Shells Bells",
      author: "Mr.MELVIN",
      publishDate: "Dec 2, 2025",
      readTime: "2 min read",
      excerpt:
        "Learn essential Linux command-line interface commands for cybersecurity including ls, grep, find, and sudo.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hex-B1qX-FOftjtSMlJueg.png",
      category: "Cybersecurity",
      content: [
        {
          type: "heading",
          level: 2,
          text: "TASK 2: Linux CLI",
        },
        {
          type: "paragraph",
          text: "1. Which CLI command would you use to list a directory?",
        },
        {
          type: "code",
          language: "bash",
          text: "ls",
        },
        {
          type: "paragraph",
          text: "2. Complete on machine - follow these commands:",
        },
        {
          type: "code",
          language: "bash",
          text: "cd Guides\nls -la\ncat .guides.txt",
        },
        {
          type: "paragraph",
          text: "3. Which command helped you filter the logs for failed logins?",
        },
        {
          type: "code",
          language: "bash",
          text: "grep",
        },
        {
          type: "paragraph",
          text: "4. Complete on machine",
        },
        {
          type: "code",
          language: "bash",
          text: "find /home/socmas -name *egg*\ncat /home/socmas/2025/eggstrike.sh",
        },
        {
          type: "paragraph",
          text: "5. Which command would you run to switch to the root user?",
        },
        {
          type: "code",
          language: "bash",
          text: "sudo su",
        },
        {
          type: "paragraph",
          text: "6. Finally, what flag did Sir Carrotbane leave in the root bash history?",
        },
        {
          type: "code",
          language: "text",
          text: "THM{until-we-meet-again}",
        },
        {
          type: "paragraph",
          text: "LinkedIn: https://www.linkedin.com/in/melvin-cyberops/",
        },
        {
          type: "paragraph",
          text: "Portfolio: https://melvin-cyberops-portfolio.vercel.app/",
        },
      ],
    },
    {
      id: "6",
      slug: "advent-of-cyber-2025-day-2-phishing-merry-clickmas",
      title: "Advent of Cyber 2025 Day 2: Phishing — Merry Clickmas",
      author: "Mr.MELVIN",
      publishDate: "Dec 3, 2025",
      readTime: "3 min read",
      excerpt:
        "Learn how phishing attacks work through setting up malicious servers, crafting deceptive emails, harvesting credentials, and breaching admin portals.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lOzv5qT7AH4_nM3arof7oQ.png",
      category: "Cybersecurity",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Part 1: Setting the Stage — The Malicious Server",
        },
        {
          type: "paragraph",
          text: "The attacker's first move: Set up a local web server that would serve as the bait.",
        },
        {
          type: "paragraph",
          text: "In one terminal, the attacker navigated to the malicious server directory and started it:",
        },
        {
          type: "code",
          language: "bash",
          text: "cd /path/to/server/directory\npython3 server.py",
        },
        {
          type: "paragraph",
          text: "The server sprang to life, listening on http://0.0.0.0:8000. This innocent-looking web page would soon become the trap.",
        },
        {
          type: "paragraph",
          text: "What happened: The server was now ready to receive phishing victims and harvest their credentials. Every unsuspecting elf who clicked the link would have their username and password logged here.",
        },
        {
          type: "heading",
          level: 2,
          text: "Part 2: Crafting the Perfect Deception — The Phishing Campaign",
        },
        {
          type: "paragraph",
          text: "In a second terminal, the attacker launched the Social Engineering Toolkit (SET), a framework designed to automate social engineering attacks:",
        },
        {
          type: "code",
          language: "bash",
          text: "sudo setoolkit",
        },
        {
          type: "paragraph",
          text: "The menu appeared before them, and the attacker knew exactly where to go:",
        },
        {
          type: "paragraph",
          text: "Navigation Path:",
        },
        {
          type: "list",
          items: [
            "Option 1: Social-Engineering Attacks",
            "Option 5: Mass Mailer Attack",
            "Option 1: E-Mail Attack Single Email Address",
          ],
        },
        {
          type: "paragraph",
          text: "Now came the delicate part — crafting an email so convincing that even the most security-conscious elf would click the link.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Email Configuration",
        },
        {
          type: "paragraph",
          text: "Recipient: factory@wareville.thm",
        },
        {
          type: "paragraph",
          text: "This was no random target. 'Factory' was the warehouse manager responsible for coordinating all toy shipments. If anyone would click a link about shipping schedule changes, it would be them.",
        },
        {
          type: "paragraph",
          text: "Delivery Method: Option 2 (Use your own server)",
        },
        {
          type: "paragraph",
          text: "The attacker would use their own SMTP server to send the email, making it appear legitimate.",
        },
        {
          type: "paragraph",
          text: "Email Headers:",
        },
        {
          type: "list",
          items: [
            "From Address: updates@flyingdeer.thm",
            "From Name: Flying Deer",
            "Username: (Left blank)",
            "Password: (Left blank)",
          ],
        },
        {
          type: "paragraph",
          text: "SMTP Configuration:",
        },
        {
          type: "list",
          items: [
            "Server: 10.80.129.195",
            "Port: 25",
            "Email Priority: No (to avoid suspicion)",
          ],
        },
        {
          type: "paragraph",
          text: "Attachments: None (clean and simple)",
        },
        {
          type: "paragraph",
          text: "Email Details:",
        },
        {
          type: "list",
          items: [
            "Subject: Shipping Schedule Changes",
            "Format: Plain text (more trustworthy than HTML)",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The Email Body — The Hook",
        },
        {
          type: "code",
          language: "text",
          text: "Dear elves,\n\nKindly note that there have been significant changes to the shipping\nschedules due to increased shipping orders.\n\nPlease confirm the new schedule by visiting http://[ATTACKER_IP]:8000\n\nBest regards,\nFlying Deer",
        },
        {
          type: "paragraph",
          text: "The message was perfect. It referenced real shipping concerns (which were everywhere during peak season), created a sense of urgency, and included a single call-to-action link. The attacker had perfectly mimicked legitimate internal communications.",
        },
        {
          type: "paragraph",
          text: "What the attacker knew: When the factory manager clicked that link, they would be redirected to the malicious server. There, they would see what appeared to be a legitimate login page. Their credentials would be captured and logged.",
        },
        {
          type: "heading",
          level: 2,
          text: "Part 3: The Strike — Credentials Harvested",
        },
        {
          type: "paragraph",
          text: "The email was sent. Now came the waiting game.",
        },
        {
          type: "paragraph",
          text: "Soon enough, the factory manager received the email about shipping schedule changes. The pressure of the holiday season, the familiar sender address, and the urgent tone combined perfectly. They clicked the link without hesitation.",
        },
        {
          type: "paragraph",
          text: "Back on the attacker's terminal, running the server.py script, a message appeared:",
        },
        {
          type: "code",
          language: "text",
          text: "[+] Credentials Captured!\nUsername: factory\nPassword: unranked-wisdom-anthem",
        },
        {
          type: "paragraph",
          text: "The trap had sprung. The attacker now possessed the factory manager's login credentials.",
        },
        {
          type: "heading",
          level: 2,
          text: "Part 4: The Admin Portal Breach",
        },
        {
          type: "paragraph",
          text: "With credentials in hand, the attacker opened a browser and navigated to:",
        },
        {
          type: "code",
          language: "text",
          text: "http://[MACHINE_IP]:8080",
        },
        {
          type: "paragraph",
          text: "The TBFC admin portal appeared. The login page gleamed with festive decorations, completely unaware of the compromise about to unfold.",
        },
        {
          type: "paragraph",
          text: "Login Attempt:",
        },
        {
          type: "list",
          items: ["Username: factory", "Password: unranked-wisdom-anthem"],
        },
        {
          type: "paragraph",
          text: "The credentials worked perfectly. The attacker was now logged into the admin panel with full access to TBFC's operations.",
        },
        {
          type: "paragraph",
          text: "What the attacker found: Deep within the admin portal lay sensitive information about toy shipments, delivery schedules, and most importantly, the total inventory: 1,984,000 toys expected for delivery.",
        },
        {
          type: "paragraph",
          text: "This information would be valuable to anyone with nefarious intentions — supply chain disruption could cause chaos during the critical holiday season.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Answers",
        },
        {
          type: "paragraph",
          text: "Question 1: What is the password used to access the TBFC portal?",
        },
        {
          type: "paragraph",
          text: "Answer: unranked-wisdom-anthem",
        },
        {
          type: "paragraph",
          text: "Question 2: What is the total number of toys expected for delivery?",
        },
        {
          type: "paragraph",
          text: "Answer: 1,984,000",
        },
      ],
    },
    {
      id: "7",
      slug: "advent-of-cyber-2025-day-3-splunk-basics-did-you-siem",
      title: "Advent of Cyber 2025 — Day 3: Splunk Basics — Did you SIEM?",
      author: "Mr.MELVIN",
      publishDate: "Dec 4, 2025",
      readTime: "2 min read",
      excerpt:
        "A web server has been compromised. Analyze logs using Splunk to identify the attacker's IP address, traffic patterns, SQL injection tools, and data exfiltration attempts.",
      featuredImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lOzv5qT7AH4_nM3arof7oQ.png",
      category: "Cybersecurity",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Challenge Overview",
        },
        {
          type: "paragraph",
          text: "Scenario: A web server has been compromised, and we need to analyze the logs using Splunk to identify:",
        },
        {
          type: "list",
          items: [
            "The attacker's IP address",
            "Traffic patterns and anomalies",
            "Attack vectors used (SQL injection tools, path traversal)",
            "Data exfiltration to Command & Control (C2) servers",
          ],
        },
        {
          type: "paragraph",
          text: "Tools Used: Splunk Web Interface",
        },
        {
          type: "heading",
          level: 2,
          text: "Getting Started with Splunk",
        },
        {
          type: "heading",
          level: 3,
          text: "Accessing the Splunk Interface",
        },
        {
          type: "list",
          items: [
            "Open the Splunk interface using the link provided in Task 1",
            "From the left navigation pane, select 'Search & Reporting'",
            "This takes you to the main search interface where we'll conduct our investigation",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Understanding the Search Bar",
        },
        {
          type: "paragraph",
          text: "The Splunk search bar uses Search Processing Language (SPL). For this challenge, we'll start with a basic query:",
        },
        {
          type: "code",
          language: "spl",
          text: "index=main",
        },
        {
          type: "paragraph",
          text: "Important: Set the time range to 'All time' from the drop down on the right side of the search bar to ensure we capture all available logs.",
        },
        {
          type: "heading",
          level: 2,
          text: "QUESTIONS:",
        },
        {
          type: "heading",
          level: 3,
          text: "Question 1: What is the attacker IP found attacking and compromising the web server?",
        },
        {
          type: "paragraph",
          text: "Answer: 198.51.100.55",
        },
        {
          type: "paragraph",
          text: "Investigation Steps:",
        },
        {
          type: "list",
          items: [
            "Navigate to Search & Reporting",
            "Enter the search query: index=main",
            "Set time range to 'All time'",
            "Look at the left panel under 'INTERESTING FIELDS'",
            "Click on client_ip field",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Question 2: Which day was the peak traffic in the logs? (Format: YYYY-MM-DD)",
        },
        {
          type: "paragraph",
          text: "Answer: 2025-10-12",
        },
        {
          type: "paragraph",
          text: "Investigation Steps:",
        },
        {
          type: "list",
          items: [
            'Use the search query: index=main sourcetype="web_traffic"',
            "Examine the timeline visualization at the top of the results",
            "Identify the tallest bar in the histogram",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Question 3: What is the count of Havij user_agent events found in the logs?",
        },
        {
          type: "paragraph",
          text: "Answer: 993",
        },
        {
          type: "paragraph",
          text: "Investigation Steps:",
        },
        {
          type: "list",
          items: [
            "Ensure your search query is: index=main",
            "In the left panel under 'INTERESTING FIELDS', click on user_agent",
            "Look for the Havij entry and note its count",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Question 4: How many path traversal attempts to access sensitive files on the server were observed?",
        },
        {
          type: "paragraph",
          text: "Answer: 658",
        },
        {
          type: "paragraph",
          text: "Investigation Steps:",
        },
        {
          type: "list",
          items: [
            "Use the base search query: index=main",
            "In the left panel under 'INTERESTING FIELDS', click on path",
            "Look for entries attempting to access sensitive files (e.g., containing passwd, ../, directory traversal sequences)",
            "Note the count for suspicious paths",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Question 5: Examine the firewall logs. How many bytes were transferred to the C2 server IP from the compromised web server?",
        },
        {
          type: "paragraph",
          text: "Answer: 126167",
        },
        {
          type: "paragraph",
          text: "Investigation Steps:",
        },
        {
          type: "paragraph",
          text: "This question requires a more advanced SPL query to analyze firewall logs specifically.",
        },
        {
          type: "paragraph",
          text: "Search Query:",
        },
        {
          type: "code",
          language: "spl",
          text: 'sourcetype="firewall_logs" src_ip="10.10.1.5" AND dest_ip="198.51.100.55" AND action="ALLOWED" \n| stats sum(bytes_transferred) by src_ip',
        },
        {
          type: "paragraph",
          text: "Happy Hunting! 🎄🔍",
        },
        {
          type: "paragraph",
          text: "If you found this writeup helpful, consider following me for more cybersecurity content and CTF walkthroughs. Stay curious, stay secure!",
        },
      ],
    },
  ],
};
