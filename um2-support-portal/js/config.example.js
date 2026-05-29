// ─────────────────────────────────────────────────────────────────────────────
// config.example.js  —  UM2 Support Portal · Configuration Template
//
// Copy this file to  js/config.js  and fill in your real values.
// js/config.js  is listed in  .gitignore  and must never be committed.
// ─────────────────────────────────────────────────────────────────────────────

var SUPABASE_URL      = "https://YOUR_PROJECT_ID.supabase.co";
var SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
var TICKET_API_URL    = "https://YOUR_PROJECT_ID.supabase.co/functions/v1/swift-endpoint";

// Staff portal only — validated server-side by your Edge Function.
var ADMIN_TOKEN       = "YOUR_ADMIN_TOKEN";