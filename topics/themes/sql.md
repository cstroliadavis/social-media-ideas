# Theme: Data Systems, SQL & State Management

## Metadata
- **Theme Name**: Data Systems, SQL & State Management
- **Category**: Software Engineering & Architecture
- **Related Themes**: [[topics/themes/architecture.md|Pragmatic Architecture]], [[topics/themes/coding-standards.md|Coding Standards]]

---

## 🗺️ Theme Mind Map

```mermaid
graph TD
    DATA["Data Systems, SQL & State"]
    
    DATA --> MODELING["Data Modeling & Relational Rigor"]
    DATA --> PERSISTENCE["Persistence vs. Application Memory"]
    DATA --> COMPACTION["Systems Thinking vs Code Tunnel Vision"]
    
    MODELING --> D1["[[topics/documents/the-myth-of-specialization.md|The Myth of Specialization]]"]
    PERSISTENCE --> D2["[[topics/documents/what-the-heck-is-this.md|What the Heck is 'this'?]]"]
    COMPACTION --> D3["[[topics/documents/stop-blindly-following-patterns.md|Stop Blindly Following Patterns]]"]
    COMPACTION --> D4["[[topics/documents/the-500-dollar-aspirin.md|The $500 Aspirin]]"]
```

---

## 📚 Related Document Vaults

| Document Title | ID | Pillar | Status | Core Angle / Contribution to Theme |
| :--- | :--- | :--- | :--- | :--- |
| [The Myth of Specialization](topics/documents/the-myth-of-specialization.md) | `TOP-014` | Pragmatic Architecture | Outlined | Why understanding SQL, relational databases, and query planning makes you 10x more effective as a full-stack engineer. |
| [Stop Blindly Following Patterns](topics/documents/stop-blindly-following-patterns.md) | `TOP-012` | Pragmatic Architecture | Outlined | Pushing business logic into inappropriate layers vs leveraging database constraints and set-based operations. |
| [The $500 Aspirin](topics/documents/the-500-dollar-aspirin.md) | `TOP-001` | Org Culture | Outlined | When a simple SQL view or index solves what engineering was planning to build an entire microservice for. |

---

## 💡 Key Theme Principles
- **Data Outlives Code**: Application frameworks will be rewritten three times before your database schema changes fundamentally.
- **Relational Integrity First**: Enforce constraints where the data lives.
