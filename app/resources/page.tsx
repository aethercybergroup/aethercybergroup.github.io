import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p>
        Explore our resources including knowledge base, tools, API documentation, and policy templates.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/resources/knowledge-base">Knowledge Base</Link>
        </li>
        <li>
          <Link href="/resources/tools">Tools</Link>
        </li>
        <li>
          <Link href="/resources/api">API Reference</Link>
        </li>
        <li>
          <Link href="/resources/policy-templates">Policy Templates</Link>
        </li>
      </ul>
    </section>
  );
}
