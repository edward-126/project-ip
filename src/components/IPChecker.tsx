"use client";

import { useState, useEffect } from "react";
import { IPData } from "@/types/ip";
import Link from "next/link";

const IPChecker = () => {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchIP = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/get-ip");
      if (!response.ok) throw new Error("Failed to fetch IP");

      const data: IPData = await response.json();
      setIpData(data);
    } catch (err) {
      setError("Unable to detect your IP address");
      console.error("IP fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const copyToClipboard = async () => {
    if (ipData?.ip) {
      try {
        await navigator.clipboard.writeText(ipData.ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between bg-zinc-950 px-4">
      <div className="h-2 w-full" />
      <div className="w-full max-w-sm rounded-3xl border border-zinc-900 bg-zinc-950 px-6 py-8">
        <div className="text-center">
          <h1 className="mb-1 text-3xl font-semibold text-zinc-50">
            Your Public IP
          </h1>
          <p className="mb-8 text-zinc-400">
            Instantly check your current public IP address
          </p>

          {loading && (
            <div className="flex items-center justify-center rounded-xl border border-zinc-900 bg-zinc-800/5 p-6 py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span className="ml-3 text-blue-600">Detecting...</span>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-900/20 bg-red-900/5 p-6">
              <p className="-mb-1 text-red-600">{error}</p>
              <button
                onClick={fetchIP}
                className="btn text-blue-600 underline underline-offset-2 hover:text-blue-500"
              >
                Try Again
              </button>
            </div>
          )}

          {ipData && !loading && (
            <div className="space-y-6">
              <div className="rounded-xl border border-zinc-900 bg-zinc-800/5 p-6">
                <div className="mb-2 font-mono text-4xl font-semibold text-blue-600">
                  {ipData.ip}
                </div>
                <p className="text-xs text-zinc-500">
                  Detected at {new Date(ipData.timestamp).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={copyToClipboard}
                  className={`btn flex-1 text-zinc-50 ${
                    copied ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-600/80"
                  }`}
                >
                  {copied ? "Copied!" : "Copy IP"}
                </button>
                <button
                  onClick={fetchIP}
                  className="btn flex-1 bg-blue-600/10 text-white transition-colors duration-200 hover:bg-blue-600/5"
                >
                  Refresh
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-2 flex items-center gap-0.5 text-xs font-medium text-zinc-800">
        Made By
        <Link
          href="https://thilina.dev/"
          className="transition-colors duration-300 hover:text-blue-600"
          target="_blank"
        >
          Thilina R.
        </Link>
        <div className="mx-2 h-3 w-px bg-zinc-800" />
        <Link
          href="https://github.com/edward-126/project-ip"
          className="transition-colors duration-300 hover:text-blue-600"
          target="_blank"
        >
          Visit the Git Repo
        </Link>
      </div>
    </div>
  );
};

export default IPChecker;
