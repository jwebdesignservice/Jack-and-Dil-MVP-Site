# Supabase Contact Form Setup

## ✅ What's Been Done

1. **Created `supabase-config.js`** - Contains your Supabase credentials
2. **Updated `contact-form.js`** - Now submits to Supabase database
3. **Updated `contact.html`** - Includes Supabase CDN library

## 🚀 How It Works

When users submit the contact form:
1. Form data is collected
2. Submitted to your Supabase `contact_submissions` table
3. Success/error message shown to user
4. You can view submissions in Supabase dashboard

## 📋 Your Supabase Credentials

- **Project URL:** `https://oqdofeolospjxnckvnoh.supabase.co`
- **Project ID:** `oqdofeolospjxnckvnoh`
- **Anon Key:** Stored in `supabase-config.js`

## 🔍 Viewing Submissions

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click on your project
3. Go to **Table Editor** → **contact_submissions**
4. You'll see all form submissions with:
   - Name, Email, Phone
   - Company, Project Type
   - Budget, Timeline
   - Message
   - Status (new/contacted/closed)
   - Created timestamp

## 🧪 Testing the Form

1. Open `contact.html` in your browser
2. Fill out the multi-step form
3. Submit it
4. Check your Supabase dashboard to see the submission appear

## ⚠️ Important Notes

- The Supabase library is loaded via CDN (no npm install needed)
- Your anon key is safe to use in frontend code
- RLS policies control what users can do (insert only)
- Only authenticated users (you) can read submissions

## 🎨 Features Added

✅ Async form submission to Supabase
✅ Loading state during submission
✅ Success message on successful submission
✅ Error handling and error message
✅ All form fields mapped to database columns

## 📊 Managing Leads

You can update the `status` field in Supabase to track leads:
- `new` - Fresh submission
- `contacted` - You've reached out
- `qualified` - Potential client
- `closed` - Deal closed or not interested

## 🔐 Security

- RLS policies prevent unauthorized access
- Anonymous users can only INSERT
- You need to be authenticated to SELECT/UPDATE/DELETE
- Anon key has limited permissions

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify RLS policies are set up correctly
3. Ensure table name is `contact_submissions`
4. Check that all column names match

---

**Ready to test!** Just open `contact.html` and submit the form. 🚀
