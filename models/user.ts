export interface Goal {
  id: string;
  title: string;
  description: string;
  targetMetric: {
    type: 'commits' | 'prs' | 'issues';
    count: number;
    period: 'daily' | 'weekly' | 'monthly';
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Progress {
  goalId: string;
  date: Date;
  achieved: boolean;
  metrics: {
    commits?: number;
    prs?: number;
    issues?: number;
  };
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  githubId: string;
  goals: Goal[];
  progress: Progress[];
  createdAt: Date;
  updatedAt: Date;
}
