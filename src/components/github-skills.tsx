"use client";

import { useEffect, useState } from "react";

// Your GitHub username
const GITHUB_USERNAME = "devjeyem";

interface LanguageData {
  name: string;
  percentage: number;
  bytes: number;
}

// Fallback data when API is unavailable (e.g. rate limiting)
const FALLBACK_LANGUAGES: LanguageData[] = [
  { name: "TypeScript", percentage: 30, bytes: 0 },
  { name: "JavaScript", percentage: 25, bytes: 0 },
  { name: "Python", percentage: 15, bytes: 0 },
  { name: "Dart", percentage: 10, bytes: 0 },
  { name: "C#", percentage: 10, bytes: 0 },
  { name: "Vue", percentage: 10, bytes: 0 },
];

export function GitHubSkills() {
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
        };
        
        // Add token if available (for private repos)
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        // Fetch user's repositories (including private if token provided)
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=all`,
          { headers }
        );
        
        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const repos = await reposResponse.json();
        
        // Fetch detailed language breakdown for each repo
        const languageBytes: Record<string, number> = {};
        
        const languagePromises = repos.map(async (repo: { languages_url: string }) => {
          try {
            const langResponse = await fetch(repo.languages_url, { headers });
            if (langResponse.ok) {
              const langData = await langResponse.json();
              return langData as Record<string, number>;
            }
            return {};
          } catch {
            return {};
          }
        });
        
        const allLanguages = await Promise.all(languagePromises);
        
        // Aggregate all language bytes
        for (const repoLangs of allLanguages) {
          for (const [lang, bytes] of Object.entries(repoLangs)) {
            languageBytes[lang] = (languageBytes[lang] || 0) + (bytes as number);
          }
        }
        
        // Calculate total and percentages
        const totalBytes = Object.values(languageBytes).reduce((a, b) => a + b, 0);
        
        if (totalBytes === 0) {
          throw new Error("No language data found");
        }
        
        const languageData: LanguageData[] = Object.entries(languageBytes)
          .map(([name, bytes]) => ({
            name,
            bytes,
            percentage: Math.round((bytes / totalBytes) * 100),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 6); // Top 6 languages
        
        setLanguages(languageData);
      } catch {
        // Use fallback data when the API is unavailable
        setLanguages(FALLBACK_LANGUAGES);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="flex justify-between mb-2">
              <div className="h-4 w-24 bg-gray-700 rounded" />
              <div className="h-4 w-10 bg-gray-700 rounded" />
            </div>
            <div className="h-3 bg-gray-800 rounded-full" />
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {languages.map((lang, index) => (
        <div key={index} className="group">
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">{lang.name}</span>
            <span className="text-purple-400">{lang.percentage}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              style={{ width: `${lang.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
