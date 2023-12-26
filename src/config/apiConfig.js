
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ozhwdirkskxmjmzehocv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96aHdkaXJrc2t4bWptemVob2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MDQ2NjMsImV4cCI6MjAxOTE4MDY2M30.QbU634lwKH8RfyWSMDuN3LvgZnnafx4pM3BD9pWld_8"
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}; 