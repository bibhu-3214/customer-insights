import React from "react";
import type { z } from "zod";
import type { WorkspaceRecord } from "./platform/workspaceRecords";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AccountWorkspaceGate from "./platform/AccountWorkspaceGate";
import WorkspaceDashboard from "./platform/WorkspaceDashboard";
import { schemas, kindSchema } from "./platform/workspaceRecords";
import product from "../product.json";
import "./styles.css";
const schema: z.ZodType<WorkspaceRecord> =
  schemas[kindSchema.parse(product.kind)];
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountWorkspaceGate<WorkspaceRecord> schema={schema}>
        {(state) => <>
<aside aria-label="Consolidation notice" className="border-b border-line bg-soft px-5 py-4 text-sm leading-7 text-ink"><strong className="font-semibold">Continue in BillFlow.</strong> Export JSON here, then review Import Customer Insights in BillFlow. Past purchases remain historical records, separate from invoices and payments. This source workspace remains available.</aside>
<WorkspaceDashboard state={state} />
</>}
      </AccountWorkspaceGate>
    </BrowserRouter>
  </React.StrictMode>,
);
