#!/usr/bin/env bash
set -euo pipefail

# Ping the health endpoint to keep the instance awake.
# - BACKEND_PING_URL overrides the target URL (default: APP_URL/health).
# - BACKEND_AUTH_TOKEN is optional bearer token for protected endpoints.

DEFAULT_APP_URL="${APP_URL:-http://127.0.0.1:8000}"
PING_URL="${BACKEND_PING_URL:-$DEFAULT_APP_URL/health}"

AUTH_HEADER=""
if [[ -n "${BACKEND_AUTH_TOKEN:-}" ]]; then
  AUTH_HEADER=("-H" "Authorization: Bearer $BACKEND_AUTH_TOKEN")
fi

OUTPUT_FILE="${BACKEND_PING_LOG:-/tmp/backend-ping.log}"

timestamp() {
  date -u +"%Y-%m-%dT%H:%M:%SZ"
}

if curl -fsS --max-time 10 "${AUTH_HEADER[@]:-}" "$PING_URL" > /dev/null; then
  printf "%s ✅ %s\n" "$(timestamp)" "$PING_URL" >> "$OUTPUT_FILE"
else
  printf "%s ❌ %s\n" "$(timestamp)" "$PING_URL" >> "$OUTPUT_FILE"
fi
