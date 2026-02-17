// src/app/api/docs/route.js
// Reads .md files from src/app/note/... via Node fs
// Usage: GET /api/docs?path=note/test/cypress/basic/Intro.md

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "No path provided" }, { status: 400 });
  }

  // Resolve relative to the project src/app directory
  // e.g. filePath = "note/test/cypress/basic/Intro.md"
  const absolutePath = path.join(process.cwd(), "src", "app", filePath);

  // Security: make sure the resolved path stays inside src/app
  const basePath = path.join(process.cwd(), "src", "app");
  if (!absolutePath.startsWith(basePath)) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  try {
    const content = fs.readFileSync(absolutePath, "utf-8");
    return new NextResponse(content, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return NextResponse.json(
      { error: `File not found: ${filePath}` },
      { status: 404 }
    );
  }
}