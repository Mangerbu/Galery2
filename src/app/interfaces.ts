export interface Photo {
    alt_description:          string;
    blur_hash:                string;
    breadcrumbs:              Breadcrumb[];
    color:                    string;
    created_at:               Date;
    current_user_collections: any[];
    description:              null | string;
    height:                   number;
    id:                       string;
    liked_by_user:            boolean;
    likes:                    number;
    links:                    RootObjectLinks;
    promoted_at:              Date | null;
    slug:                     string;
    sponsorship:              Sponsorship | null;
    topic_submissions:        TopicSubmissions;
    updated_at:               Date;
    urls:                     Urls;
    user:                     User;
    width:                    number;
   }
   
   export interface Breadcrumb {
    index: number;
    slug:  string;
    title: string;
    type:  string;
   }
   
   export interface RootObjectLinks {
    download:          string;
    download_location: string;
    html:              string;
    self:              string;
   }
   
   export interface Sponsorship {
    impression_urls: string[];
    sponsor:         User;
    tagline:         string;
    tagline_url:     string;
   }
   
   export interface User {
    accepted_tos:          boolean;
    bio:                   string;
    first_name:            string;
    for_hire:              boolean;
    id:                    string;
    instagram_username:    null | string;
    last_name:             null | string;
    links:                 UserLinks;
    location:              null | string;
    name:                  string;
    portfolio_url:         null | string;
    profile_image:         ProfileImage;
    social:                Social;
    total_collections:     number;
    total_likes:           number;
    total_photos:          number;
    total_promoted_photos: number;
    twitter_username:      null | string;
    updated_at:            Date;
    username:              string;
   }
   
   export interface UserLinks {
    followers: string;
    following: string;
    html:      string;
    likes:     string;
    photos:    string;
    portfolio: string;
    self:      string;
   }
   
   export interface ProfileImage {
    large:  string;
    medium: string;
    small:  string;
   }
   
   export interface Social {
    instagram_username: null | string;
    paypal_email:       null;
    portfolio_url:      null | string;
    twitter_username:   null | string;
   }
   
   export interface TopicSubmissions {
    "architecture-interior"?: ArchitectureInterior;
    nature?:                  ArchitectureInterior;
    "textures-patterns"?:     ArchitectureInterior;
    wallpapers?:              Wallpapers;
   }
   
   export interface ArchitectureInterior {
    status: string;
   }
   
   export interface Wallpapers {
    approved_on?: Date;
    status:       string;
   }
   
   export interface Urls {
    full:     string;
    raw:      string;
    regular:  string;
    small:    string;
    small_s3: string;
    thumb:    string;
   }
   
   export interface Results {
    results: Photo[];
    total: number;
    total_pages: number;
   }