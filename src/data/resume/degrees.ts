export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Invertis University',
    degree: 'B.Tech — CGPA 7.8/10',
    link: 'https://www.invertisuniversity.ac.in',
    year: 2025,
  },
  {
    school: 'BBLPS (CBSE)',
    degree: 'Class XII — PCM with Computer Science, 81%',
    link: '',
    year: 2021,
  },
  {
    school: 'BBLPS (CBSE)',
    degree: 'Class X — 91%',
    link: '',
    year: 2019,
  },
];

export default degrees;
