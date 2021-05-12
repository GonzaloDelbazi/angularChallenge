export interface SingleBook {
    status:      string;
    copyright:   string;
    num_results: number;
    results:     Resultados[];
}

export interface Resultados {
    url:            string;
    publication_dt: Date;
    byline:         string;
    book_title:     string;
    book_author:    string;
    summary:        string;
    uuid:           string;
    uri:            string;
    isbn13:         string[];
}
