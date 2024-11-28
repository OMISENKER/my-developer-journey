# MyDevJourney

MyDevJourney is a web application that helps developers track their growth and achievements through GitHub integration. Set personal development goals, track your progress, and get quarterly insights about your coding journey.

## Features

- GitHub Authentication
- Goal Setting and Tracking
- GitHub Activity Monitoring
- Quarterly Progress Reports ("MyDevJourney Wrapped")
- Visual Progress Analytics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri_here
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Set up GitHub OAuth:
   - Go to GitHub Developer Settings
   - Create a new OAuth App
   - Set the homepage URL to `http://localhost:3000`
   - Set the callback URL to `http://localhost:3000/api/auth/callback/github`
   - Copy the Client ID and Client Secret to your `.env.local` file

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- MongoDB
- NextAuth.js
- Tailwind CSS
- Chart.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
