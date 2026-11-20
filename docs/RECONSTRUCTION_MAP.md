# ForgePilot reconstruction map

## Sources and scope

- Reference implementation: the complete project source currently in `E:\projects\DevFlow-AI`.
- Study document: [16.4｜DevFlow AI 企业面试问答与参考答法](https://pcnb6zj457pg.feishu.cn/wiki/HyBGwWcyhi4u7Sk23OVc71dtnTe), read in view-only mode.
- The study document groups 77 questions into eight topics. The commits below follow that topic order and split each topic into code-level implementation points. They are a reconstruction record, not a claim about the original project's historical development dates.
- ForgePilot keeps the source implementation and its existing behavior, with product-facing branding updated. Internal compatibility identifiers are changed only when the related configuration is updated together.

## Implementation sequence

| Step | Study topics | Reproduction point | Main source areas | Status |
| --- | --- | --- | --- | --- |
| 01 | Q3, Q9–11, Q17, Q70 | Project scaffold, runtime settings, dependency manifests, local service configuration, and initial frontend shell | `backend/app/core`, `backend/app/db`, `frontend/package*`, `docker-compose.yml`, `scripts/` | Planned |
| 02 | Q3, Q18, Q33 | Relational entities and typed API contracts for repositories, conversations, engineering records, workflows, and drafts | `backend/app/db/models.py`, `backend/app/schemas/` | Recreated |
| 03 | Q3, Q18 | GitHub client, repository connection, synchronization, and scheduled refresh | `backend/app/services/github/`, `backend/app/services/repos_sync.py`, `backend/app/api/routes/repos.py` | Recreated |
| 04 | Q4, Q32 | Issue, PR, and CI retrieval endpoints with their source evidence and status models | `backend/app/api/routes/{issues,pull_requests,ci}.py`, `backend/app/services/github/` | Recreated |
| 05 | Q8–15 | Model client, prompt definitions, structured output validation, and the reusable agent base | `backend/app/services/llm/`, `backend/app/services/agents/base.py` | Recreated |
| 06 | Q32 | Specialized Issue, PR review, and CI debugging agents with fallback and validated results | `backend/app/services/agents/{issue_agent,pr_review_agent,ci_debug_agent}.py` | Recreated |
| 07 | Q17–22 | Chat routing, conversation persistence, SSE progress, and tool-call loop | `backend/app/services/agents/chat_agent.py`, `backend/app/api/routes/chat.py`, `backend/app/services/conversations.py` | Recreated |
| 08 | Q20–25 | Typed application tools and MCP client/server integration | `backend/app/services/mcp_client.py`, `backend/app/mcp/` | Recreated |
| 09 | Q26–29 | Skill discovery, scoped instructions, tool validation, and skill endpoints | `backend/app/services/skills/`, `backend/app/skills/`, `backend/app/api/routes/skills.py` | Recreated |
| 10 | Q30–31 | Agent error handling, safe fallbacks, and service degradation behavior | `backend/app/services/agents/`, `backend/app/services/rag/`, `backend/app/main.py` | Planned |
| 11 | Q33, Q35 | Workflow specification, planning, task dependencies, and structured agent handoff | `backend/app/services/agents/planner_agent.py`, `backend/app/schemas/workflow.py` | Recreated |
| 12 | Q36–39 | Dependency-aware execution, bounded parallelism, observation, evidence checks, and synthesis | `backend/app/services/agents/{workflow_orchestrator,observer_agent,synthesis_agent}.py` | Recreated |
| 13 | Q38–41 | Replanning limits, task persistence, failure propagation, and workflow history UI | `backend/app/db/models.py`, `backend/app/api/routes/chat.py`, `frontend/app/workflow-runs/` | Recreated |
| 14 | Q42, Q44 | Knowledge document extraction, normalization, chunking, and upload flow | `backend/app/services/rag/{document_extraction,document_processing,chunking,source_policy}.py` | Recreated |
| 15 | Q45–47 | Embeddings, vector-store adapter, and document indexing | `backend/app/services/rag/{embeddings,vector_store,indexing}.py` | Planned |
| 16 | Q43, Q48 | Hybrid vector/keyword retrieval and reranking | `backend/app/services/rag/{retrieval,rerank,knowledge_base}.py` | Planned |
| 17 | Q50–51 | Evidence-gated answers, citations, and hallucination controls | `backend/app/services/rag/{qa,answer_gate}.py`, `backend/app/api/routes/rag.py` | Planned |
| 18 | Q55–56 | Pre-retrieval plus Agent-selected follow-up retrieval | `backend/app/services/agents/chat_agent.py`, `backend/app/services/rag/` | Planned |
| 19 | Q52 | Current-code search, dependency relationships, and code graph views | `backend/app/services/{code_search,code_analysis,knowledge_graph}.py`, `frontend/app/code-graph/` | Planned |
| 20 | Q53–54 | Project-document discovery, fingerprinting, incremental re-indexing, and stale-index handling | `backend/app/services/project_indexing.py`, `backend/app/api/routes/project_index.py` | Planned |
| 21 | Q57–60 | Conversation history, session memory, project memory, provenance, and approval boundaries | `backend/app/services/{conversations,chat_memory,memory_hub}.py`, `backend/app/db/models.py` | Planned |
| 22 | Q61–64 | Context assembly, token budgets, summary placement, compaction, and tool-pair preservation | `backend/app/services/context_compression.py`, `backend/app/services/agents/chat_agent.py` | Planned |
| 23 | Q65–66 | Treat tool and RAG content as untrusted data; filter sensitive output and retain source attribution | `backend/app/core/security.py`, `backend/app/services/agents/`, `backend/app/services/rag/` | Planned |
| 24 | Q67 | Draft-confirm-execute lifecycle, permission checks, and audit trail | `backend/app/api/routes/action_drafts.py`, `backend/app/services/permissions.py`, `backend/app/db/models.py` | Planned |
| 25 | Q68, Q70 | PR worktree checkout and local Compose deployment; document that a worktree is not a security sandbox | `backend/app/services/worktree_manager.py`, `docker-compose.yml`, `scripts/` | Planned |
| 26 | Q71–73 | Fixed evaluation suites, traceable scoring, prompt regression checks, and RAGAS metrics | `backend/app/services/evals/`, `backend/app/api/routes/evaluations.py`, `frontend/app/evals/` | Planned |
| 27 | Q71, Q74–75 | Feedback reasons, run trace lookup, and measured performance/token reporting | `backend/app/api/routes/feedback.py`, `backend/app/services/feedback_notifications.py`, `frontend/components/feedback-controls.tsx` | Planned |
| 28 | Q69, Q76–77 | Final source comparison, package/file conventions, and explicit record of deferred enterprise work | `docs/`, `backend/requirements.txt`, `frontend/package.json` | Planned |

## Documented limits to preserve

- The source describes basic handling of untrusted tool output, not a comprehensive prompt-injection test program.
- Worktrees select the relevant checkout but do not isolate processes, credentials, or network access like a sandbox.
- The current deployment path is local Docker Compose plus separately started frontend/backend services.
- The source document says there has been no large-scale concurrency/load test; this reconstruction will not invent throughput numbers.
- Real authentication, complete tenant isolation, crash-resumable long tasks, and a process sandbox are described as future work, not implemented features.

## Final checks

- Compare the reconstructed source against the reference tree, allowing only documented ForgePilot branding and reconstruction documentation changes.
- Run the existing backend tests and frontend production build; record any unavailable external service separately.
- Check the package lock, ignored local files, and GitHub `main` branch after the final push.
