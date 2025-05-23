import React, { useEffect, useState } from "react";
import { FaGithub, FaCodeBranch } from "react-icons/fa";

const username = "lucasfdenipoti";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setUser);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      });
  }, []);

  return (
    <div className="min-h-screen bg-github-background text-github-text px-6 py-10">
      <header className="flex flex-col sm:flex-row items-center sm:justify-between mb-10 border-b border-github-border pb-6">
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full border border-github-border"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  {user.name || user.login}
                </h1>
                <p className="text-github-secondary">@{user.login}</p>
              </div>
            </>
          )}
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          className="flex items-center text-github-accent hover:underline mt-4 sm:mt-0"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" />
          Ver no GitHub
        </a>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-github-surface border border-github-border rounded-lg p-5 shadow-card hover:border-github-accent transition-colors"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-github-accent hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-github-secondary text-sm mt-2 line-clamp-3">
              {repo.description || "Sem descrição"}
            </p>
            <div className="mt-4 text-sm text-github-secondary flex items-center">
              <FaCodeBranch className="mr-2" />
              Atualizado em{" "}
              {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
