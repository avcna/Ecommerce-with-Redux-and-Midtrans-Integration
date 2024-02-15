export type TVideos = {
  imgsrc: string;
  clip: string;
};

export type TSocialLink = {
  icon: string;
};

export type THeroApi = {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: TVideos[];
  sociallinks: TSocialLink[];
};

export type TItems = {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
};

export type TPopularSales = {
  title: string;
  items: TItems[];
};

export type THighlight = {
  heading: string;
  title: string;
  text: string;
  btn: string;
  url: string;
  img: string;
};

export type TSneaker = THighlight;

export type TTopRateSales = TPopularSales;

export type TNews = {
  title: string;
  text: string;
  img: string;
  url: string;
  like: string;
  time: string;
  by: string;
  btn: string;
};

export type TStory = {
  title: string;
  news: TNews[];
};

export type TFooterApi = {
  titles: { title: string }[];
  links: { link: string }[][];
};
