import { sourceSerifItalic } from '../fonts';

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={sourceSerifItalic.variable}>{children}</div>;
}
