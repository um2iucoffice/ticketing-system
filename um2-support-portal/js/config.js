// ─────────────────────────────────────────────────────────────────────────────
// config.js  —  UM2 Support Portal · Environment Configuration
//
// ⚠️  IMPORTANT: This file contains secrets.
//     Add  js/config.js  to your .gitignore — NEVER commit this file.
//     A safe  js/config.example.js  template is provided for your repository.
// ─────────────────────────────────────────────────────────────────────────────

var SUPABASE_URL   = "https://nbjbievinjirlbyjodcm.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iamJpZXZpbmppcmxieWpvZGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTMzOTMsImV4cCI6MjA5NDY2OTM5M30.jKi9iDmBfXL473hJ5bGbJRvtGdoCERzmlzCGrz6Qx4E";
var TICKET_API_URL = "https://nbjbievinjirlbyjodcm.supabase.co/functions/v1/swift-endpoint";

// Staff portal only — validated server-side by your Edge Function.
var ADMIN_TOKEN    = "UM22021@oakkalar!";