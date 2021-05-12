export interface Categories {
    status:      string;
    copyright:   string;
    num_results: number;
    results:     Result[];
}

export interface Result {
    list_name:             string;
    display_name:          string;
    list_name_encoded:     string;
    oldest_published_date: Date;
    newest_published_date: Date;
    updated:               Updated;
}

export enum Updated {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
}
