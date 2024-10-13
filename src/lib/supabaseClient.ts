import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hzlxtcndukixsjucliuu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bHh0Y25kdWtpeHNqdWNsaXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzIyMDAsImV4cCI6MjA0MzgwODIwMH0.koFAY-O-Hxh2UZYMjQatDqmFbdgx-RUKaF27E8JA3kM')