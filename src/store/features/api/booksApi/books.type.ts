export interface IBookData {
  items: IBookItem[];
  totalItems: number;
}

export interface IParamsQuery {
  searchValue: string;
  subjectCategory: string;
  sortingBy: string;
  startIndex: number;
}

export interface IBookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      },
      {
        type: string;
        identifier: string;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };

  searchInfo: {
    textSnippet: string;
  };
}
