# ForgePilot contribution and reconstruction rules

ForgePilot is being reconstructed from the complete local DevFlow AI source tree, using the linked Feishu study document as the topic order. The linked document is an interview Q&A with eight topic groups and 77 questions, not a chronological coding tutorial. The reconstruction log follows those topics while splitting work into concrete implementation points and adding dependencies where needed.

All commits in this repository record changes made during this reconstruction. Their dates are the actual commit dates; no earlier development dates are backfilled. The original source is preserved separately in `E:\projects\DevFlow-AI`.

## Branches and commits

- `main` contains the reproduced project and its verification record.
- Use short branches named `feat/<topic>`, `fix/<topic>`, `docs/<topic>`, or `chore/<topic>` for future changes.
- Use Conventional Commit titles such as `feat:`, `fix:`, `docs:`, `test:`, and `chore:`.
- Keep each commit to one reviewable implementation point. Include the study question range and source paths in the commit body when the work belongs to the reconstruction.

## Verification and claims

- Record the commands actually run and their results. Mark checks that were not run as such.
- Separate implemented behavior from planned work, demos, and deployment claims.
- Do not claim production throughput, multi-tenant isolation, or a process sandbox without evidence.

## Local data

Do not commit `.env`, API credentials, local databases, uploads, generated indexes, build output, or other `.data/` runtime state. Add new configuration keys to `.env.example` with placeholders or local development values only.
