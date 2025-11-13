import { NextResponse } from 'next/server';

// In-memory storage (replace with actual database in production)
let blogs = [
  {
    id: 1,
    title: 'Getting Started with Caffetest',
    slug: 'getting-started-caffetest',
    excerpt: 'Learn how to set up and use Caffetest for your test automation workflow',
    content: `
      <h2>Introduction to Caffetest</h2>
      <p>Caffetest is a revolutionary AI-powered test management platform that integrates seamlessly with your existing tools.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>AI-powered test case generation</li>
        <li>Automatic bug creation from failed tests</li>
        <li>Voice-controlled management</li>
        <li>Multiple view options</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To get started with Caffetest, simply install our VS Code extension and connect your workspace.</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-13',
    category: 'Tutorial',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224515/Screenshot_2025-10-23_163532_vw9zpf.png',
    tags: ['Getting Started', 'Tutorial', 'Caffetest'],
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'AI-Powered Test Automation: The Future is Here',
    slug: 'ai-powered-test-automation',
    excerpt: 'Discover how AI is revolutionizing test automation and bug tracking',
    content: `
      <h2>The Power of AI in Testing</h2>
      <p>Artificial Intelligence is transforming how we approach test automation. With Caffetest, you can leverage AI to automatically generate test cases and detect bugs.</p>
      
      <h3>Benefits of AI-Powered Testing</h3>
      <ul>
        <li>Reduce manual effort by 80%</li>
        <li>Improve test coverage</li>
        <li>Faster bug detection</li>
        <li>Intelligent test case generation</li>
      </ul>
      
      <h3>Real-World Applications</h3>
      <p>Companies using AI-powered testing have seen significant improvements in their development cycles.</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-10',
    category: 'AI & Automation',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224342/Screenshot_2025-10-23_182638_feiea1.png',
    tags: ['AI', 'Automation', 'Testing'],
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Integrating VS Code with Caffetest',
    slug: 'vscode-integration-guide',
    excerpt: 'Step-by-step guide to integrate Caffetest with your VS Code workspace',
    content: `
      <h2>VS Code Integration</h2>
      <p>Learn how to seamlessly integrate Caffetest with Visual Studio Code for a streamlined testing workflow.</p>
      
      <h3>Installation Steps</h3>
      <ol>
        <li>Install the Caffetest extension from VS Code marketplace</li>
        <li>Configure your API credentials</li>
        <li>Connect to your Caffetest workspace</li>
        <li>Start writing automation tests</li>
      </ol>
      
      <h3>Key Features</h3>
      <p>The VS Code extension provides real-time sync, automatic test case generation, and intelligent code completion.</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-08',
    category: 'Integration',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224479/Screenshot_2025-10-23_175546_netcwr.png',
    tags: ['VS Code', 'Integration', 'Setup'],
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Voice-Controlled Test Management',
    slug: 'voice-controlled-testing',
    excerpt: 'Control your entire testing workflow using voice commands with AI chatbot',
    content: `
      <h2>The Future of Test Management</h2>
      <p>Caffetest introduces voice-controlled test management through an intelligent AI chatbot.</p>
      
      <h3>What You Can Do</h3>
      <ul>
        <li>Filter bugs by priority, date, or assignee</li>
        <li>Generate reports instantly</li>
        <li>Create and assign tasks</li>
        <li>Query test results</li>
      </ul>
      
      <h3>Example Commands</h3>
      <p>"Show me all high-priority bugs from last week"</p>
      <p>"Generate a test coverage report for Project X"</p>
      <p>"Assign all pending bugs to John"</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-05',
    category: 'Features',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224445/Screenshot_2025-10-23_175838_jj2h0n.png',
    tags: ['Voice Control', 'AI', 'Chatbot'],
    readTime: '4 min read'
  },
  {
    id: 5,
    title: 'Multiple Views for Maximum Productivity',
    slug: 'multiple-views-guide',
    excerpt: 'Explore Kanban, List, Card, Split, and Canvas views in Caffetest',
    content: `
      <h2>Choose Your Perfect View</h2>
      <p>Caffetest offers 5 different view modes to match your workflow preferences.</p>
      
      <h3>Available Views</h3>
      <ul>
        <li><strong>Kanban View:</strong> Drag-and-drop task management</li>
        <li><strong>List View:</strong> Detailed tabular format</li>
        <li><strong>Card View:</strong> Visual card-based layout</li>
        <li><strong>Split View:</strong> Multi-panel workspace</li>
        <li><strong>Canvas View:</strong> Flexible visual planning</li>
      </ul>
      
      <h3>Switching Views</h3>
      <p>You can switch between views instantly without losing any data or context.</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-03',
    category: 'Features',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224493/Screenshot_2025-10-23_175516_fibjzj.png',
    tags: ['Views', 'UI', 'Productivity'],
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Best Practices for Test Automation',
    slug: 'test-automation-best-practices',
    excerpt: 'Learn industry best practices for effective test automation',
    content: `
      <h2>Test Automation Best Practices</h2>
      <p>Follow these proven strategies to maximize the effectiveness of your test automation efforts.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Write maintainable and readable test code</li>
        <li>Use Page Object Model pattern</li>
        <li>Implement proper test data management</li>
        <li>Leverage AI for test generation</li>
      </ul>
      
      <h3>Common Pitfalls to Avoid</h3>
      <p>Learn from common mistakes and improve your testing strategy.</p>
    `,
    author: 'Gyana Prakash Khandual',
    date: '2024-11-01',
    category: 'Best Practices',
    image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224515/Screenshot_2025-10-23_163532_vw9zpf.png',
    tags: ['Best Practices', 'Automation', 'Testing'],
    readTime: '8 min read'
  }
];

// GET - Fetch all blogs or single blog by slug
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filteredBlogs = [...blogs];

    // Filter by slug
    if (slug) {
      const blog = filteredBlogs.find(b => b.slug === slug);
      if (!blog) {
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(blog);
    }

    // Filter by category
    if (category) {
      filteredBlogs = filteredBlogs.filter(b => b.category === category);
    }

    // Search functionality
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBlogs = filteredBlogs.filter(b => 
        b.title.toLowerCase().includes(searchLower) ||
        b.excerpt.toLowerCase().includes(searchLower) ||
        b.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort by date (newest first)
    filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json(filteredBlogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create new blog
export async function POST(request) {
  try {
    const body = await request.json();
    
    const newBlog = {
      id: blogs.length + 1,
      slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...body,
      date: new Date().toISOString().split('T')[0]
    };

    blogs.push(newBlog);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// PUT - Update blog
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id } = body;

    const index = blogs.findIndex(b => b.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs[index] = { ...blogs[index], ...body };

    return NextResponse.json(blogs[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));

    const index = blogs.findIndex(b => b.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs.splice(index, 1);

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}