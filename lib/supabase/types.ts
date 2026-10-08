export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type EnquiryStatus = "new" | "contacted" | "in_progress" | "closed";

export type Database = {
  public: {
    Tables: {
      enquiries: {
        Row: {
          id: string;
          name: string;
          company: string | null;
          email: string;
          phone: string | null;
          service: string;
          industry: string | null;
          project_type: string | null;
          message: string;
          source: string;
          status: EnquiryStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          company?: string | null;
          email: string;
          phone?: string | null;
          service: string;
          industry?: string | null;
          project_type?: string | null;
          message: string;
          source?: string;
          status?: EnquiryStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          company?: string | null;
          email?: string;
          phone?: string | null;
          service?: string;
          industry?: string | null;
          project_type?: string | null;
          message?: string;
          source?: string;
          status?: EnquiryStatus;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          slug: string;
          name: string;
          short_description: string | null;
          icon: string | null;
          display_order: number;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_description?: string | null;
          icon?: string | null;
          display_order?: number;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          short_description?: string | null;
          icon?: string | null;
          display_order?: number;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      industries: {
        Row: {
          id: string;
          slug: string;
          name: string;
          short_description: string | null;
          icon: string | null;
          display_order: number;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_description?: string | null;
          icon?: string | null;
          display_order?: number;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          short_description?: string | null;
          icon?: string | null;
          display_order?: number;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      enquiry_status: EnquiryStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type EnquiryRow = Database["public"]["Tables"]["enquiries"]["Row"];
export type EnquiryInsert = Database["public"]["Tables"]["enquiries"]["Insert"];
export type ServiceRow = Database["public"]["Tables"]["services"]["Row"];
export type IndustryRow = Database["public"]["Tables"]["industries"]["Row"];
