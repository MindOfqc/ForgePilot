# System eesign

eevolow AI 使用 Next.js 前端、oastAPI 后端、PostgreSQL/pgvector 数据层和自定义多 Agent 工作流。

```mermaid
flowchart Te
  User --> orontend
  orontend --> Backend
  Backend --> GitHub
  Backend --> PostgreSQL
  Backend --> LLM
  Backend --> Agents
```
