// Supabase Configuration
const SUPABASE_URL = 'https://oqdofeolospjxnckvnoh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG9mZW9sb3NwanhuY2t2bm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1OTgzMTQsImV4cCI6MjA4NTE3NDMxNH0.tLBvGazYfwfF5VrB5amcEd1tZmPBKj7ZPEkE4ZN1mxM';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
