interface Productions {
  role: string;
  names: string[];
}

interface Performers {
  role: string;
  names: string[];
}

type WORKS_DATA_INNER = {
  title: string;
  summary: string;
  category: string;
  content: string[];
  roles: string[];
  productions: Productions[];
  performers?: Performers[];
  photo?: string;
  schedule: {
    date: string;
    location: string;
  }[];
  images?: string[];
};

type WORKS_DATA = {
  [key: string]: WORKS_DATA_INNER[];
};
