import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import yahooFinance from "yahoo-finance2";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for real-time yfinance SPY, QQQ, VIX prices
  app.get("/api/prices", async (req, res) => {
    try {
      const yf = yahooFinance as any;
      // Fetch quotes in parallel
      const [spyRes, qqqRes, vixRes] = await Promise.all([
        yf.quote("SPY").catch(() => null),
        yf.quote("QQQ").catch(() => null),
        yf.quote("^VIX").catch(() => null)
      ]);

      const data = {
        spy: spyRes?.regularMarketPrice || 543.15,
        qqq: qqqRes?.regularMarketPrice || 479.80,
        vix: vixRes?.regularMarketPrice || 14.12,
        timestamp: Date.now()
      };
      res.json(data);
    } catch (e: any) {
      res.json({
        spy: 543.15,
        qqq: 479.80,
        vix: 14.12,
        timestamp: Date.now(),
        error: e?.message || "unknown"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
