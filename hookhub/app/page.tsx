import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'HookHub - Discover Claude Code Hooks',
  description: 'Browse and discover open source hooks for Claude Code. Enhance your workflow with automation, code quality, security, and monitoring hooks.',
};

export default function Home() {
  return <HomeClient />;
}
